"use client";

import { useState } from "react";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Toggle } from "@/components/ui/Toggle";
import { Check, ArrowRight, Shield, Zap, HelpCircle, ChevronDown, Sparkles, Building2, Headphones } from "lucide-react";
import Link from 'next/link';
const TIERS = [
  {
    name: "Starter",
    tagline: "For growing teams",
    description: "Perfect for small teams and startups scaling their early hiring pipeline.",
    price: { monthly: 59, yearly: 49 },
    features: [
      "Up to 10 AI interviews / month",
      "Standard voice models",
      "Basic scoring rubrics",
      "Email support",
      "3 active job posting",
      "Basic analytics dashboard",
    ],
    cta: "Book a Demo",
    ctaVariant: "outline" as const,
    popular: false,
    icon: <Zap className="w-5 h-5" />,
    iconColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  },
  {
    name: "Pro",
    tagline: "Most popular",
    description: "Everything you need to run high-volume recruiting at scale.",
    price: { monthly: 249, yearly: 229 },
    features: [
      "Up to 50 AI interviews",
      "Premium ultra-realistic voices",
      "Custom rubric builder",
      "ATS integrations (Greenhouse, Lever)",
      "Priority support with SLA",
      "Unlimited job postings",
      "Advanced analytics & reports",
      "Team collaboration tools",
    ],
    cta: "Book a Demo",
    ctaVariant: "primary" as const,
    popular: true,
    icon: <Sparkles className="w-5 h-5" />,
    iconColor: "text-primary bg-primary/10 border-primary/20",
  },
  {
    name: "Enterprise",
    tagline: "For large organizations",
    description: "Custom compliance, security, and dedicated support for enterprises.",
    price: { monthly: "Custom", yearly: "Custom" },
    features: [
      "Everything in Pro, plus:",
      "Dedicated account manager",
      "Custom voice cloning",
      "SSO & advanced role management",
      "SLA guarantees (99.9% uptime)",
      "Custom ATS integrations",
      "On-premise deployment option",
      "Volume-based pricing",
    ],
    cta: "Book a Demo",
    ctaVariant: "outline" as const,
    popular: false,
    icon: <Building2 className="w-5 h-5" />,
    iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  }
];

const FAQS = [
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade or downgrade your plan at any time from your dashboard. Prorated charges are applied automatically — no surprises.",
  },
  {
    q: 'What counts as an "interview"?',
    a: "An interview is counted when a candidate successfully completes a session and a score/transcript is generated. Incomplete or dropped sessions do not count against your quota.",
  },
  {
    q: "Do you offer discounts for non-profits?",
    a: "Yes! We offer a 50% discount for registered 501(c)(3) organizations. Contact our sales team to get set up.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — every plan comes with a 14-day free trial. No credit card required. You can explore every feature before committing.",
  },
  {
    q: "How secure is my candidate data?",
    a: "Extremely. We are SOC 2 Type II compliant, GDPR-ready, and all data is encrypted at rest and in transit. Enterprise plans also offer on-premise deployment.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/50 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-40 pb-5" : "max-h-0"}`}>
        <p className="text-muted-foreground leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-br from-primary/15 via-purple-500/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="container mx-auto px-4 md:px-6">
          <StaggerChildren className="max-w-3xl mx-auto text-center flex flex-col items-center space-y-6">
            <StaggerItem>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-2 border border-primary/20">
                <Shield className="w-3 h-3 mr-2" /> No hidden fees
              </div>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.02em] text-foreground leading-[1.1]">
                Invest in Hiring. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-purple-500">Not in Screening.</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-xl text-muted-foreground max-w-xl font-medium leading-relaxed">
                Simple, transparent pricing that scales with your team. Start free, upgrade when you&apos;re ready.
              </p>
            </StaggerItem>
            <StaggerItem className="pt-4">
              <div className="inline-flex items-center p-1 rounded-full bg-muted/50 border border-border/50">
                <Toggle
                  checked={isYearly}
                  onChange={setIsYearly}
                  leftLabel="Monthly"
                  rightLabel="Yearly"
                  className="justify-center"
                />
              </div>
              {isYearly && (
                <p className="text-sm text-emerald-500 font-semibold mt-3 animate-in fade-in">Save 20% with annual billing</p>
              )}
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* ===== PRICING CARDS ===== */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            {TIERS.map((tier, i) => (
              <FadeIn key={tier.name} delay={i * 0.12}>
                <div className={`relative h-full ${tier.popular ? "md:-mt-4 md:mb-[-16px]" : ""}`}>
                  {/* Glow effect for popular tier */}
                  {tier.popular && (
                    <div className="absolute -inset-[1px] bg-gradient-to-b from-primary via-primary/50 to-primary/20 rounded-3xl opacity-100 blur-[0px]" />
                  )}

                  <Card className={`h-full flex flex-col relative rounded-3xl overflow-hidden ${tier.popular
                    ? "border-0 shadow-2xl shadow-primary/10 bg-background"
                    : "border-border/60 bg-background/80"
                    }`}>
                    {tier.popular && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-indigo-400 to-purple-500" />
                    )}

                    <CardHeader className="p-8 pb-0">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-2.5 rounded-xl border ${tier.iconColor}`}>
                          {tier.icon}
                        </div>
                        {tier.popular && (
                          <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{tier.description}</p>
                    </CardHeader>

                    <CardContent className="p-8 flex-1 space-y-6">
                      {/* Price */}
                      <div className="pb-6 border-b border-border/50">
                        {typeof tier.price.monthly === "number" ? (
                          <div className="flex items-baseline gap-1">
                            <span className="text-5xl font-extrabold tracking-tight">
                              ${isYearly ? tier.price.yearly : tier.price.monthly}
                            </span>
                            <span className="text-base font-medium text-muted-foreground">/mo</span>
                          </div>
                        ) : (
                          <div className="flex items-baseline">
                            <span className="text-4xl font-extrabold tracking-tight">Custom</span>
                          </div>
                        )}
                        {typeof tier.price.monthly === "number" && isYearly && (
                          <p className="text-xs text-muted-foreground mt-1">
                            Billed annually (${(tier.price.yearly as number) * 12}/yr)
                          </p>
                        )}
                      </div>

                      {/* Features */}
                      <ul className="space-y-3.5">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className={`w-4.5 h-4.5 flex-shrink-0 mt-0.5 ${tier.popular ? "text-primary" : "text-emerald-500"}`} />
                            <span className="text-sm font-medium text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    <CardFooter className="p-8 pt-0 mt-auto">
                      <Link href="/book-demo" className="w-full">
                        <Button
                          variant={tier.popular ? "primary" : "outline"}
                          className={`w-full h-12 text-base font-semibold group ${tier.popular
                            ? "shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
                            : ""
                            }`}
                          size="lg"
                        >
                          {tier.cta}
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Trust badges */}
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="font-medium">SOC 2 Compliant</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="font-medium">14-day free trial</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-emerald-500" />
                <span className="font-medium">24/7 Support</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="font-medium">GDPR Ready</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== ENTERPRISE CTA ===== */}
      <section className="py-20 border-y border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-widest mb-4 border border-amber-500/20">
                  <Building2 className="w-3 h-3 mr-2" /> Enterprise
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                  Need a custom solution?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Get volume pricing, custom integrations, dedicated support, and on-premise deployment options tailored to your organization.
                </p>
                <ul className="space-y-2 mb-8">
                  {["Dedicated account manager", "Custom SLA & uptime guarantees", "White-glove onboarding"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                      <Check className="w-4 h-4 text-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0">
                <Link href="/book-demo">
                  <Button size="lg" className="h-14 px-10 text-base font-semibold group">
                    Talk to Sales
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4 border border-primary/20">
                <HelpCircle className="w-3 h-3 mr-2" /> FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground font-medium">
                Everything you need to know. Can&apos;t find an answer? <a href="/contact" className="text-primary hover:underline underline-offset-4">Contact us</a>.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="max-w-2xl mx-auto rounded-2xl border border-border/50 bg-card/50 p-6 md:p-8">
              {FAQS.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

        <FadeIn className="relative z-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                Ready to hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">10x faster?</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium mb-10 max-w-xl mx-auto leading-relaxed">
                Join thousands of teams already using Hirel AI. Let us show you how to transform your hiring workflow.
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
