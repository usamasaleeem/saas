import { FadeIn } from "@/components/animations/FadeIn";
import { CalEmbed } from "@/components/ui/CalEmbed";
import { Sparkles, Calendar, Zap, Users, ArrowLeft, CheckCircle2 } from "lucide-react";
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
      
      <div className="container mx-auto px-4 pt-24 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <FadeIn>
            <Link 
              href="/" 
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </FadeIn>

          {/* Header Section */}
          <div className="text-center mb-12">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4 border border-primary/20">
                <Sparkles className="w-3 h-3 mr-2" /> Personalized Demo
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
                Experience the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">AI Hiring.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
                Join a 30-minute deep dive with our experts. We&apos;ll show you how to automate your technical screening and find top talent 10x faster.
              </p>
            </FadeIn>
          </div>

          {/* Features Grid - 3 columns on larger screens, stacked on mobile */}
          <FadeIn delay={0.2} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 text-primary">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">Live AI Interview</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  See our AI voice agent conduct a real-time technical interview and provide intelligent scoring.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-500">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">Custom Workflow</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Learn how to integrate Hirel AI into your existing ATS and recruitment pipeline seamlessly.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-500">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">Enterprise Scaling</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Discuss volume pricing and custom voice model options for your organization&apos;s needs.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Calendar Section */}
          <FadeIn delay={0.3}>
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-primary/5 to-purple-500/5 px-6 py-4 border-b border-border/50">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Select a Time That Works For You</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500" /> 30 min session</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500" /> Free consultation</span>
                  </div>
                </div>
              </div>
              <div className="p-1">
                <CalEmbed />
              </div>
            </div>
          </FadeIn>

          {/* Trust Section */}
          <FadeIn delay={0.4} className="mt-12 text-center">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-6">Trusted by innovative teams worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              <div className="h-5 w-24 bg-foreground/20 rounded animate-pulse" />
              <div className="h-5 w-20 bg-foreground/20 rounded animate-pulse" />
              <div className="h-5 w-28 bg-foreground/20 rounded animate-pulse" />
              <div className="h-5 w-24 bg-foreground/20 rounded animate-pulse" />
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}