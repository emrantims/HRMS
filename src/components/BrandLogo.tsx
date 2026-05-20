import React from "react";
import { cn } from "../lib/utils";

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
  markClassName?: string;
  textClassName?: string;
};

export function BrandLogo({ compact = false, className, markClassName, textClassName }: BrandLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-black ring-1 ring-gold/30", markClassName)}>
        <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
          <defs>
            <linearGradient id="aliyasGold" x1="10" y1="8" x2="54" y2="58" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FFE27A" />
              <stop offset="0.48" stopColor="#F5BD19" />
              <stop offset="1" stopColor="#B77905" />
            </linearGradient>
          </defs>
          <path d="M10 56 31.5 8l7.8 13.5L23.6 56H10Z" fill="url(#aliyasGold)" />
          <path d="M36.5 8 58 56H44.6L32 27.8 25.3 43h11.2l5.7 13H16.8L36.5 8Z" fill="url(#aliyasGold)" />
        </svg>
      </div>
      {!compact && (
        <div className={cn("leading-none", textClassName)}>
          <div className="text-sm font-black tracking-[0.18em] text-gold">ALIYAS</div>
          <div className="mt-1 text-[10px] font-semibold tracking-[0.42em] text-white/55">GROUP</div>
        </div>
      )}
    </div>
  );
}
