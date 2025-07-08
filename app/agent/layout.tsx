import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    console.log(slug);
    return {
        title: slug,
        description: 'Agentic AI',
        openGraph: {
            title: slug,
            description: 'Agentic AI',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: slug,
            description: 'Agentic AI',
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