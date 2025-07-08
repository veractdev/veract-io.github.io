import React from 'react'
import Navbar from '../components/layout/Navbar';
import LenisProvider from '@/app/LenisProvider';
// import { caseStudyData } from '@/lib/custom_data';

type Props = {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: Props) {
  // const { slug } = await params;
  // const data = caseStudyData[slug as keyof typeof caseStudyData];

  return (
      <LenisProvider>
        <div className='w-screen flex items-center justify-center flex-col bg-primary-text'>
          <Navbar />
          
        </div>
      </LenisProvider>
  );
}