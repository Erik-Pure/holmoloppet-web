import type { Metadata } from "next";
import { Google_Sans, Inter } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  weight: "variable",
  style: "italic",
  axes: ["GRAD"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Holmöloppet",
  description: "Holmöloppet - löpning och naturupplevelse på Holmön.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${inter.variable} ${googleSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-slate-900">
        <SiteHeader />
        <div className="flex min-h-[calc(100vh-80px)] flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
