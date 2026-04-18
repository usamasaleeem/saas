import { Mic, Activity, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export function HeroDemo() {
  return (
    <FadeIn className="w-full max-w-4xl">
      <div className="relative rounded-2xl border bg-card/50 backdrop-blur-md shadow-2xl overflow-hidden glass p-4 md:p-8">
        
        {/* Top Bar Navigation (Mock) */}
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="text-sm font-medium text-muted-foreground flex items-center">
            <span className="w-2 h-2 rounded-full bg-red-500 mr-2" />
            Live Interview • Software Engineer
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Visual: AI Interviewer */}
          <div className="md:col-span-2 space-y-4">
            <div className="relative aspect-video rounded-xl bg-muted overflow-hidden flex items-center justify-center border">
              {/* Simulated Video feed or Waveform */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
              
              <div className="flex flex-col items-center space-y-6 z-10">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
                  <Mic className="w-10 h-10 text-primary" />
                </div>
                
                <div className="flex space-x-1 items-center">
                   {[...Array(9)].map((_, i) => (
                     <div
                       key={i}
                       className="w-1.5 bg-primary/80 rounded-full"
                       style={{ height: `${Math.random() * 30 + 10}px` }}
                     />
                   ))}
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium border flex items-center shadow-sm">
                <span className="text-primary mr-1">Hirel AI</span> Interviewing &quot;Alex Morgan&quot;
              </div>
            </div>

            {/* Transcript/Captions */}
            <div className="rounded-xl border bg-muted/30 p-4 space-y-3">
              <p className="text-sm">
                <span className="font-semibold text-primary mr-2">Hirel AI:</span>
                Could you describe a time when you had to optimize a complex React application? What was your approach?
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground mr-2">Alex:</span>
                Well, in my previous role, we had a dashboard that was rendering extremely slowly. I started by profiling the app using React DevTools...
              </p>
            </div>
          </div>

          {/* Side Panel: Live Analysis */}
          <div className="space-y-4">
            <div className="rounded-xl border bg-card p-4 space-y-6">
              <h3 className="font-semibold flex items-center">
                <Activity className="w-4 h-4 mr-2 text-primary" /> Live Analysis
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Confidence</span>
                  <span className="font-medium text-green-600">High</span>
                </div>
                <div className="w-full bg-muted rounded-full h-1.5">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "85%" }} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Technical Depth</span>
                  <span className="font-medium">Excellent</span>
                </div>
                <div className="w-full bg-muted rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full" style={{ width: "92%" }} />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Communication</span>
                  <span className="font-medium">Clear</span>
                </div>
                <div className="w-full bg-muted rounded-full h-1.5">
                  <div className="bg-primary/70 h-1.5 rounded-full" style={{ width: "78%" }} />
                </div>
              </div>

              <div className="pt-4 border-t space-y-2">
                <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Key Skills Detected</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Performance", "Debugging"].map((skill) => (
                    <span key={skill} className="text-xs bg-muted px-2 py-1 rounded-md text-foreground flex items-center">
                      <CheckCircle2 className="w-3 h-3 text-primary mr-1" /> {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </FadeIn>
  );
}
