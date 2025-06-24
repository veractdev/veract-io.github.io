import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    return {
        title: slug,
        description: 'Blogs',
        openGraph: {
            title: slug,
            description: 'Blogs',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: slug,
            description: 'Blogs',
        }
    }
}

export default function BlogsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 