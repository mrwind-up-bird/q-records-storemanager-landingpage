import { cn } from './utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: `
    bg-gold text-vinyl-black font-semibold
    hover:bg-gold-hover active:bg-gold-muted
    shadow-lg hover:shadow-xl
    transition-all duration-300
  `,
  secondary: `
    bg-walnut text-off-white font-medium
    hover:bg-walnut-light active:bg-walnut
    border border-walnut-light/30
    transition-all duration-300
  `,
  outline: `
    bg-transparent text-gold font-medium
    border-2 border-gold
    hover:bg-gold/10 active:bg-gold/20
    transition-all duration-300
  `,
  ghost: `
    bg-transparent text-off-white font-medium
    hover:bg-off-white/5 active:bg-off-white/10
    transition-all duration-300
  `,
  link: `
    bg-transparent text-gold font-medium
    hover:underline underline-offset-4
    p-0 h-auto
  `,
};

export const buttonSizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm rounded-lg',
  md: 'h-11 px-6 text-base rounded-lg',
  lg: 'h-13 px-8 text-lg rounded-xl',
  xl: 'h-16 px-10 text-xl rounded-xl',
};

export const buttonBase =
  'inline-flex items-center justify-center gap-2 font-sans tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-vinyl-black disabled:opacity-50 disabled:cursor-not-allowed';

export function getButtonClasses(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md'
): string {
  return cn(buttonBase, buttonVariants[variant], variant !== 'link' && buttonSizes[size]);
}
