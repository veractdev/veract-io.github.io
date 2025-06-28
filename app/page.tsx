'use client'
import React from 'react'
import Navbar from './components/layout/Navbar';
import UserServices from './components/layout/UserServices';
import Casestudy_Banner from './components/layout/Casestudy_Banner';
import Casestudy_ShowReel from './components/layout/Casestudy_ShowReel';
import Casestudy_Testimonial from './components/layout/Casestudy_Testimonial';
import Casestudy_Key_Features from './components/layout/Casestudy_Key_Features';
import CaseStudy_Challenges from './components/layout/CaseStudy_Challenges';

export default function Page() {
  return (
    <div className='w-screen flex items-center justify-center flex-col bg-[#0d0d0d]'>
      <Navbar />
      <Casestudy_Banner />
      <Casestudy_ShowReel />
      <CaseStudy_Challenges />
      <UserServices />
      <Casestudy_Key_Features />
      <Casestudy_Testimonial/>
    </div>
  );
}
