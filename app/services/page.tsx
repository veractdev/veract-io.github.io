'use client'
import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/layout/Landing_Page/Footer'
import Navbar from '../components/layout/Navbar'
import { useRouter } from 'next/navigation'
import { services } from '@/lib/custom_data';

export default function page() {

  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Restore scroll position from session storage
  useEffect(() => {
    if (loaded) {
      const savedScrollPosition = sessionStorage.getItem("footer-services");
      if (savedScrollPosition) {
        setTimeout(() => {
          // Restore the saved scroll position
          const scrollPosition = parseInt(savedScrollPosition);
          if (!isNaN(scrollPosition)) {
            window.scrollTo(0, scrollPosition);
          }
          sessionStorage.clear();
        }, 100);
      }
    }
  }, [loaded]);

  return (
    loaded && (
      <div className='flex flex-col items-center justify-center bg-black relative'>
        <img src="/Images/services/service_background_overlay.png" alt="overlay image" className='absolute top-0 left-0 w-full h-full object-cover' />
        <Navbar />
        <div
          className='flex flex-col items-center justify-center p-[6.5rem_1rem_3.75rem_1rem] md:p-[6.94rem_3.81rem_7.56rem_2.44rem] lg:p-[9.31rem_3rem_10.69rem_3.06rem]'
        >
          {services.map((service, index) => (
            <div key={index} className='relative flex flex-col lg:flex-row gap-[2.31rem] md:gap-[1.5rem] lg:gap-[2.06rem] items-start justify-center pb-[2.75rem] md:pb-[4.25rem] lg:pb-[4.06rem] not-first:mt-[1.37rem] md:not-first:mt-[2.44rem] lg:not-first:mt-[1.87rem]'>
              <div className='flex flex-row gap-[0.69rem] md:gap-[0.69rem] lg:gap-[2.06rem] items-start justify-center'>
                <div
                  className='interFont text-[1.125rem] text-primary-blue font-medium leading-normal'
                >
                  [{service.id}]
                </div>
                <div
                  className='w-full lg:w-[18.3125rem] interFont text-[1.25rem] md:text-[1.625rem] lg:text-[1.875rem] text-[#8F9FA3] font-medium leading-normal'
                >
                  {service.title}
                </div>
              </div>
              <div className='flex flex-col md:flex-row gap-[2.31rem] md:gap-[4.38rem] lg:gap-[2.06rem] items-center md:items-start justify-center'>
                <div className='flex flex-col p-[0.625rem_1.25rem] md:p-[0.62rem_0_0_2.094rem] lg:p-0 gap-[1rem] lg:gap-[0.62rem] items-start lg:items-center justify-center'>
                  {service.service_array.map((service, index) => (
                    <div key={index} className='flex flex-row gap-[0.62rem] items-center justify-center p-[0.38rem_0.62rem]'>
                      <img src={service.service_icon} alt="service icon" className='w-[1.5rem] h-[1.5rem]' />
                      <div className='w-full md:w-[12.125rem] lg:w-[18.75rem] interFont text-[0.875rem] md:text-[1rem] text-[#FFFFFF] font-medium leading-normal'>{service.service_title}</div>
                    </div>
                  ))}
                </div>
                <div className='flex flex-col gap-[1.38rem] items-center md:items-start justify-center py-[] md:py-[0.62rem] lg:py-0'>
                  {service.service_CTA.map((CTA, index) => (
                    <div key={index} className='flex flex-col md:flex-row gap-[1.31rem] md:gap-[1.25rem] items-center justify-center'>
                      <img src={CTA.image} alt="service image" className='object-cover w-[12.75rem] h-[8.3125rem] md:w-[6.875rem] lg:w-[7.75rem] md:h-[4.5rem] lg:h-[5.0625rem] rounded-[1rem] md:rounded-[0.55444rem] lg:rounded-[0.625rem] overflow-hidden' />
                      <div className='w-full lg:w-[11.125rem] interFont text-[1.25rem] md:text-[1.125rem] lg:text-[1.25rem] text-white active:text-primary-blue hover:text-primary-blue font-medium leading-normal cursor-pointer transition-all duration-300 text-center md:text-left'
                        onClick={() => {
                          if (CTA.status === 'active') {
                            router.push(CTA.routeTo)
                          }
                          else {
                            router.push('/contact-us')
                          }
                        }}
                      >
                        {CTA.CTA_title}
                      </div>
                    </div>
                  ))}
                  <div
                    onClick={() => {
                      router.push('/case-studies')
                    }}
                    className='pt-[1.5rem] md:pt-0 interFont text-[1.125rem] lg:text-[1.25rem] text-white active:text-primary-blue hover:text-primary-blue font-medium leading-normal cursor-pointer transition-all duration-300'>
                    See more...
                  </div>
                </div>
              </div>
              <div className='absolute bottom-0 w-full h-[0.1875rem] service_bottom_border' />
            </div>
          ))}
        </div>
        <Footer ref={footerRef} sessionId={"footer-services"} />
      </div>
    )
  )
}
