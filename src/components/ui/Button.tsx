import React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "accent" | "gold" | "outline" | "secondary" | "ghost" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseClass = "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      accent: "bg-accent text-accent-foreground shadow hover:bg-accent/90",
      gold: "aliyas-gold text-gold-foreground shadow-sm hover:brightness-105",
      destructive: "bg-destructive text-white shadow-sm hover:bg-destructive/90",
      outline: "border border-border bg-surface text-primary shadow-sm hover:bg-muted",
      secondary: "bg-muted text-primary shadow-sm hover:bg-muted/80",
      ghost: "text-primary hover:bg-muted",
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
