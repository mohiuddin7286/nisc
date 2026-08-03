// src/app/layout.tsx

import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "North India Student Cell | KL University Hyderabad",

  description:
    "Official website of the North India Student Cell (NISC), KL University Hyderabad.",

  keywords: [
    "NISC",
    "KL University",
    "North India Student Cell",
    "Student Association",
    "Hindi Association",
  ],

  authors: [
    {
      name: "North India Student Cell",
    },
  ],

  openGraph: {
    title: "North India Student Cell",

    description:
      "Official website of the North India Student Cell.",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${outfit.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}