import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@ant-design/v5-patch-for-react-19";
import "@/css/globals.css";
import { site } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kittipol.dev"),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.wordmark}${site.wordmarkSuffix}`,
  },
  description: `Portfolio of ${site.name}, a ${site.role} building web applications with Next.js, .NET, Laravel and modern cloud tooling.`,
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "C#",
    ".NET",
    "Laravel",
    "TypeScript",
    site.name,
  ],
  authors: [{ name: site.name, url: site.socials.github }],
  creator: site.name,
  openGraph: {
    type: "website",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    siteName: `${site.wordmark}${site.wordmarkSuffix}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
