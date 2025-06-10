import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function PlaneBadge({ children, className }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full bg-plane-blue-light text-plane-blue-dark text-xs font-medium uppercase tracking-wider",
        className,
      )}
    >
      {children}
    </div>
  );
}
