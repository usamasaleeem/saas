import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Mic, BarChart3, Globe2, ShieldCheck } from "lucide-react";

export function FeaturesBento() {
  const features = [
    {
      title: "Real-Time AI Voice Agent",
      description: "Not a chatbot. A fully autonomous voice agent that conducts lifelike technical interviews, adapts to candidate answers, and probes deeper.",
      icon: <Mic className="w-6 h-6 text-indigo-500" />,
      className: "md:col-span-2 md:row-span-2",
      badge: "Core Tech",
      visual: (
        <div className="mt-8 relative h-32 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border border-indigo-500/10 flex items-center justify-center group-hover:border-indigo-500/30 transition-colors">
          <div className="flex gap-2 items-center z-10">
            {[1, 2, 3, 4, 3, 2, 1].map((h, i) => (
              <div key={i} className="w-2 bg-indigo-500/50 group-hover:bg-indigo-500 rounded-full animate-pulse transition-colors" style={{ height: `${h * 12}px`, animationDelay: `${i * 100}ms` }} />
            ))}
            <div className="ml-4 px-3 py-1 bg-background/80 backdrop-blur rounded-full text-xs font-medium border border-border shadow-sm text-foreground">Listening to Candidate...</div>
          </div>
        </div>
      )
    },
    {
      title: "Zero-Bias Scoring",
      description: "Blind, objective evaluations based strictly on your custom rubrics. Eliminate human subconscious bias entirely.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      className: "md:col-span-1",
      visual: (
        <div className="mt-6 flex flex-col gap-2 relative z-10">
          <div className="h-2 w-full bg-emerald-500/10 rounded-full overflow-hidden"><div className="h-full bg-emerald-500/80 w-[95%] rounded-full group-hover:bg-emerald-500 transition-colors" /></div>
          <div className="h-2 w-full bg-emerald-500/10 rounded-full overflow-hidden"><div className="h-full bg-emerald-500/80 w-[88%] rounded-full group-hover:bg-emerald-500 transition-colors" /></div>
          <div className="h-2 w-full bg-emerald-500/10 rounded-full overflow-hidden"><div className="h-full bg-emerald-500/80 w-[100%] rounded-full group-hover:bg-emerald-500 transition-colors" /></div>
        </div>
      )
    },
    {
      title: "Instant Insights",
      description: "Stop guessing. Get detailed transcripts, skill matrices, and confident 'Hire / No Hire' recommendations.",
      icon: <BarChart3 className="w-6 h-6 text-amber-500" />,
      className: "md:col-span-1",
      visual: (
        <div className="mt-6 flex justify-between items-end h-16 px-4 bg-background border border-border/50 rounded-xl group-hover:border-amber-500/30 transition-colors">
          {[30, 50, 40, 70, 80, 95].map((v, i) => <div key={i} className="w-4 rounded-t-sm bg-gradient-to-t from-amber-500/10 to-amber-500/60 group-hover:to-amber-500 transition-colors" style={{ height: `${v}%` }} />)}
        </div>
      )
    },
    {
      title: "Scale Globally Instantly",
      description: "Deploy interviews to thousands of candidates simultaneously in 30+ native spoken languages.",
      icon: <Globe2 className="w-6 h-6 text-sky-500" />,
      className: "md:col-span-2",
      badge: "Enterprise",
      visual: (
        <div className="absolute right-0 bottom-0 top-0 w-1/2 overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none flex justify-end">
          <Globe2 className="w-64 h-64 text-sky-500 translate-x-12 translate-y-12" />
        </div>
      )
    }
  ];

  return (
    <div className="ss"></div>
  );
}
