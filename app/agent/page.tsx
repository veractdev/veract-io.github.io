import React from 'react'
import Navbar from '../components/layout/Navbar';
import LenisProvider from '@/app/LenisProvider';
import AgenticLayer from '../components/layout/Agent/AgenticLayer';
import AgentBanner from '../components/layout/Agent/Agent_Banner';
import OurProcess from '../components/layout/Agent/OurProcess';
import MutliAgent from '../components/layout/Agent/MutliAgent';
import AiAgent from '../components/layout/Agent/AiAgent';

export default async function Page() {

  return (
      <LenisProvider>
        <div className='w-screen flex items-center justify-center flex-col bg-[#080808]'>
          {/* <Navbar /> */}
          {/* <AgentBanner/> */}
          <AgenticLayer />
          {/* <AiAgent /> */}
          {/* <OurProcess />
          <MutliAgent /> */}
        </div>
      </LenisProvider>
  );
}