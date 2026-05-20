import React from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border border-input bg-surface px-3.5 py-2 text-sm text-primary shadow-sm transition-all placeholder:text-muted-foreground/65 hover:border-muted-foreground/30 focus-visible:border-accent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/10 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
