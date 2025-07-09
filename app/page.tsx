'use client'
import React, { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Banner from './components/layout/Landing_Page/Banner'
import ShowReel from './components/layout/Landing_Page/ShowReel'
import About_Us from './components/layout/Landing_Page/About_Us'
import Advantages from './components/layout/Landing_Page/Advantages'
import We_Work_With from './components/layout/Landing_Page/We_Work_With'
import Testimonials from './components/layout/Landing_Page/Testimonials'
import Footer from './components/layout/Landing_Page/Footer'
import LenisProvider from './LenisProvider'
import { getNavbarState } from '@/lib/globalState'

export default function Page() {

  const [loader, setLoader] = useState(false);
  const { setNavbarState } = getNavbarState();

  useEffect(() => {
    requestAnimationFrame(() => {
      setLoader(true);
      setNavbarState(null);
    });
  }, []);

  return (
    <LenisProvider>
      {loader && (
        <div className='w-full flex flex-col items-center justify-center bg-black'>
          <Navbar />
          <Banner />
          <ShowReel />
          <About_Us />
          <Advantages />
          {/* <Services /> */}
          <We_Work_With />
          {/* <Testimonials /> */}
          <Footer />
        </div>
      )}
    </LenisProvider>
  )
}
