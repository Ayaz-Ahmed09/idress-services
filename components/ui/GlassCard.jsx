import { cn } from "@/lib/utils";

export function GlassCard({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "bg-white/70 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl",
        "dark:bg-slate-900/70 dark:border-slate-800/50",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
