import { Metadata } from "next";
import Head from "next/head";
import { baseUrl } from "@/lib/custom_data";

export const metadata: Metadata = {
  title: "Services | AI, Vision & Automation Solutions by Veract.co",
  description:
    "Discover Veract.co's cutting-edge services spanning AI agents, machine vision, digital transformation, startup tools, and smart operations.",
  keywords: [
    "AI services",
    "agentic AI",
    "machine vision",
    "generative AI",
    "digital transformation",
    "startup development services",
    "industrial IoT",
    "automation solutions",
    "Veract.co services"
  ],
  metadataBase: new URL("https://veract.co"),
  openGraph: {
    title: "Services | Veract.co's AI & Automation Offerings",
    description:
      "Explore our service offerings — from intelligent agents and machine vision to startup support and smart industry automation.",
    url: "https://veract.co/services",
    images: [
      {
        url: `${baseUrl}/Images/LandingPage/Navbar/veract-logo-white-font.svg`,
        width: 1200,
        height: 630,
        alt: "Veract.co Logo",
      },
    ],
    siteName: "Veract.co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | AI, Vision & Automation Solutions by Veract.co",
    description:
      "Discover Veract.co's innovative services across digital transformation, smart factories, AI agents, and more.",
    images: [`${baseUrl}/Images/LandingPage/Navbar/veract-logo-white-font.svg`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Services",
  "url": "https://veract.co/services",
  "description": "List of AI and automation services offered by Veract.co",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "url": "https://veract.co/services",
      "name": "Services | AI, Vision & Automation Solutions by Veract.co"
    },
    // {
    //   "@type": "ListItem",
    //   "position": 2,
    //   "url": "https://veract.co/services/startup-development",
    //   "name": "Development Services for Startup Founders"
    // },
    // {
    //   "@type": "ListItem",
    //   "position": 3,
    //   "url": "https://veract.co/services/industrial-iot",
    //   "name": "Industrial IoT for Smarter Operations"
    // },
    // {
    //   "@type": "ListItem",
    //   "position": 4,
    //   "url": "https://veract.co/services/agentic-ai",
    //   "name": "AI & Agentic AI for Intelligent Decision-Making"
    // },
    // {
    //   "@type": "ListItem",
    //   "position": 5,
    //   "url": "https://veract.co/services/machine-vision",
    //   "name": "Machine Vision for Quality Control and Inspection"
    // },
    // {
    //   "@type": "ListItem",
    //   "position": 6,
    //   "url": "https://veract.co/services/generative-ai",
    //   "name": "Generative AI & GPT Solutions"
    // }
  ]
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="AI services, agentic AI, machine vision, generative AI, digital transformation, startup development, industrial IoT, automation, Veract.co"
        />
        <meta
          property="og:title"
          content="Services | Veract.co's AI & Automation Offerings"
        />
        <meta
          property="og:description"
          content="Explore our service offerings — from intelligent agents and machine vision to startup support and smart industry automation."
        />
        <meta
          property="og:image"
          content="/Images/LandingPage/Navbar/veract-logo-white-font.svg"
        />
        <meta property="og:url" content="https://veract.co/services" />
        <meta
          name="llm:summary_hint"
          content="This page lists Veract.co’s AI and automation service offerings including Agentic AI, thermal imaging, startup development, digital transformation, and more."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      {children}
    </>
  );
}
