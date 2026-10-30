import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "./_components/site-header";
import { SiteFooter } from "./_components/site-footer";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Brian West", template: "%s · Brian West" },
  description:
    "Brian West. Software engineer in Virginia, with a passion for frontend.",
};

const initializeTheme = `try{document.documentElement.dataset.theme=localStorage.getItem('bw-theme')==='dark'?'dark':'light'}catch{document.documentElement.dataset.theme='light'}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initializeTheme }} />
      </head>
      <body className={inter.variable}>
        <a
          href="#main"
          className="fixed -top-[70px] left-5 z-10 bg-ink p-3 text-background focus:top-[15px]"
        >
          Skip to content
        </a>
        <div className="mx-auto max-w-[1080px] px-12 tablet:px-[35px] phone:px-[26px]">
          <SiteHeader />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
