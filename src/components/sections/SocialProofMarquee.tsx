const companies = [
  'Chatalize', 'Scrapio AI', 'Routox', 'Reach Finders', 'Chatalize', 'Scrapio AI', 'Routox', 'Reach Finders'
];

export function SocialProofMarquee() {
  return (
    <div className="py-12 bg-background overflow-hidden border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6 mb-8 text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
        Trusted by forward-thinking teams worldwide
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 w-32 h-full bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 w-32 h-full bg-gradient-to-l from-background to-transparent" />

        <div className="flex flex-none gap-16 pr-16 items-center">
          {[...companies, ...companies, ...companies].map((company, i) => (
            <span
              key={`${company}-${i}`}
              className="text-2xl md:text-3xl font-bold font-serif opacity-40 grayscale select-none"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
