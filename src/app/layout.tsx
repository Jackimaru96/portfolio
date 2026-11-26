import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { FaviconSpinner } from "@/components/FaviconSpinner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jackchenyj.dev"),
  title: "Jack Chen — Product Engineer",
  description:
    "I turn AI capabilities into products people actually use, from the frontend down to the firmware.",
  openGraph: {
    title: "Jack Chen — Product Engineer",
    description:
      "I turn AI capabilities into products people actually use, from the frontend down to the firmware.",
    url: "https://jackchenyj.dev",
    siteName: "jack.chen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jack Chen — Product Engineer",
    description:
      "I turn AI capabilities into products people actually use, from the frontend down to the firmware.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
        <FaviconSpinner />
        <Analytics />
      </body>
    </html>
  );
}
