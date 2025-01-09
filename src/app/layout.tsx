import type { Metadata } from "next";
import { Inter as Font } from "next/font/google";
import "./globals.css";

const geistSans = Font({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Jo/Menu™",
  description:
    "We pair an AI-native approach with over 16 years experience shipping work for brands like Nike, Samsung, Achieve and startups like Poolside, Exa, and Superintelligent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
