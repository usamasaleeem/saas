import { Metadata } from "next";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Users, Zap, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Hirel AI",
  description: "Learn about Hirel AI's mission to make hiring faster, fairer, and more efficient through conversational AI.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Eliminate Bias",
      description: "We believe talent is everywhere, but opportunity is not. Our AI is trained to focus strictly on skills and potential, stripping away human biases from the initial screening process.",
      icon: <Scale className="w-6 h-6 text-primary" />
    },
    {
      title: "Radical Efficiency",
      description: "Time is the most valuable asset for any startup or enterprise. We build tools that give hiring managers their days back, automating the repetitive without losing the personal touch.",
      icon: <Zap className="w-6 h-6 text-indigo-500" />
    },
    {
      title: "Candidate Experience",
      description: "Interviews shouldn't be stressful interrogations. We design conversational agents that are friendly, accommodating, and capable of scheduling around the candidate's life.",
      icon: <Users className="w-6 h-6 text-emerald-500" />
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Hero Section */}
        <StaggerChildren className="max-w-4xl mx-auto text-center mb-32 space-y-8">
          <StaggerItem>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              We're building the future of <span className="text-gradient">talent discovery</span>.
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hirel AI was founded on a simple premise: recruiting is broken. Resumes don't tell the whole story, 
              and initial phone screens take up hundreds of hours of high-value engineering and HR time. 
              We're fixing that by bringing autonomous, intelligent interviewing to every company.
            </p>
          </StaggerItem>
        </StaggerChildren>

        {/* Vision / Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32 max-w-6xl mx-auto">
          <FadeIn direction="right">
            <div className="aspect-square rounded-2xl bg-muted border relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              <p className="text-muted-foreground font-mono text-sm border border-dashed p-4 rounded-xl bg-background/50">
                Team Photo Placeholder
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="space-y-6">
            <h2 className="text-3xl font-bold">The Hirel Story</h2>
            <p className="text-lg text-muted-foreground">
              Like many founders, we spent way too much time hiring. Reviewing hundreds of identical resumes, trying to coordinate schedules across time zones, and sitting through screening calls where we knew in the first 5 minutes it wasn't a fit.
            </p>
             <p className="text-lg text-muted-foreground">
              When Large Language Models reached a point of conversational maturity, we saw an opportunity. Not to replace human judgment, but to augment it. To create an AI that could conduct technical screens with the rigor of a senior engineer and the empathy of a great recruiter.
            </p>
          </FadeIn>
        </div>

        {/* Core Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">The principles that guide our product and our team.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="p-3 bg-muted rounded-xl w-fit mb-4">
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
        <FadeIn delay={0.2} className="max-w-4xl mx-auto text-center border-t pt-24">
          <h2 className="text-3xl font-bold mb-6">Join the Mission</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're a fast-growing, remote-first team looking for builders who care about making hiring significantly better for everyone.
          </p>
          <Link href="#careers">
            <Button size="lg" variant="primary">View Open Roles</Button>
          </Link>
        </FadeIn>

      </div>
    </div>
  );
}
