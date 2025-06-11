import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function PlaneBadge({ children, className }: BadgeProps) {
  return (
    <div
      className={cn(
        "whitespace-nowrap max-w-min bg-[#E3EAFD] dark:bg-[#3368F04D] border border-[#0A0F2914] dark:border-[#FFFFFF24] text-[#133A9A] dark:text-white rounded-full px-3 py-1 text-xs font-medium",
        className,
      )}
    >
      {children}
    </div>
  );
}