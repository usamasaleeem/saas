import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { FadeIn } from "@/components/animations/FadeIn";

export function Stats() {
  const stats = [
    { value: 10000, suffix: "+", label: "Interviews Conducted" },
    { value: 500, suffix: "+", label: "Companies" },
    { value: 80, suffix: "%", label: "Time Saved" },
    { value: 95, suffix: "%", label: "Accuracy Rate" },
  ];

  return (
    <section className="py-20 border-y bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                <AnimatedCounter value={stat.value} />
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
