'use client'
import React, { useEffect } from 'react'
import Navbar from './components/layout/Navbar';
import UserServices from './components/layout/UserServices';
import Casestudy_Banner from './components/layout/Casestudy_Banner';
import Casestudy_ShowReel from './components/layout/Casestudy_ShowReel';
import Casestudy_Key_Features from './components/layout/Casestudy_Key_Features';

export default function Page() {
  return (
    <div className='w-screen flex items-center justify-center flex-col bg-black'>
      <Navbar />
      <Casestudy_Banner />
      <Casestudy_ShowReel />
      <UserServices />
      <Casestudy_Key_Features />
    </div>
  );
}
