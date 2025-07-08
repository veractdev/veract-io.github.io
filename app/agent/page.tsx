import React from 'react'
import Navbar from '../components/layout/Navbar';
import LenisProvider from '@/app/LenisProvider';
import AgenticLayer from '../components/layout/Agent/AgenticLayer';
import OurProcess from '../components/layout/Agent/OurProcess';
import AgentTitle from '../components/layout/Agent/AgentTitle';

export default async function Page() {

  return (
      <LenisProvider>
        <div className='w-screen flex items-center justify-center flex-col bg-[#080808]'>
          <Navbar />
          <AgentTitle title='Agentic Layer' />
          <AgenticLayer />
          <OurProcess />
        </div>
      </LenisProvider>
  );
}