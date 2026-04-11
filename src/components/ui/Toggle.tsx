"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  leftLabel?: string;
  rightLabel?: string;
}

export function Toggle({ checked, onChange, className, leftLabel, rightLabel }: ToggleProps) {
  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {leftLabel && (
        <span className={cn("text-sm font-medium", !checked ? "text-foreground" : "text-muted-foreground")}>
          {leftLabel}
        </span>
      )}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          checked ? "bg-primary" : "bg-muted-foreground/30"
        )}
      >
        <span
          className="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg ring-0"
          style={{ transform: checked ? "translateX(20px)" : "translateX(0px)" }}
        />
      </button>
      {rightLabel && (
        <span className={cn("text-sm font-medium", checked ? "text-foreground" : "text-muted-foreground")}>
          {rightLabel}
        </span>
      )}
    </div>
  );
}
