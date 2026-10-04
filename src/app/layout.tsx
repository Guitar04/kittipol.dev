import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Kanit } from "next/font/google";
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

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kittipol.dev"),
  title: {
    default: `${site.wordmark}${site.wordmarkSuffix} — ${site.role}`,
    template: `%s — ${site.wordmark}${site.wordmarkSuffix}`,
  },
  description: `Portfolio of ${site.name}, a ${site.role} building web products with Next.js, Vue, Laravel and modern cloud tooling.`,
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "Vue",
    "Laravel",
    "TypeScript",
    "Portfolio",
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
  themeColor: "#07080b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${kanit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
