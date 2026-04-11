import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs, getAllPosts } from "@/lib/blog";
import { MDXComponents } from "@/components/blog/MDXComponents";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const posts = getPostSlugs();
  return posts.map((post) => ({
    slug: post.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {};
  }
  return {
    title: `${post.metadata.title} | Hirel AI`,
    description: post.metadata.description,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <Link 
              href="/blog" 
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-2">
                <Badge>{metadata.category}</Badge>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{metadata.readTime} read</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                {metadata.title}
              </h1>
              
              <p className="text-xl text-muted-foreground">
                {metadata.description}
              </p>
              
              <div className="flex items-center space-x-4 pt-4 border-t">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                  {metadata.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium">{metadata.author}</p>
                  <p className="text-sm text-muted-foreground">{formatDate(metadata.date)}</p>
                </div>
              </div>
            </div>

            {metadata.image && (
              <div className="aspect-video w-full rounded-2xl overflow-hidden mb-16 border bg-muted">
                <img src={metadata.image} alt={metadata.title} className="w-full h-full object-cover" />
              </div>
            )}

            <article className="prose prose-lg dark:prose-invert max-w-none">
              <MDXRemote source={content} components={MDXComponents} />
            </article>

          </FadeIn>
        </div>
      </div>
    </div>
  );
}
