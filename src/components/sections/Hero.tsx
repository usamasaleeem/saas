import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Play, ArrowRight, Sparkles, ChevronRight, Clock, Users, Zap } from "lucide-react";
import Link from "next/link";
import { HeroDemo } from "./HeroDemo";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-background">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-[350px] h-[350px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* ===== TEXT BLOCK ===== */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <FadeIn delay={0.05}>
            {/* Pill Badge */}
            <Link href="#demo" className="group inline-flex mb-6">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-border/50 bg-background/50 backdrop-blur-md text-sm font-medium hover:border-primary/50 transition-colors shadow-sm">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary mr-2">
                  <Sparkles className="w-3 h-3" />
                </span>
                Hirel AI 2.0 is live
                <span className="ml-2 pl-2 border-l border-border/50 text-muted-foreground flex items-center group-hover:text-foreground transition-colors text-xs">
                  See what&apos;s new <ChevronRight className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.02em] text-foreground leading-[1.05] mb-5">
              AI-Powered Interviews<br className="hidden sm:block" /> That Hire{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-purple-500">Faster and Smarter</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-medium leading-relaxed mb-8">
              Reduce screening time by 80%. Let AI conduct, evaluate, and score candidate interviews — so your team focuses on closing the best.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-8">
              <Link href="/signup">
                <Button size="lg" className="h-13 px-8 text-base font-semibold group">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button size="lg" variant="outline" className="h-13 px-8 text-base font-medium group border-border/60">
                  <Play className="mr-2 w-4 h-4 group-hover:text-primary transition-colors" />
                  Watch Demo
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* Social proof + Stats strip */}
          <FadeIn delay={0.25}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground mb-0">
              {/* Avatar stack */}
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-background bg-gradient-to-br from-primary/40 to-purple-500/40" style={{ zIndex: 5 - i }} />
                  ))}
                </div>
                <span className="font-medium">10,000+ teams</span>
              </div>

              <div className="hidden sm:block w-px h-5 bg-border" />

              {/* Inline metrics */}
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="font-semibold text-foreground">80%</span>
                  <span>faster</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-semibold text-foreground">24/7</span>
                  <span>availability</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-sky-500" />
                  <span className="font-semibold text-foreground">0</span>
                  <span>bias</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ===== HERO DEMO IN BROWSER FRAME ===== */}
        <FadeIn delay={0.35}>
          <div id="demo" className="mt-14 md:mt-16 relative mx-auto max-w-5xl group">
            {/* Ambient glow behind */}
            <div className="absolute -inset-3 bg-gradient-to-r from-primary/25 to-purple-500/25 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />
            
            <div className="relative rounded-2xl border border-border/50 bg-background/60 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-white/5">
              {/* macOS Browser Bar */}
              <div className="h-10 border-b border-border/40 flex items-center justify-between px-4 bg-muted/30">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                <div className="text-[11px] text-muted-foreground font-medium flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  Live Interview Session
                </div>
                <div className="w-16" /> {/* spacer for centering */}
              </div>

              {/* Demo content */}
              <div className="p-3 md:p-6">
                <HeroDemo />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
