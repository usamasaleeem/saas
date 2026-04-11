import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Input } from "@/components/ui/Input";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary/5 -z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10 opacity-70" />

      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of companies that use Hirel AI to find the best talent faster than ever before.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
            <Link href="/signup" className="w-full">
              <Button size="lg" className="w-full text-base py-6 shadow-lg shadow-primary/25">
                Start Your Free Trial
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground pt-4">
            14-day free trial. No credit card required.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
