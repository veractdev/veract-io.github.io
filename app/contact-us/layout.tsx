import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    console.log(slug);
    return {
        title: slug,
        description: 'Contact Us',
        openGraph: {
            title: slug,
            description: 'Contact Us',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: slug,
            description: 'Contact Us',
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