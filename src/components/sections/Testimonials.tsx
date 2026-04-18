import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Star, Quote } from "lucide-react";

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      quote: "Hirel AI completely changed how we filter initial candidates. We save nearly 40 hours a week and only talk to the best fits.",
      author: "Sarah Johnson",
      role: "VP of Engineering",
      company: "TechNexus",
      initials: "SJ",
      platform: "linkedin"
    },
    {
      quote: "The actionable insights are incredible. Not only does it do the interview, but the rubrics it generates are spot on with our expectations.",
      author: "Michael Chen",
      role: "Head of Talent",
      company: "GrowFast",
      initials: "MC",
      platform: "twitter"
    },
    {
      quote: "Our candidates love the flexible scheduling. Plus, the voice AI is surprisingly natural. It feels like a real conversation.",
      author: "Emily Davis",
      role: "Founder",
      company: "Startup Co",
      initials: "ED",
      platform: "linkedin"
    },
    {
      quote: "We scaled our engineering team from 10 to 50 in three months without an external agency. Hirel took care of the massive top-of-funnel screening.",
      author: "James Wilson",
      role: "CTO",
      company: "DataFlow",
      initials: "JW",
      platform: "twitter"
    },
    {
      quote: "I was skeptical about AI interviews, but seeing the depth of the technical probing blew me away. It digs into architecture effortlessly.",
      author: "Priya Patel",
      role: "Lead Recruiter",
      company: "CloudSync",
      initials: "PP",
      platform: "linkedin"
    },
    {
      quote: "The zero-bias scoring has transformed our hiring. We are surfacing incredible untraditional talent that we would have missed before.",
      author: "Aaron Stevens",
      role: "Director of HR",
      company: "NexusHealth",
      initials: "AS",
      platform: "twitter"
    }
  ];

  return (
    <section className="py-24 bg-muted/10">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <SectionHeading
            title="Loved by Hiring Teams"
            subtitle="See what our customers have to say about the Hirel AI experience."
            className="mb-16"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <FadeIn key={t.author} delay={i * 0.1}>
              <Card className="h-full bg-background border-border/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 flex flex-col justify-between h-full relative">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/5 rotate-180" />
                  
                  <div className="relative z-10">
                    <div className="flex space-x-1 mb-6">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-foreground/80 leading-relaxed font-medium mb-8">
                      &quot;{t.quote}&quot;
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50 relative z-10">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary font-bold border border-primary/20 shadow-sm">
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold">{t.author}</p>
                        <p className="text-xs text-muted-foreground font-medium">{t.role}, {t.company}</p>
                      </div>
                    </div>
                    <div>
                      {t.platform === "twitter" ? (
                        <TwitterIcon className="w-5 h-5 text-sky-500 opacity-80" />
                      ) : (
                        <LinkedinIcon className="w-5 h-5 text-blue-600 opacity-80" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
