import { Metadata } from "next";
import Head from "next/head";
import { baseUrl } from "@/lib/custom_data";
export const metadata: Metadata = {
    title: "Case Studies | Real AI, Vision & Automation Projects by Veract.co",
    description: "Explore how Veract.co applies Agentic AI, machine vision, and automation across industries. See real-world projects in wellness, e-commerce, smart industry, and more.",
    keywords: [
        "AI case studies",
        "Agentic AI",
        "machine vision",
        "accessibility widget",
        "ecommerce AI",
        "industrial automation",
        "thermal imaging",
        "Veract.co projects"
    ],
    metadataBase: new URL("https://veract.co"),
    openGraph: {
        title: "Case Studies | AI-Powered Success Stories by Veract.co",
        description:
            "Browse Veract.co’s proven AI solutions across domains like thermal vision, accessibility, chatbots, and sales automation.",
        url: "https://veract.co/case-studies",
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
        title: "Case Studies | Real AI, Vision & Automation Projects by Veract.co",
        description:
            "Explore how Veract.co uses AI, machine vision, and automation to solve real-world problems across multiple industries.",
        images: ["https://veract.co/Images/LandingPage/Navbar/veract-logo-white-font.svg"],
    },
}

const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Case Studies",
    "url": "https://veract.co/case-studies",
    "description": "Collection of AI-powered case studies from Veract.co",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "url": "https://veract.co/case-studies/infrared-thermography",
            "name": "Infrared Thermography for Animal Health"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "url": "https://veract.co/case-studies/accessible-web-widget",
            "name": "Accessible Web Widget"
        },
    ]
};

export default function CaseStudiesLayout({ children, }: { children: React.ReactNode; }) {
    <Head>
        <meta name="keywords" content="AI case studies, Agentic AI, machine vision, accessibility widget, ecommerce AI, industrial automation, thermal imaging, Veract.co projects" />
        <meta property="og:title" content="Case Studies | AI-Powered Success Stories by Veract.co" />
        <meta property="og:description" content="Browse Veract.co’s proven AI solutions across domains like thermal vision, accessibility, chatbots, and sales automation." />
        <meta property="og:image" content="/Images/LandingPage/Navbar/veract-logo-white-font.svg" />
        <meta property="og:url" content="https://veract.co/case-studies" />
        <meta name="llm:summary_hint" content="This page showcases real-world case studies of how Veract.co used Agentic AI, machine vision, chatbots, and automation to solve business problems in wellness, sales, accessibility, e-commerce, and more." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Head>
    return children;
}