import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findPost, posts } from "@/content/posts";
import { Arrow } from "../../_components/icons";

type ArticleProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function ArticlePage({ params }: ArticleProps) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();
  const Content = post.Content;
  return (
    <article className="mx-auto max-w-[660px]">
      <Link
        href="/blog"
        className="mt-[70px] inline-flex items-center gap-2 text-[12px] text-muted hover:text-ink phone:mt-[49px]"
      >
        <Arrow back className="w-[13px]" />
        All writing
      </Link>
      <header className="pb-[35px] pt-[45px] phone:pt-[35px]">
        <p className="mb-6 text-[12px] text-muted phone:text-[11px]">
          {post.category}
        </p>
        <h1 className="mb-[23px] max-w-[620px] text-[49px] font-medium leading-[1.18] tracking-[-2.5px] phone:text-[36px] phone:tracking-[-1.5px]">
          {post.title}
        </h1>
        <div className="mt-[25px] flex items-center gap-[9px] text-[11px] text-muted phone:text-[10px]">
          <span>Brian West</span>
          <span>·</span>
          <span>{post.minutes} min read</span>
        </div>
      </header>
      <div className="border-t border-line pt-[30px] [&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-[#c5b9ee] [&_blockquote]:py-1 [&_blockquote]:pl-[22px] [&_blockquote]:text-[19px] [&_blockquote]:leading-[1.7] [&_blockquote]:tracking-[-.3px] phone:[&_blockquote]:text-[18px] [&_h2]:mb-[18px] [&_h2]:mt-[45px] [&_h2]:text-[22px] [&_h2]:font-medium [&_h2]:leading-[1.5] [&_h2]:tracking-[-.7px] phone:[&_h2]:text-[21px] [&_p]:mb-[25px] [&_p]:text-[16px] [&_p]:leading-[1.95] [&_p]:tracking-[-.1px] [&_p]:text-muted phone:[&_p]:text-[15px]">
        <Content />
        <div
          aria-hidden="true"
          className="mt-10 h-[6px] w-[6px] rounded-[1px] bg-soft"
        />
      </div>
      <div className="mt-[50px] flex items-center justify-between border-t border-line pt-7">
        <Link
          href="/blog"
          className="inline-flex items-center gap-[9px] text-[12px] text-muted hover:text-ink phone:text-[11px]"
        >
          <Arrow back className="h-[13px] w-[13px]" />
          Back to all writing
        </Link>
        <span className="text-[11px] text-muted">Thanks for reading.</span>
      </div>
    </article>
  );
}
