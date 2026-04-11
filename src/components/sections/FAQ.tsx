"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Do candidates like talking to an AI?",
    answer: "Yes. In fact, 87% of candidates report preferring AI initial screens because they can interview on their own schedule (nights/weekends) and receive instant, objective feedback rather than waiting weeks or getting ghosted."
  },
  {
    question: "Can the AI understand different accents?",
    answer: "Absolutely. Our voice models are trained on highly diverse, global datasets and can understand over 30 languages and dialects with human-level accuracy, ensuring a fair process for all applicants."
  },
  {
    question: "Does this replace my hiring team?",
    answer: "No. Hirel AI replaces the tedious, repetitive top-of-funnel screening. It gives your human hiring managers superpowers by only bringing them candidates who are actually qualified, saving them dozens of hours per week."
  },
  {
    question: "How does the AI prevent bias?",
    answer: "Unlike humans, our AI doesn't care about a candidate's appearance, background, or name. It evaluates candidates strictly based on the custom rubrics and technical criteria you define."
  },
  {
    question: "How long does it take to deploy?",
    answer: "You can be up and running in 5 minutes. Simply create an account, paste a job description to generate a rubric, and start sending the interview link to candidates immediately."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about scaling your hiring with AI."
            className="mb-16"
          />
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeIn key={i}>
                <div className="mb-4 border border-border rounded-2xl overflow-hidden bg-muted/10">
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="text-lg font-semibold pr-8">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                  </button>
                  {isOpen && (
                    <div>
                      <div className="px-6 pb-5 pt-1 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
