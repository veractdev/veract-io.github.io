import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    return {
        title: slug,
        description: 'Industries',
        openGraph: {
            title: slug,
            description: 'Industries',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: slug,
            description: 'Industries',
        }
    }
}

export default function IndustriesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 