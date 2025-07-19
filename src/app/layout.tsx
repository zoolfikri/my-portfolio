import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../lib/fontawesome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Zulfikri - Frontend Developer Portfolio",
  description: "Frontend Developer with 7+ years experience specializing in React, Next.js, and TypeScript. View my portfolio showcasing modern web applications and UI/UX projects.",
  keywords: "Frontend Developer, React, Next.js, TypeScript, JavaScript, UI/UX, Web Development, Portfolio, Muhammad Zulfikri",
  authors: [{ name: "Muhammad Zulfikri" }],
  creator: "Muhammad Zulfikri",
  openGraph: {
    title: "Muhammad Zulfikri - Frontend Developer Portfolio",
    description: "Frontend Developer with 7+ years experience specializing in React, Next.js, and TypeScript. View my portfolio showcasing modern web applications and UI/UX projects.",
    url: "https://zulfikri.dev",
    siteName: "Muhammad Zulfikri Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Zulfikri - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Zulfikri - Frontend Developer Portfolio",
    description: "Frontend Developer with 7+ years experience specializing in React, Next.js, and TypeScript.",
    images: ["/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
