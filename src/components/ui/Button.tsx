import React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "accent" | "outline" | "ghost" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseClass = "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 tracking-wide";
    
    const variants = {
      default: "bg-primary text-[#FFF3E6] hover:bg-primary/90 shadow-sm",
      accent: "bg-accent text-[#FFF3E6] hover:bg-accent/90 shadow-sm",
      destructive: "bg-destructive text-white hover:bg-destructive/90 shadow-sm",
      outline: "border border-border bg-surface text-primary hover:bg-[#FFF3E6]",
      ghost: "hover:bg-primary/5 text-primary",
    };

    const sizes = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-9 rounded-md px-3 text-xs",
      lg: "h-11 rounded-md px-8 text-base",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(baseClass, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
