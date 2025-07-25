import { Metadata } from "next";
import Head from "next/head";
export const metadata: Metadata = {
    title: "Contact Veract.co – Mobile, Web, AI & IoT Experts",
    description:
        "Get in touch with Veract.co for custom mobile apps, web applications, agentic AI, and IoT development services. Let’s collaborate to build cutting-edge digital solutions tailored to your business.",
    keywords:
        "Veract.co contact, mobile app development India, web app development, agentic AI solutions, IoT development company, custom software services",
    openGraph: {
        title: "Contact Veract.co – Custom Mobile, Web, AI & IoT Development",
        description:
            "Reach out to Veract.co for high-impact mobile apps, web development, agentic AI systems, and IoT solutions.",
        url: "https://www.veract.co/contact",
        type: "website",
        images: [
            {
                url: "https://www.veract.co/assets/contact-preview.jpg",
                width: 1200,
                height: 630,
                alt: "Contact Veract.co – Mobile, Web, AI & IoT Experts",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Veract.co – Mobile, Web, AI & IoT Experts",
        description:
            "Get in touch for powerful mobile and web apps, agentic AI tools, and IoT development services.",
        images: ["https://www.veract.co/assets/contact-preview.jpg"],
    },
    metadataBase: new URL("https://www.veract.co"),
};

const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us",
    description:
        "Contact Veract.co for mobile app development, web apps, AI systems, and IoT solutions.",
    url: "https://www.veract.co/contact",
    mainEntity: {
        "@type": "Organization",
        name: "Veract.co",
        url: "https://www.veract.co",
        logo: "https://www.veract.co/Images/LandingPage/Navbar/veract-logo-white-font.svg",
        contactPoint: {
            "@type": "ContactPoint",
            telephone: [
                "+919789991565",
                "+919789991565",
                "+17377101523",
            ],
            contactType: "Customer Service",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi", "Tamil"],
        },
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Head>
                <meta
                    name="keywords"
                    content="Veract.co contact, mobile app development India, web app development, agentic AI solutions, IoT development company, custom software services"
                />
                <meta
                    name="author"
                    content="Veract.co"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="robots"
                    content="index, follow"
                />
                <meta
                    name="llm:summary_hint"
                    content="Contact Veract.co to discuss your needs for custom mobile apps, web solutions, AI agents, or IoT systems tailored to your business goals."
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(contactSchema),
                    }}
                />
            </Head>
            {children}
        </>
    );
}