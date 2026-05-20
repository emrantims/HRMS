import React from "react";
import { cn } from "../../lib/utils";
import { TrendingUp } from "lucide-react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn("rounded-2xl border border-border/80 bg-surface text-surface-foreground shadow-sm transition-shadow duration-200", className)}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: CardProps) {
  return <div className={cn("flex flex-col space-y-1.5 p-5", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-sm font-semibold leading-none tracking-tight text-primary", className)} {...props} />;
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />;
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={cn("p-5 pt-0", className)} {...props} />;
}

export function CardFooter({ className, ...props }: CardProps) {
  return <div className={cn("flex items-center p-5 pt-0", className)} {...props} />;
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
    <Card className="group overflow-hidden p-5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{title}</p>
        {highlight ? (
          <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-semibold text-destructive">Action</span>
        ) : (
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 text-warning">
            <TrendingUp className="h-3.5 w-3.5" />
          </span>
        )}
      </div>
      <div className="mt-3 flex items-end gap-2">
        <h3 className={cn("text-3xl font-bold tracking-tight text-primary", typeof value === "string" && value.includes("AED") ? "italic" : "")}>{value}</h3>
      </div>
      {subtext && <div className="mt-2 text-xs text-muted-foreground">{subtext}</div>}
      {progress !== undefined && (
        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-accent" style={{ width: `${progress}%` }} />
        </div>
      )}
    </Card>
  );
}
