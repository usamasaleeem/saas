import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";

export function UseCases() {
  const useCases = [
    {
      title: "Startups",
      description: "Move fast and hire the best talent with AI-powered screening that scales with your growth.",
      bullets: ["Fast hiring", "Cost-effective", "Scalable process"]
    },
    {
      title: "Enterprises",
      description: "Standardize hiring across teams and locations with enterprise-grade security and compliance.",
      bullets: ["Global reach", "Compliance ready", "Team collaboration"]
    },
    {
      title: "Agencies",
      description: "Manage multiple clients and candidates efficiently with white-label options and bulk processing.",
      bullets: ["Multi-client", "White-label", "Bulk interviews"]
    },
    {
      title: "HR Teams",
      description: "Reduce manual work by 90% and focus on what matters: connecting with top candidates.",
      bullets: ["Save time", "Better insights", "Reduce bias"]
    }
  ];

  return (
    <section className="py-24 bg-muted/30 border-y">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <SectionHeading
            title="Built for every hiring team"
            subtitle="Whether you're a startup or an enterprise, Hirel AI adapts to your unique needs."
            className="mb-16"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((uc, i) => (
            <FadeIn key={uc.title} delay={i * 0.1}>
              <Card gradient className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl mb-4">{uc.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed mb-6">
                    {uc.description}
                  </CardDescription>
                  <ul className="space-y-3 mt-auto">
                    {uc.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-medium text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </CardHeader>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
