import { Hero } from "@/components/sections/Hero";
import { SocialProofMarquee } from "@/components/sections/SocialProofMarquee";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturesBento } from "@/components/sections/FeaturesBento";
import { ROI } from "@/components/sections/ROI";
import { Testimonials } from "@/components/sections/Testimonials";
import { UseCases } from "@/components/sections/UseCases";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Metadata } from "next";
import {
  LayoutDashboard,
  Video,
  BarChart3,
  FileCheck,
  Calendar,
  Headphones,
  Radio,
  Award,
  Check,
  Shield,
  Lock,
  Globe,
  Cpu,
  Zap,
  ArrowRight,
  Sparkles,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hirel AI - AI Interviews That Hire Faster",
  description: "Reduce screening time by 80%. Let AI conduct, evaluate, and score candidate interviews with Hirel AI.",
};

/* ═════════════════════════════════════════════════════════════════
   1. INTERVIEW FLOW — Visual candidate journey
   ═════════════════════════════════════════════════════════════════ */
function InterviewFlow() {
  const steps = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Instant Invite",
      desc: "Candidates get a smart link. No scheduling ping-pong. They interview whenever they are ready — 24/7.",
      light: "bg-blue-500/10 text-blue-500",
      ring: "ring-blue-500/20",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Join the Room",
      desc: "One click enters a branded, calm voice space. No downloads. Camera optional. Stress-free from the first second.",
      light: "bg-indigo-500/10 text-indigo-500",
      ring: "ring-indigo-500/20",
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: "Live AI Conversation",
      desc: "The agent listens, adapts, and probes deeper. It feels natural because it responds to emotion and context.",
      light: "bg-purple-500/10 text-purple-500",
      ring: "ring-purple-500/20",
      pulse: true,
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Instant Scorecard",
      desc: "Before the candidate even stands up, a full transcript, rubric scores, and a verdict are ready in your inbox.",
      light: "bg-emerald-500/10 text-emerald-500",
      ring: "ring-emerald-500/20",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Advance or Nurture",
      desc: "Top talent auto-books a human final round. Everyone else gets warm, personalized feedback instantly.",
      light: "bg-amber-500/10 text-amber-500",
      ring: "ring-amber-500/20",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Candidate Experience
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            The smoothest interview <span className="text-primary">experience ever built</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Candidates love it. Recruiters love it. Here is exactly what happens from invite to hire.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Desktop connector line */}
      
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, i) => (
              <div key={i} className="relative flex md:flex-col items-center md:text-center group">
                {/* Mobile vertical connector */}
                {i !== steps.length - 1 && (
                  <div className="md:hidden absolute left-[1.75rem] top-16 bottom-[-2rem] w-px bg-gradient-to-b from-border to-transparent" />
                )}

                {/* Icon bubble */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-2xl ${step.light} flex items-center justify-center border-2 border-background shadow-lg mb-0 md:mb-4 mr-6 md:mr-0 group-hover:scale-110 transition-transform duration-300 ${step.ring} ring-2`}
                >
                  {step.icon}
                  {step.pulse && (
                    <span className="absolute inset-0 rounded-2xl bg-purple-500/20 animate-ping" />
                  )}
                </div>

                <div className="flex-1 text-left md:text-center">
                  <h3 className="text-lg font-bold mb-1 flex items-center md:justify-center gap-2">
                    {step.title}
                    <ArrowRight className="w-4 h-4 text-muted-foreground md:hidden" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}





/* ═════════════════════════════════════════════════════════════════
   4. SECURITY & TRUST — Enterprise badges
   ═════════════════════════════════════════════════════════════════ */
function SecurityTrust() {
  const badges = [
    { icon: <Shield className="w-6 h-6" />, title: "SOC 2 Type II", desc: "Certified & audited annually" },
    { icon: <Lock className="w-6 h-6" />, title: "GDPR Compliant", desc: "Full EU data protection" },
    { icon: <Globe className="w-6 h-6" />, title: "99.99% Uptime", desc: "Enterprise-grade SLA" },
    { icon: <Cpu className="w-6 h-6" />, title: "AES-256", desc: "End-to-end encryption" },
  ];

  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Enterprise-grade <span className="text-background/70">security</span> from day one
            </h2>
            <p className="text-lg text-background/60 mb-8 leading-relaxed">
              Your candidate data is sacred. We treat it with bank-level encryption, strict compliance, and zero-retention voice processing.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Zero data retention", "Regular pentests", "Role-based access", "Full audit logs"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-background/10 text-background/80 rounded-full text-sm font-medium border border-background/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {badges.map((b, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors"
              >
                <div className="text-background/80 mb-3">{b.icon}</div>
                <h3 className="font-bold text-background/90 mb-1">{b.title}</h3>
                <p className="text-sm text-background/50">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════════════════════════
   5. INTEGRATION GRID — Stack ecosystem
   ═════════════════════════════════════════════════════════════════ */


/* ═════════════════════════════════════════════════════════════════
   MAIN LANDING PAGE
   ═════════════════════════════════════════════════════════════════ */
export default function LandingPage() {
  return (
    <>
      <Hero />
      <SocialProofMarquee />
      <ProblemSolution />
      <HowItWorks />
      
      {/* NEW — Catchy candidate journey */}
      <InterviewFlow />
      
      <FeaturesBento />
      
   
      <ROI />
      
      {/* NEW — Pricing tiers */}
     
      <Testimonials />
      <UseCases />
      
      {/* NEW — Security & compliance */}
      <SecurityTrust />
      
      <FAQ />
      
      {/* NEW — Integration ecosystem */}
     
      <CTA />
    </>
  );
}