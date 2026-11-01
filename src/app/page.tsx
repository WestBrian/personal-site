import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/content/posts";
import { Arrow, Icon } from "./_components/icons";
import { PostRow } from "./_components/post-row";

export const metadata: Metadata = { title: "About · Brian West" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[744px] tablet:max-w-[620px]">
      <section className="pb-[74px] pt-[108px] wide:pt-[135px] tablet:pt-20 phone:pb-[54px] phone:pt-[73px]">
        <div className="mb-[29px] flex items-center gap-[13px] text-[13px] text-muted phone:mb-[27px] phone:gap-[11px] phone:text-[11px]">
          <Image
            src="/me.png"
            alt="Brian West"
            width={37}
            height={37}
            priority
            className="h-[37px] w-[37px] rounded-full border border-line object-cover object-[50%_30%] saturate-[.65] phone:h-[33px] phone:w-[33px]"
          />
          <span className="flex items-center gap-[7px]">
            <Icon className="h-3 w-3">
              <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
              <circle cx="12" cy="10" r="2" />
            </Icon>
            Based in Virginia
          </span>
        </div>
        <h1 className="mb-[26px] text-[62px] font-medium leading-[1.12] tracking-[-3.4px] tablet:text-[55px] phone:mb-[23px] phone:text-[44px] phone:leading-[1.16] phone:tracking-[-2.4px]">
          Hi, I&apos;m Brian.
          <br />
          <span className="text-headline">I build for the web.</span>
        </h1>
        <p className="max-w-[545px] text-[18px] leading-[1.8] tracking-[-.35px] text-muted phone:text-[16px] phone:leading-[1.85] phone:tracking-[-.25px]">
          I&apos;m a software engineer with a passion for all things frontend.
          Welcome to my little corner of the web.
        </p>
      </section>
      <section
        aria-labelledby="about-heading"
        className="grid grid-cols-[170px_1fr] gap-9 border-t border-line pb-[58px] pt-[43px] tablet:grid-cols-[130px_1fr] tablet:gap-[25px] phone:grid-cols-1 phone:gap-5 phone:pb-[38px] phone:pt-[29px]"
      >
        <h2
          id="about-heading"
          className="mt-[2px] text-[12px] font-medium leading-[1.8] text-muted phone:text-[11px]"
        >
          A little about me
        </h2>
        <div className="text-[15px] leading-[1.9] tracking-[-.15px] phone:text-[14px]">
          <p className="mb-5">
            I live in Virginia and work in software engineering. My favorite
            part of the work is frontend, where the things we build become the
            things people use.
          </p>
          <p className="text-muted">
            This site is a place to introduce myself and{" "}
            <Link
              href="/blog"
              className="text-ink underline decoration-[#cccbd4] underline-offset-4 hover:text-accent"
            >
              share a few thoughts
            </Link>{" "}
            along the way.
          </p>
        </div>
      </section>
      <section
        aria-labelledby="writing-heading"
        className="mt-[38px] phone:mt-8"
      >
        <div className="mb-5 flex items-center justify-between">
          <h2
            id="writing-heading"
            className="text-[15px] font-[550] tracking-[-.35px] phone:text-[14px]"
          >
            {posts.length > 0 ? "Latest writing" : "Writing"}
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-[9px] text-[12px] text-muted hover:text-ink phone:text-[11px]"
          >
            {posts.length > 0 ? "All posts" : "Visit the blog"}{" "}
            <Arrow className="h-[13px] w-[13px]" />
          </Link>
        </div>
        {posts.length > 0 ? (
          posts.slice(0, 2).map((post) => (
            <PostRow key={post.slug} post={post} />
          ))
        ) : (
          <div className="border-t border-line py-9 phone:py-8">
            <h3 className="mb-2 text-[15px] font-medium tracking-[-.25px] phone:text-[14px]">
              No posts yet.
            </h3>
            <p className="text-[14px] leading-[1.8] text-muted phone:text-[13px]">
              I’ll share new writing here when it’s ready.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
