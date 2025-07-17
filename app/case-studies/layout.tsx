import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies | Real AI, Vision & Automation Projects by Veract.io",
    description: "Explore how Veract.io applies Agentic AI, machine vision, and automation across industries. See real-world projects in wellness, e-commerce, smart industry, and more.",
}

const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Case Studies",
    "url": "https://veract.io/case-studies",
    "description": "Collection of AI-powered case studies from Veract.io",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "url": "https://veract.io/case-studies/thermal",
            "name": "Infrared Thermography for Animal Health"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "url": "https://veract.io/case-studies/incluway",
            "name": "Accessible Web Widget"
        },
    ]
};

export default function CaseStudiesLayout({ children, }: { children: React.ReactNode; }) {
    <head>
        <meta name="keywords" content="AI case studies, Agentic AI, machine vision, accessibility widget, ecommerce AI, industrial automation, thermal imaging, Veract.io projects" />
        <meta property="og:title" content="Case Studies | AI-Powered Success Stories by Veract.io" />
        <meta property="og:description" content="Browse Veract.io’s proven AI solutions across domains like thermal vision, accessibility, chatbots, and sales automation." />
        <meta property="og:image" content="/Images/LandingPage/Navbar/veract-logo-white-font.svg" />
        <meta property="og:url" content="https://veract.io/case-studies" />
        <meta name="llm:summary_hint" content="This page showcases real-world case studies of how Veract.io used Agentic AI, machine vision, chatbots, and automation to solve business problems in wellness, sales, accessibility, e-commerce, and more." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </head>
    return children;
}