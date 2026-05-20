import React from "react";
import { cn } from "../../lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent" | "gold" | "success" | "warning" | "destructive" | "outline" | "secondary";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "border-primary/10 bg-primary text-primary-foreground shadow-sm",
    accent: "border-accent/20 bg-accent/10 text-accent shadow-sm",
    gold: "border-gold/25 bg-gold/15 text-warning shadow-sm",
    success: "border-success/20 bg-success/10 text-success shadow-sm",
    warning: "border-warning/20 bg-warning/10 text-warning shadow-sm",
    destructive: "border-destructive/20 bg-destructive/10 text-destructive shadow-sm",
    outline: "border-border bg-surface text-primary shadow-sm",
    secondary: "border-border bg-muted text-muted-foreground shadow-sm",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold leading-none transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
