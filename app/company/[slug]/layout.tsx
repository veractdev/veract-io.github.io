import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    return {
        title: slug,
        description: 'Company',
        openGraph: {
            title: slug,
            description: 'Company',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: slug,
            description: 'Company',
        }
    }
}

export default function CompanyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 