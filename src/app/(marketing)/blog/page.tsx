import { getAllPosts } from "@/lib/blog";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Hirel AI",
  description: "Read the latest thoughts on hiring, AI, and the future of work.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <StaggerChildren className="max-w-3xl mx-auto text-center mb-24 space-y-6">
          <StaggerItem>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">The Hirel Blog</h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-xl text-muted-foreground">
              Insights and strategies for building exceptional teams.
            </p>
          </StaggerItem>
        </StaggerChildren>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-transparent bg-white shadow-sm hover:-translate-y-1">
                  {post.image && (
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-t-2xl relative">
                      {/* Using a solid background as placeholder if image fails or isn't there */}
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                      {/* In a real app, use next/image here */}
                      <img src={post.image} alt={post.title} className="object-cover w-full h-full" />
                    </div>
                  )}
                  <CardHeader className="pt-6">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-3">
                      <Badge variant="secondary" className="font-medium">{post.category}</Badge>
                      <span>•</span>
                      <span>{post.readTime} read</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors text-xl leading-snug">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base line-clamp-3">
                      {post.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No blog posts found. Please add some `.mdx` files to `content/blog`.
          </div>
        )}
      </div>
    </div>
  );
}
