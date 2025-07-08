import React from 'react'
import Navbar from '../components/layout/Navbar';
import LenisProvider from '@/app/LenisProvider';
import AgentTitle from '../components/layout/Agent/AgentTitle';
import AgentBanner from '../components/layout/Agent/Agent_Banner';
// import { caseStudyData } from '@/lib/custom_data';

type Props = {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: Props) {
  // const { slug } = await params;
  // const data = caseStudyData[slug as keyof typeof caseStudyData];

  return (
      <LenisProvider>
        <div className='w-screen h-screen flex items-center justify-center flex-col bg-[#080808]'>
          <Navbar />
          {/* <AgentTitle /> */}
          <AgentBanner/>
        </div>
      </LenisProvider>
  );
}