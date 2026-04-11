import { Hero } from "@/components/sections/Hero";
import { SocialProofMarquee } from "@/components/sections/SocialProofMarquee";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturesBento } from "@/components/sections/FeaturesBento";
import { ROI } from "@/components/sections/ROI";
import { Testimonials } from "@/components/sections/Testimonials";
import { UseCases } from "@/components/sections/UseCases";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hirel AI - AI Interviews That Hire Faster",
  description: "Reduce screening time by 80%. Let AI conduct, evaluate, and score candidate interviews with Hirel AI.",
};

export default function LandingPage() {
  return (
    <>
      <Hero />
      <SocialProofMarquee />
      <ProblemSolution />
      <HowItWorks />
      <FeaturesBento />
      <ROI />
      <Testimonials />
      <UseCases />
      <FAQ />
      <CTA />
    </>
  );
}
