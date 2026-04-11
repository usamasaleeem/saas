import Image from "next/image";
import Link from "next/link";
import { highlight } from "sugar-high";

function Code({ children, ...props }: any) {
  const codeHTML = highlight(children as string);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

export const MDXComponents = {
  h1: (props: any) => <h1 className="text-3xl md:text-5xl font-bold mt-10 mb-6 tracking-tight text-foreground" {...props} />,
  h2: (props: any) => <h2 className="text-2xl md:text-3xl font-semibold mt-12 mb-6 tracking-tight text-foreground" {...props} />,
  h3: (props: any) => <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4 tracking-tight text-foreground" {...props} />,
  p: (props: any) => <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6" {...props} />,
  a: ({ href, children, ...props }: any) => {
    const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
    if (isInternal) {
      return (
        <Link href={href} className="text-primary hover:underline underline-offset-4 decoration-primary/50 font-medium transition-colors" {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a target="_blank" rel="noopener noreferrer" href={href} className="text-primary hover:underline underline-offset-4 decoration-primary/50 font-medium transition-colors" {...props}>
        {children}
      </a>
    );
  },
  ul: (props: any) => <ul className="list-disc leading-relaxed text-muted-foreground ml-6 mb-6 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal leading-relaxed text-muted-foreground ml-6 mb-6 space-y-2" {...props} />,
  li: (props: any) => <li className="pl-2" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary bg-primary/5 px-6 py-4 rounded-r-lg text-foreground italic my-8 text-lg" {...props} />
  ),
  hr: (props: any) => <hr className="my-12 border-muted" {...props} />,
  img: (props: any) => (
    <div className="my-10 relative aspect-video rounded-xl overflow-hidden border">
      <img className="object-cover object-center w-full h-full" {...props} alt={props.alt || "Blog image"} />
    </div>
  ),
  code: Code,
  pre: ({ children, ...props }: any) => (
    <pre className="bg-[#111] p-6 rounded-xl overflow-x-auto text-sm my-8 border border-white/10" {...props}>
      {children}
    </pre>
  ),
  strong: (props: any) => <strong className="font-semibold text-foreground" {...props} />,
};
