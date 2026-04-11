import Link from "next/link";
import { PlaySquare } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Left side: Form */}
      <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:w-1/2 xl:w-5/12 bg-background z-10">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <Link href="/" className="flex items-center space-x-2 mb-10">
            <div className="bg-primary text-white p-1.5 rounded-lg">
              <PlaySquare className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">Hirel<span className="text-primary">AI</span></span>
          </Link>
          {children}
        </div>
      </div>
      
      {/* Right side: Visual (hidden on mobile) */}
      <div className="relative hidden w-0 flex-1 lg:block bg-muted">
        <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-br from-primary/10 via-background to-muted flex items-center justify-center p-12">
           <div className="max-w-lg space-y-6">
             <div className="glass p-8 rounded-2xl shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-primary/5" />
               <div className="relative space-y-4">
                 <div className="flex items-center justify-between">
                   <div className="w-24 h-4 bg-muted-foreground/20 rounded-full" />
                   <div className="w-12 h-4 bg-primary/20 rounded-full" />
                 </div>
                 <div className="w-full h-2 bg-muted-foreground/10 rounded-full" />
                 <div className="w-3/4 h-2 bg-muted-foreground/10 rounded-full" />
                 <div className="space-y-2 pt-4">
                   {[1,2,3].map(i => (
                     <div key={i} className="flex border rounded-lg p-3 space-x-3 items-center bg-background/50">
                       <div className="w-8 h-8 rounded-full bg-primary/20" />
                       <div className="space-y-1 flex-1">
                         <div className="w-1/3 h-2 bg-foreground/20 rounded-full" />
                         <div className="w-1/4 h-2 bg-foreground/10 rounded-full" />
                       </div>
                       <div className="w-8 h-8 rounded-md bg-green-500/20 text-green-500 flex items-center justify-center text-xs font-bold">
                         9{i}
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
             
             <div className="space-y-2 text-center pt-8">
               <h2 className="text-2xl font-bold">Uncover top talent faster.</h2>
               <p className="text-muted-foreground">Join the companies using Hirel AI to revolutionize their hiring process.</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
