import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import "@ant-design/v5-patch-for-react-19";
import "@/css/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KITTIPOL.DEV - Full Stack Developer",
  description: "Portfolio of Kittipol - Full Stack Developer specializing in Next.js, Vue, PHP, and modern web technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
