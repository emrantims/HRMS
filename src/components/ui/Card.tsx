import React from "react";
import { cn } from "../../lib/utils";
import { TrendingUp } from "lucide-react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/90 bg-surface text-surface-foreground shadow-[0_1px_2px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.05)] ring-1 ring-white/70 transition-all duration-200 hover:shadow-[0_2px_4px_rgba(16,24,40,0.08),0_14px_36px_rgba(16,24,40,0.08)]",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: CardProps) {
  return <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-base font-semibold leading-none tracking-tight text-primary", className)} {...props} />;
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm leading-6 text-muted-foreground", className)} {...props} />;
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}

export function CardFooter({ className, ...props }: CardProps) {
  return <div className={cn("flex items-center p-6 pt-0", className)} {...props} />;
}

export function MetricCard({
  title,
  value,
  subtext,
  progress,
  highlight,
}: {
  title: string;
  value: string | React.ReactNode;
  subtext?: React.ReactNode;
  progress?: number;
  highlight?: boolean;
}) {
  return (
    <Card className="group relative overflow-hidden p-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/80 via-accent/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">{title}</p>
        {highlight ? (
          <span className="rounded-full border border-destructive/20 bg-destructive/10 px-2.5 py-1 text-[10px] font-bold text-destructive shadow-sm">Action</span>
        ) : (
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold/20 bg-gold/15 text-warning shadow-sm">
            <TrendingUp className="h-3.5 w-3.5" />
          </span>
        )}
      </div>
      <div className="mt-4 flex items-end gap-2">
        <h3 className={cn("text-3xl font-bold tracking-tight text-primary", typeof value === "string" && value.includes("AED") ? "italic" : "")}>{value}</h3>
      </div>
      {subtext && <div className="mt-2 text-xs leading-5 text-muted-foreground">{subtext}</div>}
      {progress !== undefined && (
        <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-muted shadow-inner">
          <div className="h-full rounded-full bg-gradient-to-r from-success via-accent to-gold shadow-sm" style={{ width: `${progress}%` }} />
        </div>
      )}
    </Card>
  );
}
