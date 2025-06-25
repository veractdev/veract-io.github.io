'use client'
import React, { useEffect } from 'react'
import Navbar from './components/layout/Navbar';
import Casestudy_Banner from './components/layout/Casestudy_Banner';
import Casestudy_ShowReel from './components/layout/Casestudy_ShowReel';
import Casestudy_Testimonial from './components/layout/Casestudy_Testimonial';

export default function Page() {
  return (
    <div className='w-screen flex items-center justify-center flex-col bg-black'>
      <Navbar />
      <Casestudy_Banner />
      <Casestudy_ShowReel />
      <Casestudy_Testimonial/>
    </div>
  );
}
