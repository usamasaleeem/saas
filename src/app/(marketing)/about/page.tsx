/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Users, Zap, Scale, Rocket, Target, Heart, Award, TrendingUp, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Hirel AI",
  description: "Learn about Hirel AI's mission to make hiring faster, fairer, and more efficient through conversational AI.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Eliminate Bias",
      description: "We believe talent is everywhere, but opportunity is not. Our AI is trained to focus strictly on skills and potential, stripping away human biases from the initial screening process.",
      icon: <Scale className="w-6 h-6 text-primary" />,
      gradient: "from-primary/20 to-primary/5",
    },
    {
      title: "Radical Efficiency",
      description: "Time is the most valuable asset for any startup or enterprise. We build tools that give hiring managers their days back, automating the repetitive without losing the personal touch.",
      icon: <Zap className="w-6 h-6 text-indigo-500" />,
      gradient: "from-indigo-500/20 to-indigo-500/5",
    },
    {
      title: "Candidate Experience",
      description: "Interviews shouldn't be stressful interrogations. We design conversational agents that are friendly, accommodating, and capable of scheduling around the candidate's life.",
      icon: <Users className="w-6 h-6 text-emerald-500" />,
      gradient: "from-emerald-500/20 to-emerald-500/5",
    },
  ];

  const stats = [
    { label: "Hours Saved", value: "10,000+", icon: <Zap className="w-5 h-5" /> },
    { label: "Candidates Screened", value: "50,000+", icon: <Users className="w-5 h-5" /> },
    { label: "Bias Reduction", value: "87%", icon: <Scale className="w-5 h-5" /> },
    { label: "Time to Hire", value: "-62%", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  const teamPrinciples = [
    { icon: <Rocket className="w-5 h-5" />, text: "Move fast, but build thoughtfully" },
    { icon: <Heart className="w-5 h-5" />, text: "Empathy for every candidate" },
    { icon: <Target className="w-5 h-5" />, text: "Data-driven decisions" },
    { icon: <Award className="w-5 h-5" />, text: "Quality over quantity" },
    { icon: <Shield className="w-5 h-5" />, text: "Transparency first" },
  ];

  return (
    <div className="pt-20 pb-24 min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Hero Section */}
        <StaggerChildren className="max-w-4xl mx-auto text-center mb-24 space-y-6">
          <StaggerItem>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs font-medium text-primary">Our Story</span>
            </div>
          </StaggerItem>
          <StaggerItem>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Building the future of{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-indigo-500 bg-clip-text text-transparent">
                talent discovery
              </span>
              .
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Hirel AI was founded on a simple premise: recruiting is broken. 
              We're fixing that by bringing autonomous, intelligent interviewing to every company.
            </p>
          </StaggerItem>
        </StaggerChildren>

        {/* Stats Section */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-24">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Vision / Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 max-w-6xl mx-auto">
          <FadeIn direction="right" className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-xs font-medium text-primary">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Stop wasting time on screens. Start finding talent faster.
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Like many founders, we spent way too much time hiring. Reviewing hundreds of identical resumes, 
                  trying to coordinate schedules across time zones, and sitting through screening calls where we 
                  knew in the first 5 minutes it wasn't a fit.
                </p>
                <p>
                  When Large Language Models reached a point of conversational maturity, we saw an opportunity. 
                  Not to replace human judgment, but to augment it. To create an AI that could conduct technical 
                  screens with the rigor of a senior engineer and the empathy of a great recruiter.
                </p>
                <p className="text-primary font-medium">
                  That's why we built Hirel AI — to give every company the power of autonomous interviewing.
                </p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-indigo-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary/5 via-background to-indigo-500/5 border border-border rounded-3xl p-8 md:p-10">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Founded in 2023</h3>
                      <p className="text-muted-foreground">With a vision to transform hiring forever</p>
                    </div>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-3">How we work</h3>
                    <div className="space-y-2">
                      {teamPrinciples.map((principle, i) => (
                        <div key={i} className="flex items-center gap-3 text-muted-foreground">
                          <div className="text-primary">{principle.icon}</div>
                          <span>{principle.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Core Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="text-xs font-medium text-primary">What We Believe</span>
              </div>
            </FadeIn>
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide our product, our decisions, and our team.
              </p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className={`p-3 rounded-xl w-fit mb-4 bg-gradient-to-br ${value.gradient} border border-primary/10 group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed mt-2">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Join Us CTA */}
        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-12 md:p-16">
              <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Mission</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We're a fast-growing, remote-first team looking for builders who care about 
                  making hiring significantly better for everyone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/book-a-demo">
                    <Button size="lg" variant="primary" className="group">
                      Join Hirel AI
                      <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/book-a-demo">
                    <Button size="lg" variant="outline">
                      Contact Us
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  ✨ Remote-first · Equity eligible · Competitive benefits
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}