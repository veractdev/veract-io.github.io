import { Metadata } from 'next';
import { metadata } from '@/lib/custom_data';
import Head from 'next/head';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const data = metadata.find(item => item.slug === slug);
    if (!data) {
        return {
            title: 'Veract.io',
            description: 'Veract.io builds Agentic AI systems, Machine Vision, and Industrial IoT solutions to modernize and automate businesses.',
        }
    }
    return {
        title: data.title,
        description: data.description,
        keywords: data.keywords,
        authors: [{ name: data.author }],
        openGraph: {
            title: data.openGraph.title,
            description: data.openGraph.description,
            type: data.openGraph.type as "website",
            url: data.url,
            images: [
                {
                    url: data.image || '',
                    alt: data.title,
                },
            ],
        },
        twitter: {
            card: data.twitter.card as "summary_large_image" | "summary",
            title: data.twitter.title,
            description: data.twitter.description,
            images: [data.image || ''],
        },
        metadataBase: new URL('https://veract.io'),
        alternates: {
            canonical: data.url,
        },
    }
}

export default async function ProductLayout({ children, params }: { children: React.ReactNode; params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = metadata.find((item) => item.slug === slug)
    return (
        <>
            {data && (
                <Head>
                    {/* GEO Tags */}
                    <meta name="geo.region" content={data.geo.region} />
                    <meta name="geo.placename" content={data.geo.placename} />
                    <meta name="geo.position" content={data.geo.position} />
                    <meta name="ICBM" content={data.geo.icbm} />

                    {/* Additional SEO Tags */}
                    <meta name="subject" content={data.subject} />
                    <meta name="industry" content={data.industry} />
                    <meta name="language" content={data.language} />
                    <meta name="author" content={data.author} />
                </Head>
            )}
            {children}
        </>
    )
} 