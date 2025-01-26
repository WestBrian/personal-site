"use client";

import { motion, MotionConfig } from "motion/react";
import Image from "next/image";

const duration = 1;

export const HeroText = () => {
  return (
    <MotionConfig transition={{ duration }}>
      <div className="relative isolate flex flex-col gap-16">
        <div className="z-10 text-balance">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 text-4xl font-semibold"
          >
            Hello 👋 I&apos;m Brian
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: duration * 0.2, ease: "easeOut" }}
            className="text-2xl"
          >
            I&apos;m a software engineer currently living in Virginia. My
            passion is all things frontend.
          </motion.p>
        </div>
        <div className="h-[50px] rounded-lg bg-slate-200 dark:bg-slate-800"></div>
        <motion.div
          initial={{ opacity: 0, rotate: 0, translateX: -48, translateY: -48 }}
          animate={{ opacity: 0.05, rotate: -12 }}
          transition={{ ease: "easeOut" }}
          className="absolute left-0 top-0 h-24 w-24"
        >
          <Image
            src="/android-chrome-192x192.png"
            width={192}
            height={192}
            alt="logo"
            priority
          />
        </motion.div>
      </div>
    </MotionConfig>
  );
};
