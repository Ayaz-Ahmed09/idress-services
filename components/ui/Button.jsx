import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export function Button({
  className,
  variant = "primary",
  size = "md",
  isLoading,
  children,
  ...props
}) {
  const variants = {
    primary:
      "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-orange-500/20",
    accent:
      "bg-accent hover:bg-accent-hover text-white shadow-lg shadow-orange-500/20 animate-pulse-fast",
    outline:
      "border-2 border-primary/20 hover:border-primary/50 text-primary bg-transparent",
    ghost: "hover:bg-gray-100 text-gray-700",
    white: "bg-white text-primary hover:bg-gray-50 shadow-md",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg font-bold", // Thumb-friendly for mobile
    icon: "h-12 w-12 p-2",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className,
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}
