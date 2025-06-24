import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    return {
        title: slug,
        description: 'Services',
        openGraph: {
            title: slug,
            description: 'Services',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: slug,
            description: 'Services',
        }
    }
}

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 