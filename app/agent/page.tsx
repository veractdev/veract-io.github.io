import React from 'react'
import Navbar from '../components/layout/Navbar';
import LenisProvider from '@/app/LenisProvider';
import AgentTitle from '../components/layout/Agent/AgentTitle';
import OurProcess from '../components/layout/Agent/OurProcess';

export default async function Page() {

  return (
      <LenisProvider>
        <div className='w-screen h-screen flex items-center justify-center flex-col bg-[#080808]'>
          <Navbar />
          <AgentTitle />
          <OurProcess />
        </div>
      </LenisProvider>
  );
}