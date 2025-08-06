'use client'
import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/layout/Landing_Page/Footer'
import Navbar from '../components/layout/Navbar'
import { useRouter } from 'next/navigation'
import { baseUrl, services } from '@/lib/custom_data';
import { motion } from 'framer-motion'
import { isMobile, isTablet } from '@/lib/utils'

export default function Page() {

  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState<number>(0);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setTranslateY(-scrollY / 3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <div className='flex flex-col items-center justify-center bg-primary-text relative'>
        <img src="/Images/services/service_background_overlay.png" alt="overlay image" className='hidden absolute top-0 left-0 w-full h-full object-cover' />
        <Navbar />
        <div className="w-full h-[100vh] md:h-[100vh] lg:h-max flex flex-col items-center justify-center py-0 md:py-[15.25rem_22.5rem] px-[3.125rem] relative">
          <img src={`${!isMobile() && !isTablet() ? '/Images/services/services-background-overlay.jpg' : `${isTablet() ? '/Images/services/services_tab_background_overlay.png' : '/Images/services/services_mobile_background_overlay.png'}`}`} alt='service background image' className="absolute top-0 left-0 w-full h-[99%] object-cover" />
          <img loading="lazy" src={`${baseUrl}/Images/case-studies/Overlay-1.png`} alt="overlay image" className='absolute top-0 left-0 w-full h-full' />
          <img loading="lazy" src={`${baseUrl}/Images/case-studies/Overlay-2.png`} alt="overlay image" className='absolute top-0 left-0 w-full h-full' />
          <div
            className="w-[80%] absolute left-[1.25rem] bottom-[4.75rem] md:w-[80%] lg:w-[90%] md:left-[3.125rem] md:bottom-[2.5rem] md:top-auto lg:top-[15.25rem] lg:left-[3.125rem] lg:bottom-auto flex flex-wrap flex-col gap-[0.625rem] items-start justify-center"
            style={{
              transform: `translateY(${translateY}px)`,
              willChange: "transform",
            }}
          >
            <div className="syneFont text-[3.75rem] md:text-[6rem] gradient-text font-bold leading-[1em] -tracking-[0.05em] pr-[0.75rem]">
              Our Services
            </div>
            <div className="interFont max-w-full lg:max-w-1/2 text-[1rem] md:text-[1.25rem] text-white font-light leading-[1.5em] -tracking-[0.02em]">
              Discover how our customized tech services spark innovation, overcome complex challenges, and provide businesses with the tools they need to grow and thrive.            </div>
          </div>
          <div className="scale-75 md:scale-100 absolute top-[35%] md:top-[50%] left-[-2.85rem] translate-y-[50%] md:translate-y-[-50%] lg:translate-none lg:top-[85%] md:-left-[1.5rem] flex flex-row gap-[1rem] items-center justify-center transform rotate-90">
            <div className="uppercase interFont text-[0.875rem] text-white font-light leading-[1.5em] -tracking-[0.02em]">
              Scroll
            </div>
            <div className="h-full bg-white animate-grow-line" />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className='w-full flex flex-col items-center justify-center p-[6.5rem_1rem_3.75rem_1rem] md:p-[6.94rem_3.81rem_7.56rem_2.44rem] lg:p-[9.31rem_3rem_10.69rem_3.06rem]'
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ amount: 'some' }}
              className='w-full relative flex flex-col lg:flex-row gap-[2.31rem] md:gap-[1.5rem] lg:gap-[2.06rem] items-start justify-center lg:justify-between pb-[2.75rem] md:pb-[4.25rem] lg:pb-[4.06rem] not-first:mt-[1.37rem] md:not-first:mt-[2.44rem] lg:not-first:mt-[1.87rem]'
            >
              <div className='flex flex-row gap-[0.69rem] md:gap-[0.69rem] lg:gap-[2.06rem] items-start justify-center'>
                <div
                  className='interFont text-[1.125rem] text-white font-medium leading-normal'
                >
                  [{service.id}]
                </div>
                {/* <div
                  className='w-full lg:w-[18.3125rem] interFont text-[1.25rem] md:text-[1.625rem] lg:text-[1.875rem] text-[#FFFFFF] font-medium leading-normal'
                >
                  {service.title}
                </div> */}
                <span className='w-full lg:w-[350px] ' dangerouslySetInnerHTML={{ __html: service.title }} />
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
                <div className='flex flex-col gap-[1.38rem] items-center md:items-start justify-center py-0 md:py-[0.62rem] lg:py-0'>
                  {service.service_CTA.map((CTA, index) => (
                    <div
                      key={index}
                      className='group flex flex-col md:flex-row gap-[1.31rem] md:gap-[1.25rem] items-center justify-center'
                      onClick={() => {
                        if (CTA.status === 'active') {
                          router.push(CTA.routeTo)
                        }
                        else {
                          router.push('/case-studies')
                        }
                      }}
                    >
                      <img src={CTA.image} alt="service image" className='group-hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer will-change-transform object-cover w-[12.75rem] h-[8.3125rem] md:w-[6.875rem] lg:w-[7.75rem] md:h-[4.5rem] lg:h-[5.0625rem] rounded-[1rem] md:rounded-[0.55444rem] lg:rounded-[0.625rem] overflow-hidden' />
                      <div className='transition-all duration-300 ease-in-out cursor-pointer will-change-transform w-full lg:w-[11.125rem] interFont text-[1.25rem] md:text-[1.125rem] lg:text-[1.25rem] text-white group-active:text-primary-blue group-hover:text-primary-blue font-medium leading-normal text-center md:text-left'
                      >
                        {CTA.CTA_title}
                      </div>
                    </div>
                  ))}
                  <div
                    onClick={() => {
                      router.push('/case-studies')
                    }}
                    className='pt-[1.5rem] md:pt-0 interFont text-[1.125rem] lg:text-[1.25rem] text-white active:text-primary-blue hover:text-primary-blue font-medium leading-normal cursor-pointer transition-all duration-300 ease-in-out'>
                    See more...
                  </div>
                </div>
              </div>
              <div className='absolute bottom-0 w-full h-[0.1875rem] service_bottom_border' />
            </motion.div>
          ))}
        </motion.div>
        <Footer ref={footerRef} sessionId={"footer-services"} />
      </div>
    )
  )
}
