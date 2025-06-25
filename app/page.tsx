'use client'
import React, { useEffect } from 'react'
import Navbar from './components/layout/Navbar';
import Casestudy_Banner from './components/layout/Casestudy_Banner';
import Casestudy_ShowReel from './components/layout/Casestudy_ShowReel';

export default function Page() {
  return (
    <div className='w-screen flex items-center justify-center flex-col bg-black'>
      <Navbar />
      <Casestudy_Banner />
      <Casestudy_ShowReel />
      <div className='w-full h-[100vh] bg-red-500' />
    </div>
  );
}
