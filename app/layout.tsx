import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "./LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Landing Page",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Veract.io",
  "url": "https://veract.io",
  "logo": "/Images/LandingPage/Navbar/veract-logo-white-font.svg",
  "description": "Veract.io builds Agentic AI systems, Machine Vision pipelines, and Industrial IoT solutions to modernize and automate businesses.",
  "sameAs": [
    "https://www.linkedin.com/company/veract-consultancy-private-limited/",
    "https://www.instagram.com/veractconsultancy/",
    "https://youtube.com/@veract-consultancy?si=tGt9K1cCpnNgzFkJ"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>
          Veract.io | AI, Agentic Systems & IoT Solutions for Digital Transformation
        </title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
        <meta
          name="description"
          content="Veract.io empowers startups and businesses with Agentic AI, Machine Vision, and Industrial IoT solutions to automate workflows and accelerate innovation."
        />
        <meta
          name="keywords"
          content="Agentic AI, Industrial IoT, Machine Vision, AI Automation, Digital Transformation, Startup Automation, Custom Software Development"
        />
        <meta
          property="og:title"
          content="Veract.io | AI & IoT Solutions for Digital Growth"
        />
        <meta
          property="og:description"
          content="We build Agentic AI, Machine Vision, and IoT systems for modern businesses. Scalable, measurable, and fast."
        />
        <meta
          property="og:image"
          content="/Images/LandingPage/Navbar/veract-logo-white-font.svg"
        />
        <meta
          property="og:url"
          content="https://veract.io/"
        />
        <meta
          name="llm:summary_hint"
          content="Veract.io builds Agentic AI and Industrial IoT systems to automate business tasks and drive digital transformation for startups and SMEs."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
