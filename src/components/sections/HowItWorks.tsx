"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Settings, PhoneCall, FileBarChart } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Define the Role & Rubric",
      description: "Provide a job description and the key skills you want to evaluate. Hirel AI instantly generates a custom interview plan.",
      icon: <Settings className="w-6 h-6" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      mockUI: (
        <div className="space-y-3 relative z-10">
          <div className="flex items-center justify-between">
            <span className="font-medium text-sm">Role Setup</span>
            <span className="text-xs px-2 py-1 bg-muted rounded-md border">Frontend Engineer</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {["React", "TypeScript", "System Design"].map(s => (
              <span key={s} className="text-[10px] px-2 py-0.5 rounded-full border border-primary/20 bg-primary/5 text-primary">{s}</span>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "02",
      title: "AI Conducts the Interview",
      description: "Candidates receive a link to join a conversational voice interview. Our AI engages them naturally, asking follow-ups and diving deep.",
      icon: <PhoneCall className="w-6 h-6" />,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      mockUI: (
        <div className="flex items-center gap-4 h-12 relative z-10">
          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
          </div>
          <div className="flex gap-1 h-5 items-end">
            {[40, 70, 30, 80, 50, 90, 60, 40].map((h, i) => (
              <div key={i} className="w-1.5 bg-purple-500/40 rounded-full" style={{ height: `${h}%`, minHeight: '4px' }} />
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-auto bg-muted px-2 py-1 rounded font-mono">04:12</span>
        </div>
      )
    },
    {
      id: "03",
      title: "Review Actionable Insights",
      description: "Get a detailed scorecard, complete transcript, and a decisive recommendation on whether to advance the candidate.",
      icon: <FileBarChart className="w-6 h-6" />,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      mockUI: (
        <div className="space-y-3 relative z-10">
           <div className="flex justify-between items-end border-b border-border/50 pb-2">
             <span className="text-sm font-semibold">Sarah Jenkins</span>
             <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">92 / 100</span>
           </div>
           <div className="flex flex-col gap-1.5">
             <div className="flex items-center justify-between text-[11px]"><span className="text-muted-foreground">React JS</span><span className="font-medium">Strong Hire</span></div>
             <div className="flex items-center justify-between text-[11px]"><span className="text-muted-foreground">Communication</span><span className="font-medium text-emerald-600 dark:text-emerald-400">Exceptional</span></div>
           </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <SectionHeading
            title="How It Works"
            subtitle="Three simple steps to supercharge your hiring pipeline."
            className="mb-16"
          />
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <FadeIn key={step.id} delay={index * 0.1}>
              <div className="relative flex gap-8 mb-12 last:mb-0 group">
                {/* Connecting Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-[-3rem] w-px bg-border group-hover:bg-primary/50 transition-colors" />
                )}
                
                {/* Icon Marker */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-12 h-12 rounded-2xl ${step.bgColor} ${step.color} flex items-center justify-center border border-background shadow-sm`}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl font-bold mb-2 text-foreground flex items-center gap-4">
                    {step.title}
                    <span className="text-sm font-mono text-muted-foreground/50">STEP {step.id}</span>
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {step.description}
                  </p>
                  
                  {/* Mock UI Representation */}
                  <Card className="p-4 bg-background/50 backdrop-blur-sm border-border/50 shadow-sm relative overflow-hidden group-hover:border-primary/20 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    {step.mockUI}
                  </Card>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
