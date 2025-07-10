'use client'
import React, { useEffect } from 'react'
import Navbar from '../components/layout/Navbar';
import LenisProvider from '@/app/LenisProvider';
import AgenticLayer from '../components/layout/Agent/AgenticLayer';
import AgentBanner from '../components/layout/Agent/Agent_Banner';
import OurProcess from '../components/layout/Agent/OurProcess';
import MultiAgent from '../components/layout/Agent/MultiAgent';
import AiAgent from '../components/layout/Agent/AiAgent';
import { getNavbarState } from '@/lib/globalState';

export default function Page() {
 
  const {setNavbarState} = getNavbarState();
  
  useEffect(() => {
    setNavbarState(3);
    return () => {
    };
  }, []);

  return (
      <LenisProvider>
        <div className='w-screen flex items-center justify-center flex-col bg-[#080808]'>
          <Navbar />
          <AgentBanner/>
          <AgenticLayer />
          <AiAgent />
          <OurProcess />
          <MultiAgent />
        </div>
      </LenisProvider>
  );
}