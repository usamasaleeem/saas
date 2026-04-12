import { FadeIn } from "@/components/animations/FadeIn";
import { CalEmbed } from "@/components/ui/CalEmbed";
import { Sparkles, Calendar, Zap, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Book a Demo | Hirel AI",
  description: "Schedule a personalized demo to see how Hirel AI can transform your hiring process.",
};

export default function BookDemoPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Link 
              href="/" 
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Info */}
            <div className="lg:col-span-5 space-y-8">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-2 border border-primary/20">
                  <Sparkles className="w-3 h-3 mr-2" /> Personalized Demo
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
                  Experience the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">AI Hiring.</span>
                </h1>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  Join a 30-minute deep dive with our experts. We&apos;ll show you how to automate your technical screening and find top talent 10x faster.
                </p>
              </FadeIn>

              <FadeIn delay={0.2} className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Live AI Interview</h3>
                    <p className="text-sm text-muted-foreground">See our AI voice agent conduct a real-time technical interview and provide scoring.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 text-indigo-500">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Custom Workflow</h3>
                    <p className="text-sm text-muted-foreground">Learn how to integrate Hirel AI into your existing ATS and recruitment pipeline.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-500">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Enterprise Scaling</h3>
                    <p className="text-sm text-muted-foreground">Discuss volume pricing and custom voice model options for your organization.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3} className="pt-8 border-t border-border/50">
                <p className="text-sm font-semibold text-foreground mb-4">Trusted by industry leaders</p>
                <div className="flex flex-wrap gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  {/* These would be small grayscale logos */}
                  <div className="h-6 w-24 bg-foreground/20 rounded animate-pulse" />
                  <div className="h-6 w-20 bg-foreground/20 rounded animate-pulse" />
                  <div className="h-6 w-28 bg-foreground/20 rounded animate-pulse" />
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Calendar */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.2}>
                <CalEmbed />
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
