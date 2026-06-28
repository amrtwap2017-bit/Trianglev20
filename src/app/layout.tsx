import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "TRIANGLE BLACK — Egypt's Premier Hospitality Engineering Partner",
  description:
    "We design, build, and maintain the invisible systems that define guest experience in Egypt's finest hotels. MEP, HVAC, Electrical, Plumbing, Waterproofing, Renovation — Sharm El-Sheikh and beyond.",
  keywords: [
    "hospitality engineering Egypt",
    "MEP contractor Sharm El Sheikh",
    "hotel engineering company Egypt",
    "HVAC contractor luxury hotels",
    "hotel renovation Egypt",
    "TRIANGLE BLACK",
  ],
  authors: [{ name: "TRIANGLE BLACK" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><polygon points='16,2 30,28 2,28' fill='%23C9A96E'/></svg>",
  },
  openGraph: {
    title: "TRIANGLE BLACK — Egypt's Premier Hospitality Engineering Partner",
    description:
      "Premium hospitality engineering contracting and technical solutions for 5-star hotels across Egypt.",
    siteName: "TRIANGLE BLACK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        style={{ backgroundColor: "#0A0A0A", color: "#F5F5F0" }}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-gold focus:text-obsidian focus:px-4 focus:py-2 focus:top-4 focus:left-4"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}