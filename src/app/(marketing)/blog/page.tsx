/* eslint-disable @next/next/no-img-element */
import { getAllPosts } from "@/lib/blog";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Calendar, 
  Clock, 
  TrendingUp, 
  Users, 
  Lightbulb, 
  Rocket, 
  Brain, 
  Zap,
  BarChart3,
  Sparkles,
  Target,
  Shield,
  MessageSquare,
  Code2,
  Briefcase
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Hirel AI",
  description: "Read the latest thoughts on hiring, AI, and the future of work.",
};

// Category icons mapping
const categoryIcons = {
  "AI & Technology": <Brain className="w-5 h-5" />,
  "Hiring Tips": <Lightbulb className="w-5 h-5" />,
  "Company Culture": <Users className="w-5 h-5" />,
  "Future of Work": <Rocket className="w-5 h-5" />,
  "Product Updates": <Sparkles className="w-5 h-5" />,
  "Case Studies": <BarChart3 className="w-5 h-5" />,
  "Diversity & Inclusion": <Target className="w-5 h-5" />,
  "Best Practices": <Shield className="w-5 h-5" />,
  "Interviewing": <MessageSquare className="w-5 h-5" />,
  "Technical Hiring": <Code2 className="w-5 h-5" />,
  "Recruitment": <Briefcase className="w-5 h-5" />,
  default: <TrendingUp className="w-5 h-5" />
};

// Category color schemes
const categoryColors = {
  "AI & Technology": "from-indigo-500 to-purple-500",
  "Hiring Tips": "from-emerald-500 to-teal-500",
  "Company Culture": "from-blue-500 to-cyan-500",
  "Future of Work": "from-purple-500 to-pink-500",
  "Product Updates": "from-orange-500 to-red-500",
  "Case Studies": "from-green-500 to-emerald-500",
  "Diversity & Inclusion": "from-rose-500 to-pink-500",
  "Best Practices": "from-sky-500 to-blue-500",
  "Interviewing": "from-violet-500 to-purple-500",
  "Technical Hiring": "from-cyan-500 to-blue-500",
  "Recruitment": "from-amber-500 to-orange-500",
  default: "from-primary to-indigo-500"
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  // Generate random accent colors for posts without categories
  const getPostColor = (index: number) => {
    const colors = [
      "from-rose-400 to-pink-500",
      "from-indigo-400 to-purple-500", 
      "from-emerald-400 to-teal-500",
      "from-amber-400 to-orange-500",
      "from-cyan-400 to-blue-500",
      "from-violet-400 to-purple-500"
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      <div className="container mx-auto px-4 md:px-6">
        <StaggerChildren className="max-w-3xl mx-auto text-center mb-20 space-y-6">
          <StaggerItem>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-xs font-medium text-primary">Latest Insights</span>
            </div>
          </StaggerItem>
          <StaggerItem>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              The Hirel Blog
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Insights, strategies, and stories about building exceptional teams with AI.
            </p>
          </StaggerItem>
        </StaggerChildren>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, i) => {
            const categoryKey = post.category as keyof typeof categoryIcons;
            const Icon = categoryIcons[categoryKey] || categoryIcons.default;
            const gradientColor = categoryColors[categoryKey] || getPostColor(i);
            
            return (
              <FadeIn key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-slate-200 bg-white hover:-translate-y-2 overflow-hidden">
                    {/* Colored Header Bar with Icon */}
                    <div className={`relative h-32 bg-gradient-to-r ${gradientColor} p-6 flex items-center justify-between overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                      <div className="relative z-10">
                        <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                          {Icon}
                        </div>
                      </div>
                      <div className="relative z-10 text-right">
                        <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 font-medium">
                          {post.category || "Insights"}
                        </Badge>
                      </div>
                      {/* Decorative circles */}
                      <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
                      <div className="absolute -left-8 -bottom-8 w-24 h-24 rounded-full bg-white/10 blur-xl" />
                    </div>
                    
                    <CardHeader className="pt-6 pb-3">
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors text-xl leading-snug text-slate-900">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-slate-600 line-clamp-3 leading-relaxed">
                        {post.description}
                      </CardDescription>
                      
                      {/* Author or Metadata Footer */}
                      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/20 to-indigo-500/20 flex items-center justify-center">
                            <Zap className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-xs text-slate-500">Hirel Team</span>
                        </div>
                        <div className="text-xs text-primary font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Read more 
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            );
          })}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-4">
              <Rocket className="w-10 h-10 text-slate-400" />
            </div>
            <p className="text-lg font-medium">No blog posts found</p>
            <p className="text-sm mt-2">Please add `.mdx` files to `content/blog`</p>
          </div>
        )}
      </div>
    </div>
  );
}