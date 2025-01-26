import Image from "next/image";
import { HeroText } from "./_components/hero-text";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-16 bg-slate-100 p-8 md:flex-row md:p-16 dark:bg-slate-900">
        <HeroText />
        <div className="relative isolate before:absolute before:inset-0 before:translate-x-2 before:translate-y-2 before:rounded-lg before:bg-slate-400 before:dark:bg-slate-600">
          <Image
            src="/me.png"
            width={354}
            height={496}
            alt="picture of Brian West"
            className="relative z-10 rounded-lg"
            priority
          />
        </div>
      </div>
    </main>
  );
}
