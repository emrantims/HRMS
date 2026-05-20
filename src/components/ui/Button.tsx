import React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "accent" | "gold" | "outline" | "secondary" | "ghost" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseClass = "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default: "bg-primary text-primary-foreground shadow-[0_1px_2px_rgba(16,24,40,0.08),0_8px_18px_rgba(16,24,40,0.12)] hover:-translate-y-0.5 hover:bg-primary/90",
      accent: "bg-gradient-to-b from-accent to-[#6927da] text-white shadow-[0_1px_2px_rgba(124,58,237,0.25),0_10px_24px_rgba(124,58,237,0.25)] hover:-translate-y-0.5 hover:brightness-105",
      gold: "aliyas-gold text-gold-foreground shadow-[0_1px_2px_rgba(245,189,25,0.25),0_10px_22px_rgba(245,189,25,0.22)] hover:-translate-y-0.5 hover:brightness-105",
      destructive: "bg-destructive text-white shadow-[0_1px_2px_rgba(220,38,38,0.18),0_10px_20px_rgba(220,38,38,0.18)] hover:-translate-y-0.5 hover:bg-destructive/90",
      outline: "border border-border bg-surface text-primary shadow-[0_1px_2px_rgba(16,24,40,0.06)] hover:-translate-y-0.5 hover:bg-muted hover:shadow-[0_8px_18px_rgba(16,24,40,0.08)]",
      secondary: "border border-border/80 bg-muted text-primary shadow-sm hover:-translate-y-0.5 hover:bg-muted/80 hover:shadow-md",
      ghost: "text-primary hover:bg-muted hover:shadow-sm",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-8 rounded-lg px-3 text-xs",
      lg: "h-11 rounded-xl px-8 text-base",
      icon: "h-10 w-10",
    };

    return <button ref={ref} className={cn(baseClass, variants[variant], sizes[size], className)} {...props} />;
  }
);
Button.displayName = "Button";
