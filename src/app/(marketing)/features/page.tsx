/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import { Metadata } from "next";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Mic, BrainCircuit, BarChart3, Puzzle, CheckCircle2, ArrowRight, Shield, Globe2, Zap, Clock, Users, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Features | Hirel AI",
  description: "Explore the powerful features of Hirel AI. From real-time AI voice interviews to advanced rubrics and insights.",
};

/* ------------------------------------------------------------------ */
/*  Inline Mock Visuals — Light Theme                                  */
/* ------------------------------------------------------------------ */

function VoiceWaveformMock() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 flex flex-col justify-between border border-slate-200 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-medium text-slate-600 tracking-wide">Live Interview</span>
        </div>
        <span className="text-[10px] font-mono text-slate-400">04:32</span>
      </div>
      <div className="flex-1 flex items-center justify-center gap-1 py-4">
        {[2,4,6,8,10,8,6,10,12,8,6,4,6,8,10,14,10,8,6,4,2,4,6,8,6,4,2].map((h, i) => (
          <div key={i} className="w-1 rounded-full bg-gradient-to-t from-indigo-400 to-indigo-600" style={{ height: `${h * 3}px` }} />
        ))}
      </div>
      <div className="mt-4 bg-slate-50 rounded-xl p-3 border border-slate-200">
        <p className="text-xs text-slate-600 leading-relaxed">"Can you walk me through how you'd design a rate limiter for a distributed system?"</p>
      </div>
    </div>
  );
}

function AnalysisDashboardMock() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 flex flex-col border border-slate-200 shadow-lg">
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-semibold text-slate-700 tracking-wide">Real-Time Evaluation</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold">STRONG</span>
      </div>
      {[
        { label: "Technical Depth", score: 92, color: "from-indigo-500 to-indigo-400" },
        { label: "Communication", score: 88, color: "from-purple-500 to-purple-400" },
        { label: "Problem Solving", score: 95, color: "from-emerald-500 to-emerald-400" },
        { label: "System Design", score: 78, color: "from-amber-500 to-amber-400" },
      ].map((item, i) => (
        <div key={i} className="mb-3 last:mb-0">
          <div className="flex justify-between text-xs mb-1 px-0.5">
            <span className="text-slate-500 font-medium">{item.label}</span>
            <span className="text-slate-700 font-bold">{item.score}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className={`h-full bg-gradient-to-r ${item.color} rounded-full`} style={{ width: `${item.score}%` }} />
          </div>
        </div>
      ))}
      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-2">
        <div className="w-5 h-5 rounded bg-indigo-100 flex items-center justify-center">
          <Zap className="w-3 h-3 text-indigo-600" />
        </div>
        <p className="text-[10px] text-slate-500">AI flagged strong system design fundamentals</p>
      </div>
    </div>
  );
}

function ScorecardMock() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 flex flex-col border border-slate-200 shadow-lg">
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-semibold text-slate-700 tracking-wide">Candidate Scorecard</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold">RECOMMEND HIRE</span>
      </div>
      <div className="flex items-center gap-3 mb-5 p-3 bg-slate-50 rounded-xl border border-slate-200">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-primary font-bold text-sm">JD</div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Jane Doe</p>
          <p className="text-[10px] text-slate-500">Senior Backend Engineer • 45 min</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {[
          { label: "Overall", value: "4.7/5" },
          { label: "Fit Score", value: "94%" },
          { label: "Experience", value: "8 yrs" },
          { label: "Rank", value: "#2 of 47" },
        ].map((s, i) => (
          <div key={i} className="bg-slate-50 rounded-lg p-2 text-center border border-slate-200">
            <p className="text-[10px] text-slate-500">{s.label}</p>
            <p className="text-sm font-bold text-slate-900">{s.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-auto flex gap-2">
        <div className="flex-1 h-7 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center text-[10px] font-bold text-emerald-700 cursor-pointer hover:bg-emerald-200 transition-colors">Advance →</div>
        <div className="flex-1 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] font-medium text-slate-600 cursor-pointer hover:bg-slate-200 transition-colors">Export PDF</div>
      </div>
    </div>
  );
}

function IntegrationMock() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 flex flex-col border border-slate-200 shadow-lg">
      <span className="text-xs font-semibold text-slate-700 tracking-wide mb-5">Connected Integrations</span>
      {[
        { name: "Greenhouse", status: "Connected", color: "bg-emerald-500" },
        { name: "Slack", status: "Connected", color: "bg-emerald-500" },
        { name: "Lever", status: "Available", color: "bg-amber-500" },
        { name: "Webhooks", status: "Connected", color: "bg-emerald-500" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
              <Puzzle className="w-4 h-4 text-slate-400" />
            </div>
            <span className="text-sm font-medium text-slate-700">{item.name}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
            <span className="text-[10px] text-slate-500 font-medium">{item.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function FeaturesPage() {
  const features = [
    {
      id: "ai-interviewer",
      title: "Conversational AI Interviewer",
      tagline: "It listens. It adapts. It hires.",
      description: "Our AI Voice Agent doesn't read from a script. It conducts real-time, context-aware technical conversations — probing deeper when it detects surface-level answers.",
      icon: <Mic className="w-6 h-6" />,
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
      bullets: [
        "Natural voice interaction with sub-second latency",
        "Adaptive questioning based on previous answers",
        "Configurable personas, tones, and difficulty levels",
        "30+ languages supported natively out of the box"
      ],
      visual: <VoiceWaveformMock />,
    },
    {
      id: "real-time-analysis",
      title: "Real-Time Sentiment & Technical Analysis",
      tagline: "Watch AI evaluate — live.",
      description: "As the interview happens, our models analyze technical accuracy, communication fluency, and confidence in real-time. Red flags and strengths surface instantly.",
      icon: <BrainCircuit className="w-6 h-6" />,
      iconColor: "text-purple-600 bg-purple-50 border-purple-200",
      bullets: [
        "Instant flags for strong answers or red flags",
        "Confidence and fluency scoring in real-time",
        "Technical depth analyzer with topic mapping",
        "Live transcript generation with AI annotations"
      ],
      visual: <AnalysisDashboardMock />,
      reverse: true,
    },
    {
      id: "reports",
      title: "Comprehensive Candidate Reports",
      tagline: "From interview to decision in minutes.",
      description: "Get a clear, unbiased summary with skill matrices, custom rubric scoring, and side-by-side candidate comparisons — all exportable as beautiful PDFs.",
      icon: <BarChart3 className="w-6 h-6" />,
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      bullets: [
        "Downloadable PDF summaries with full transcripts",
        "Custom rubric scoring on a 1–5 scale",
        "Side-by-side comparison views across candidates",
        "Bias-free evaluation with auditable scoring"
      ],
      visual: <ScorecardMock />,
    },
    {
      id: "integrations",
      title: "Seamless ATS & Workflow Integrations",
      tagline: "Plug in. Automate. Ship.",
      description: "Hirel AI fits into your existing stack. Auto-invite candidates from your ATS, sync scores back, and get Slack alerts when interviews wrap.",
      icon: <Puzzle className="w-6 h-6" />,
      iconColor: "text-sky-600 bg-sky-50 border-sky-200",
      bullets: [
        "Greenhouse & Lever native integration",
        "Slack notifications for completed interviews",
        "Calendar scheduling automation",
        "Webhook support for any custom workflow"
      ],
      visual: <IntegrationMock />,
      reverse: true,
    },
  ];

  const stats = [
    { value: "80%", label: "Reduction in screening time", icon: <Clock className="w-5 h-5 text-primary" /> },
    { value: "10,000+", label: "Interviews monthly", icon: <Users className="w-5 h-5 text-primary" /> },
    { value: "4.9/5", label: "Average user rating", icon: <Star className="w-5 h-5 text-primary" /> },
    { value: "30+", label: "Languages supported", icon: <Globe2 className="w-5 h-5 text-primary" /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="container mx-auto px-4 md:px-6">
          <StaggerChildren className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <StaggerItem>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-6 border border-primary/20">
                <Zap className="w-3 h-3 mr-2" />
                Platform Capabilities
              </div>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-[-0.02em] text-slate-900 leading-[1.08] mb-6">
                Every Feature Built to <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-500 to-purple-600">Hire Better People, Faster.</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-xl md:text-2xl text-slate-600 max-w-2xl font-medium leading-relaxed mb-10">
                From the first screening call to final scorecards, Hirel AI automates every step with precision, speed, and zero bias.
              </p>
            </StaggerItem>
            <StaggerItem className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/book-demo">
                <Button size="lg" className="h-13 px-8 text-base font-semibold group shadow-lg shadow-primary/20">
                  Book a Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="h-13 px-8 text-base font-medium border-slate-300 text-slate-700 hover:bg-slate-50">
                  See Pricing
                </Button>
              </Link>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* ===== TRUST STATS BAR ===== */}
      <section className="border-y border-slate-200 bg-slate-50/50 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-1">
                    {stat.icon}
                  </div>
                  <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== FEATURE DEEP DIVES ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-32 md:space-y-40">
            {features.map((feature, idx) => (
              <div key={feature.id} id={feature.id} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${feature.reverse ? 'md:flex-row-reverse' : ''}`}>
                {/* Text Side */}
                <FadeIn className="flex-1 w-full" direction={feature.reverse ? "right" : "left"}>
                  <div className={`inline-flex items-center p-2.5 rounded-2xl border ${feature.iconColor} mb-6`}>
                    {feature.icon}
                  </div>

                  <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">{feature.tagline}</p>

                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">{feature.title}</h2>
                  
                  <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/book-demo" className="inline-flex items-center text-primary font-semibold group text-sm hover:underline underline-offset-4">
                    Book a Demo <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </FadeIn>
                
                {/* Visual Side — Rich Mock UI */}
                <FadeIn className="flex-1 w-full" direction={feature.reverse ? "left" : "right"} delay={0.2}>
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      {feature.visual}
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

        <FadeIn className="relative z-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
                <Shield className="w-3 h-3 mr-2" /> No credit card required
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Stop guessing. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Start knowing.</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium mb-10 max-w-xl mx-auto leading-relaxed">
                Deploy your first AI interview in under 5 minutes. See why thousands of hiring teams made the switch.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/book-demo">
                  <Button size="lg" className="h-14 px-10 text-base font-semibold group shadow-lg shadow-primary/25">
                    Book a Personalized Demo
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}