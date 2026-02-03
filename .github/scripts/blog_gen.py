#!/usr/bin/env python3
"""
Blog Generator for Letter to Blog Pipeline
Converts .memory/*.md files into polished blog posts using Anthropic API
"""

import os
import sys
import argparse
from pathlib import Path
from datetime import datetime
import anthropic
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Config file for project-specific settings
CONFIG_FILE = Path(".memory/.blog_config")


def get_api_key():
    """Get API key from environment, project config, or global config"""
    # 1. Environment variable (highest priority)
    api_key = os.getenv('ANTHROPIC_API_KEY')
    if api_key:
        return api_key, "environment"

    # 2. Project-specific config
    if CONFIG_FILE.exists():
        key = CONFIG_FILE.read_text().strip()
        if key:
            return key, "project"

    # 3. Global Claude config
    global_config = Path.home() / ".claude" / ".credentials"
    if global_config.exists():
        try:
            key = global_config.read_text().strip()
            if key:
                return key, "global"
        except Exception:
            pass

    return None, None


def setup_project_key():
    """Interactive setup for project-specific API key"""
    print("\n🔐 Project API Key Setup")
    print("-" * 40)
    print("This will store an API key specific to this project.")
    print(f"Location: {CONFIG_FILE}")
    print("\nGet your key from: https://console.anthropic.com/\n")

    api_key = input("Enter your Anthropic API key: ").strip()

    if not api_key:
        print("❌ No key provided, setup cancelled")
        return False

    # Create .memory if it doesn't exist
    CONFIG_FILE.parent.mkdir(exist_ok=True)

    # Save the key
    CONFIG_FILE.write_text(api_key)

    # Add to .gitignore if not already there
    gitignore = Path(".gitignore")
    gitignore_content = gitignore.read_text() if gitignore.exists() else ""
    if ".memory/.blog_config" not in gitignore_content:
        with open(gitignore, "a") as f:
            f.write("\n# Blog generator API key\n.memory/.blog_config\n")
        print("✅ Added .memory/.blog_config to .gitignore")

    print(f"✅ API key saved to {CONFIG_FILE}")
    return True


def get_latest_memory_file():
    """Find the most recent letter file in .memory/"""
    memory_dir = Path(os.path.abspath('.memory'))

    if not memory_dir.exists():
        print("❌ .memory/ directory not found")
        sys.exit(1)

    # Find all letter_*.md files
    letter_files = sorted(memory_dir.glob('letter_*.md'), reverse=True)

    if not letter_files:
        print("❌ No letter files found in .memory/")
        sys.exit(1)

    return letter_files[0]


def generate_blog_post(memory_content: str, api_key: str) -> str:
    """Use Anthropic API to convert memory file to blog post"""
    client = anthropic.Anthropic(api_key=api_key)

    prompt = f"""You are a technical blog writer. Convert this development session memory into an engaging, public-ready blog post.

INPUT (Session Memory):
{memory_content}

REQUIREMENTS:
1. Transform technical decisions into narrative insights
2. Keep the "Pain Log" as "Lessons Learned" or "Challenges"
3. Make it readable for a general developer audience
4. Add markdown frontmatter with: title, date, tags, excerpt
5. Use proper markdown formatting with headers, code blocks, lists
6. Maintain technical accuracy but improve readability

OUTPUT FORMAT:
---
title: "[Engaging Title]"
date: {datetime.now().strftime('%Y-%m-%d')}
tags: [relevant, tags, here]
excerpt: "Brief summary of the post"
---

[Blog post content in markdown]

Generate the blog post now:"""

    message = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=4096,
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    return message.content[0].text


def save_blog_post(content: str, source_file: Path):
    """Save generated blog post to drafts/"""
    drafts_dir = Path(os.path.abspath('drafts'))
    drafts_dir.mkdir(exist_ok=True)

    # Generate filename based on source
    timestamp = datetime.now().strftime('%Y-%m-%d')
    output_file = drafts_dir / f"blog_{timestamp}_{source_file.stem}.md"

    output_file.write_text(content, encoding='utf-8')
    print(f"✅ Blog post generated: {output_file}")
    return output_file


def main():
    """Main execution flow"""
    parser = argparse.ArgumentParser(description='Generate blog posts from memory files')
    parser.add_argument('--setup-project', action='store_true',
                        help='Set up a project-specific API key')
    parser.add_argument('--check-key', action='store_true',
                        help='Check which API key source is being used')
    args = parser.parse_args()

    if args.setup_project:
        setup_project_key()
        return

    if args.check_key:
        api_key, source = get_api_key()
        if api_key:
            masked = api_key[:8] + "..." + api_key[-4:]
            print(f"✅ API key found from: {source}")
            print(f"   Key: {masked}")
        else:
            print("❌ No API key found")
            print("\nOptions:")
            print("  1. Set ANTHROPIC_API_KEY environment variable")
            print("  2. Run: python3 blog_gen.py --setup-project")
            print("  3. Add key to GitHub Secrets for CI/CD")
        return

    print("🎨 Letter to Blog: Generating blog post...")

    # Get API key
    api_key, source = get_api_key()
    if not api_key:
        print("❌ No API key found")
        print("\nOptions:")
        print("  1. Set ANTHROPIC_API_KEY environment variable")
        print("  2. Run: python3 blog_gen.py --setup-project")
        print("  3. Add key to GitHub Secrets for CI/CD")
        sys.exit(1)

    print(f"🔑 Using API key from: {source}")

    # Get latest memory file
    memory_file = get_latest_memory_file()
    print(f"📖 Reading: {memory_file}")

    # Read content
    memory_content = memory_file.read_text(encoding='utf-8')

    # Generate blog post
    print("🤖 Calling Anthropic API...")
    blog_content = generate_blog_post(memory_content, api_key)

    # Save to drafts
    output_file = save_blog_post(blog_content, memory_file)

    print(f"✅ Success! Blog post saved to: {output_file}")
    print("🚀 Ready for review and publishing!")


if __name__ == "__main__":
    main()
