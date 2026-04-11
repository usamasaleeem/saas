import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "center", className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" ? "text-center mx-auto" : "text-left", className)} {...props}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground md:max-w-[80%] mx-auto pb-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
