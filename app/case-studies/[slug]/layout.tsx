import { Metadata } from 'next';
import { metadata } from '@/lib/custom_data';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const data = metadata.find(item => item.slug === slug);
    if (!data) {
        return {
            title: 'Veract.io',
            description: 'Veract.io builds Agentic AI systems, Machine Vision pipelines, and Industrial IoT solutions to modernize and automate businesses.',
        }
    }
    return {
        title: data.title,
        description: data.description,
        openGraph: {
            title: slug,
            description: data.description,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: slug,
            description: data.description,
        }
    }
}

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 