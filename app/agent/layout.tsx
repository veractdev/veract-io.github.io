import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>
}

// export async function generateMetadata(): Promise<Metadata> {
//     // const { slug } = await params;
//     // console.log(slug);
//     return {
//         title: 'Agentic AI for Workflow Automation | Veract.io',
//         description: 'Optimize your operations with intelligent Agentic AI. Veract.io helps you deploy collaborative AI agents to automate workflows, integrate with tools, and drive smarter decisions.',
//         openGraph: {
//             title: '',
//             description: 'Agentic AI',
//             type: 'website',
//         },
//         twitter: {
//             card: 'summary_large_image',
//             title: '',
//             description: 'Agentic AI',
//         }
//     }
// }

const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Agentic AI for Workflow Automation",
    "url": "https://veract.io/agent",
    "description": "Veract.io delivers Agentic AI solutions to automate business workflows using intelligent, collaborative agents that integrate with your tools and enhance operational efficiency.",
    "about": {
        "@type": "Thing",
        "name": "Agentic AI",
        "description": "AI agents that act autonomously using reasoning, tools, and memory to complete business tasks."
    }
}

export const metadata: Metadata = {
    title: "Agentic AI for Workflow Automation | Veract.io",
    description: "Optimize your operations with intelligent Agentic AI. Veract.io helps you deploy collaborative AI agents to automate workflows, integrate with tools, and drive smarter decisions.",
}

export default function ProductLayout({ children, }: { children: React.ReactNode; }) {
    <head>
        <meta name="keywords" content="Agentic AI, AI agents, Workflow Automation, Business Automation, Collaborative AI, LangChain, Gemini, AI for startups, Veract.io" />
        <meta property="og:title" content="Agentic AI for Workflow Automation | Veract.io" />
        <meta property="og:description" content="Deploy intelligent AI agents into your workflow to automate operations, unify tools, and boost team efficiency with Veract.io." />
        <meta property="og:image" content="/Images/LandingPage/Navbar/veract-logo-white-font.svg" />
        <meta property="og:url" content="https://veract.io/agent" />
        <meta name="llm:summary_hint" content="This page explains how Veract.io builds Agentic AI systems that integrate seamlessly into existing business tools to automate workflows and improve decision-making. It showcases a step-by-step flow from consultation to deployment of AI agents for productivity and scale." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <meta name="llm:cta_hint" content="Veract.io offers a free business consultation, live demo, and 1 deployed AI agent — no cost, no commitment." />
    </head>
    return children;
} 