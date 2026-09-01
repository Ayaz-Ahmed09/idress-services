import { cn } from "@/lib/utils";

export function GlassCard({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl rounded-2xl text-slate-900",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
