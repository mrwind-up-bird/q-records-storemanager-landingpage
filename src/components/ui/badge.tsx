import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'gold' | 'success' | 'warning' | 'outline';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const badgeVariants: Record<BadgeVariant, string> = {
  default: 'bg-walnut/50 text-off-white border-walnut/30',
  gold: 'bg-gold/10 text-gold border-gold/30',
  success: 'bg-green-500/10 text-green-400 border-green-500/30',
  warning: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  outline: 'bg-transparent text-off-white border-off-white/20',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1',
        'text-xs font-medium rounded-full',
        'border',
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
