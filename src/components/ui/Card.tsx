import React from "react";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn("bg-surface rounded-xl border border-primary/5 shadow-sm overflow-hidden", className)}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: CardProps) {
  return <div className={cn("px-6 py-4 border-b border-primary/5", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-xs font-bold uppercase tracking-tight text-primary", className)} {...props} />;
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-primary/60", className)} {...props} />;
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={cn("p-6", className)} {...props} />;
}

export function CardFooter({ className, ...props }: CardProps) {
  return <div className={cn("flex items-center p-6 pt-0", className)} {...props} />;
}

export function MetricCard({ title, value, subtext, progress, highlight }: { title: string; value: string | React.ReactNode; subtext?: React.ReactNode; progress?: number; highlight?: boolean }) {
  return (
    <Card className="p-4">
      <p className="text-[10px] uppercase font-bold text-primary/50 tracking-wider flex justify-between">
        {title}
        {highlight && <span className="text-destructive underline lowercase">Action Needed</span>}
      </p>
      <div className="flex items-baseline gap-2 mt-1">
        <h3 className={cn("text-2xl font-bold font-sans", typeof value === 'string' && value.includes("AED") ? "italic" : "")}>{value}</h3>
      </div>
      {subtext && <div className="mt-3 text-[10px] text-primary/40">{subtext}</div>}
      {progress !== undefined && (
        <div className="w-full bg-background h-1 rounded-full mt-3 overflow-hidden">
          <div className="bg-accent h-full" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </Card>
  );
}
