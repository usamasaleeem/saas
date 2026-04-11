import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "content/blog");

export interface PostMetadata {
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  image?: string;
  slug: string;
}

export interface Post {
  metadata: PostMetadata;
  content: string;
}

export function getPostSlugs() {
  if (!fs.existsSync(POSTS_PATH)) return [];
  return fs.readdirSync(POSTS_PATH).filter((path) => path.endsWith(".mdx"));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = path.join(POSTS_PATH, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      metadata: {
        ...data,
        slug: realSlug,
      } as PostMetadata,
      content,
    };
  } catch (e) {
    return null;
  }
}

export function getAllPosts(): PostMetadata[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    .map((post) => post.metadata)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  
  return posts;
}
