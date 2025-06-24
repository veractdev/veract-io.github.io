import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    return {
        title: slug,
        description: 'Case Studies',
        openGraph: {
            title: slug,
            description: 'Case Studies',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: slug,
            description: 'Case Studies',
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