"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { X, Check, CalendarX, CalendarCheck, Code2, Sparkles, HelpCircle, ClipboardCheck, Clock, Zap, Frown, TrendingUp } from "lucide-react";

const comparisons = [
  {
    oldIcon: <CalendarX className="w-5 h-5" />,
    oldText: "Weeks spent scheduling initial screening calls",
    newIcon: <CalendarCheck className="w-5 h-5" />,
    newText: "Candidates interview instantly, 24/7 — zero scheduling",
  },
  {
    oldIcon: <Code2 className="w-5 h-5" />,
    oldText: "Engineers pulled away from actual coding to screen",
    newIcon: <Sparkles className="w-5 h-5" />,
    newText: "Zero engineering hours wasted on early-stage screening",
  },
  {
    oldIcon: <HelpCircle className="w-5 h-5" />,
    oldText: "Inconsistent questions with unconscious human bias",
    newIcon: <ClipboardCheck className="w-5 h-5" />,
    newText: "Standardized rubrics with objective, blind scoring",
  },
  {
    oldIcon: <Clock className="w-5 h-5" />,
    oldText: "Candidates ghosting or waiting weeks for any feedback",
    newIcon: <Zap className="w-5 h-5" />,
    newText: "Instant feedback and real-time candidate progression",
  },
  {
    oldIcon: <Frown className="w-5 h-5" />,
    oldText: 'Hiring decisions based on "gut feel" and vibes',
    newIcon: <TrendingUp className="w-5 h-5" />,
    newText: "Data-driven decisions backed by full transcripts & scores",
  },
];

export function ProblemSolution() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <SectionHeading
            title="The Old Way vs. The Hirel Way"
            subtitle="Traditional hiring is broken. See how every painful step gets replaced."
            className="mb-16"
          />
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          {/* Column Headers */}
          <FadeIn>
            <div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 mb-6 px-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                  <X className="w-4 h-4 text-red-500" />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider text-red-500">Traditional Hiring</span>
              </div>
              <div className="w-px" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider text-emerald-500">With Hirel AI</span>
              </div>
            </div>
          </FadeIn>

          {/* Comparison Rows */}
          <div className="space-y-3">
            {comparisons.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 group">
                  {/* Old Way Card */}
                  <div className="flex items-start gap-3 rounded-2xl border border-red-200/50 dark:border-red-900/20 bg-red-50/40 dark:bg-red-950/10 p-4 md:p-5 transition-all duration-300 group-hover:border-red-300 dark:group-hover:border-red-800/40 group-hover:bg-red-50/80 dark:group-hover:bg-red-950/20">
                    <div className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-500 flex items-center justify-center">
                      {item.oldIcon}
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.oldText}</p>
                  </div>

                  {/* Center Arrow */}
                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-muted/50 border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* New Way Card */}
                  <div className="flex items-start gap-3 rounded-2xl border border-emerald-200/50 dark:border-emerald-900/20 bg-emerald-50/40 dark:bg-emerald-950/10 p-4 md:p-5 transition-all duration-300 group-hover:border-emerald-300 dark:group-hover:border-emerald-800/40 group-hover:bg-emerald-50/80 dark:group-hover:bg-emerald-950/20 group-hover:shadow-lg group-hover:shadow-emerald-500/5">
                    <div className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 flex items-center justify-center">
                      {item.newIcon}
                    </div>
                    <p className="text-sm md:text-base text-foreground font-medium leading-relaxed">{item.newText}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
