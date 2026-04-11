"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { TrendingDown, TrendingUp, Clock, Target } from "lucide-react";

export function ROI() {
  const metrics = [
    {
      label: "Time to Hire",
      value: 65,
      suffix: "%",
      prefix: "-",
      description: "Reduction in average time to close a candidate.",
      icon: <TrendingDown className="text-emerald-500 w-5 h-5" />,
      color: "emerald"
    },
    {
      label: "Engineering Hours Saved",
      value: 40,
      suffix: "+",
      description: "Hours saved per week on screening interviews.",
      icon: <Clock className="text-blue-500 w-5 h-5" />,
      color: "blue"
    },
    {
      label: "Offer Acceptance",
      value: 30,
      suffix: "%",
      prefix: "+",
      description: "Increase in acceptance due to faster process.",
      icon: <TrendingUp className="text-purple-500 w-5 h-5" />,
      color: "purple"
    },
    {
      label: "Candidate Quality",
      value: 95,
      suffix: "%",
      description: "Of hires pass their 6-month probation.",
      icon: <Target className="text-rose-500 w-5 h-5" />,
      color: "rose"
    }
  ];

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              The ROI is clear.
            </h2>
            <p className="text-xl text-background/70">
              Stop throwing expensive engineering time at top-of-funnel screening. Transform your hiring into a scalable, high-conversion machine.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <FadeIn key={metric.label} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-background/10 rounded-lg">
                    {metric.icon}
                  </div>
                  <h3 className="font-medium text-background/80">{metric.label}</h3>
                </div>
                
                <div className="text-4xl md:text-5xl font-bold mb-4 my-auto">
                  {metric.prefix}<AnimatedCounter value={metric.value} />{metric.suffix}
                </div>
                
                <p className="text-sm text-background/60 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
