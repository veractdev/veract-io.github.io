'use client'
import { LandingPageData } from '@/lib/custom_data';
import { isMobile } from '@/lib/utils';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndexRef = React.useRef<number>(0);
  const [visibleMiniIndex, setVisibleMiniIndex] = useState<number | null>(null);
  const [loader, setLoader] = useState(false);

  const handleSetActiveIndex = (newIndex: number) => {
    if (newIndex !== activeIndex) {
      prevIndexRef.current = activeIndex;
      setVisibleMiniIndex(null);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      setLoader(true);
    });
  }, []);

  return (
    loader && (
      <div className="w-full h-max bg-[#0D0D0D] text-white flex items-center justify-center relative z-20">
        <div className="flex flex-col md:flex-row w-[75rem] gap-[3.125rem] md:gap-[2.75rem] h-full px-[1.5rem] md:px-[6.25rem] py-[3.125rem] items-center justify-between">
          <div className="w-full flex flex-col md:flex-row items-center justify-center relative">
            <img
              className="absolute top-[-3.4rem] left-1/2 transform -translate-x-1/2 md:left-[-3rem] md:-translate-x-0 w-[6rem] md:w-[7.438rem] h-[6rem] md:h-[6.938rem] object-contain z-0"
              src="/Images/LandingPage/Testimonial/TestimonialDots.png"
              alt="Testimonial_Quotes"
            />
            <div className="w-max relative z-10 syneFont text-[3.125rem] md:text-[5rem] leading-[1.2em] font-semibold flex flex-col gap-[0.625rem]">
              <span
                style={{
                  background: 'linear-gradient(355deg, rgb(156, 156, 161) 48%, rgba(250, 250, 250, 0) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}>
                What
              </span>
              <span
                style={{
                  background: 'linear-gradient(0deg, rgb(184, 184, 184) 100%, rgba(250, 250, 250, 0) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}>
                our
              </span>
              <span style={{
                background: 'linear-gradient(97deg, rgb(66, 133, 244) 24%, rgba(255, 255, 255, 0.63) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Clients
              </span>
              <span className="text-[#E3E3E3]">Say?</span>
            </div>
          </div>

          <div className='w-full h-max flex flex-col items-center justify-center md:flex-row gap-[1.125rem]'>
            {LandingPageData.testimonials.testimonial_list.map((t, index) => {
              // Expanded card
              if (activeIndex === index) {
                return (
                  <motion.div
                    key={index}
                    initial={ !isMobile() ? {width: "5.125rem"} : {height: "5rem"} }
                    animate={ !isMobile() ? {width: "20.125rem"} : {height: "27.5rem"} }
                    transition={  { duration: 0.7, ease: "easeInOut" }}
                    style={{ boxShadow: 'rgb(66, 135, 245) 0rem 0rem 0.813rem 0rem' }}
                    className="h-[27.5rem] rounded-[2.5rem] px-[1.563rem] py-[1.675rem] text-white border-[0.25rem] border-[#4285F4] overflow-hidden"
                  >
                    {/* Full Card Content */}
                    <motion.div
                      initial={ !isMobile() ? { x: -50, y: -100, opacity: 0 } : false }
                      animate={ !isMobile() ? { x: 0, y: 0, opacity: 1 } : false }
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="flex items-center gap-[0.625rem] pb-[2.438rem]">
                      <motion.img
                        className="w-[2.75rem] h-[2.75rem] md:w-[3.688rem] md:h-[3.688rem] mx-0 my-0 md:mx-[0.75rem] md:my-[0.50rem] rounded-full" src={t.image} alt="Testimonial_Client" />
                      <motion.div
                        className='flex flex-col gap-[0.625rem]'>
                        <div className="interFont text-[#E3E3E3] text-[1.25rem] font-semibold leading-[1.2rem] whitespace-nowrap">
                          {LandingPageData.testimonials.testimonial_list[activeIndex].name}
                        </div>
                        <div className="interFont text-[#E3E3E3] text-[1rem] font-normal leading-[1.2rem] whitespace-nowrap">
                          {LandingPageData.testimonials.testimonial_list[activeIndex].company}
                        </div>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={ !isMobile() ? { x: 50, y: 100, opacity: 0 } : false }
                      animate={ !isMobile() ? { x: 0, y: 0, opacity: 1, } : false }
                      transition={{ duration: 0.5, ease: "easeInOut", } }
                      className="relative pl-[1.438rem] text-base leading-relaxed">
                      <div className="absolute -top-4 -left-2 text-blue-500 text-3xl font-serif">
                        <img className='w-[1.938rem] h-[1.438rem] object-contain' src="/Images/LandingPage/Testimonial/quotes.png" alt="Testimonial_Quotes" />
                      </div>
                      <div className='interFont text-[#E3E3E3] font-normal text-[1rem] leading-[1.3rem] tracking-[0.00em]'>
                        {LandingPageData.testimonials.testimonial_list[activeIndex].quote}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              }

              // Recently closed card (animate shrink)
              if (prevIndexRef.current === index && activeIndex !== index) {
                if (visibleMiniIndex !== index) {
                  setTimeout(() => {
                    setVisibleMiniIndex(index);
                  }, 500); 
                }

                return (
                  <motion.button
                    key={index}
                    initial={ !isMobile() ? { width: "20.125rem" } : {width: '100%', height: '27.5rem'} }
                    animate={ !isMobile() ? { width: "5.125rem" } : {width: '100%', height: '5rem'} }
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    onMouseEnter={() => !isMobile() && handleSetActiveIndex(index)}
                    onClick={() => isMobile() && handleSetActiveIndex(index)}
                    className="relative md:h-[27.5rem] flex-shrink-0 cursor-pointer flex flex-row md:flex-col items-center justify-start md:justify-end rounded-[2.5rem] border-[0.25rem] border-[#4285F4] overflow-hidden"
                  >
                    {visibleMiniIndex === index ? (
                      // Mini card content (after 3s)
                      <div className='p-[0.625rem] md:p-0 flex flex-row items-center justify-center gap-[2.063rem]'>
                        <motion.img
                          initial={ { opacity: 0 }}
                          animate={ { opacity: 1 } }
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="w-[2.75rem] h-[2.75rem] md:w-[3.688rem] md:h-[3.688rem] mx-0 my-0 md:mx-[0.75rem] md:my-[0.50rem] rounded-full"
                          src={t.image}
                          alt="Testimonial_Client"
                        />
                        <motion.div
                          initial={ { opacity: 0 } }
                          animate={ { opacity: 1 } }
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="static md:absolute left-2/3 bottom-[6.5rem]  transform  origin-bottom-left rotate-0 md:rotate-[-90deg] interFont font-semibold text-[0.938rem] leading-[1.2em] md:text-[1.25rem] text-white whitespace-nowrap text-center">
                          {t.name}
                        </motion.div>
                      </div>
                    ) : (
                      // Placeholder content while waiting
                      <motion.div
                        key={index}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{ boxShadow: 'rgb(66, 135, 245) 0rem 0rem 0.813rem 0rem' }}
                        className="h-[27.5rem] md:h-[27.5rem] rounded-[2.5rem] px-[1.563rem] py-[1.675rem] text-white overflow-hidden"
                      >
                        <div
                          className="flex items-center gap-[0.625rem] pb-[2.438rem]">
                          <motion.img
                            initial={ !isMobile() ? { x: 0, y: 0, opacity: 0 } : false }
                            animate={ !isMobile() ? { x: -100, y: -50, opacity: 1 } : false }
                            transition={{ duration: 0.5, ease: "easeInOut" }}

                            className="w-[3.688rem] h-[3.688rem]  rounded-full" src={t.image} alt="Testimonial_Client" />

                          <motion.div
                            initial={ !isMobile() ? { x: 0, y: 0, opacity: 0 } : false }
                            animate={ !isMobile() ? { x: 100, y: -50, opacity: 1 } : false }
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className='flex flex-col gap-[0.625rem]'>
                            <div className="interFont text-[#E3E3E3] text-[1.25rem] font-semibold leading-[1.2rem] whitespace-nowrap">
                              {t.name}
                            </div>
                            <div className="interFont text-[#E3E3E3] text-[1rem] font-normal leading-[1.2rem] whitespace-nowrap">
                              {t.company}
                            </div>
                          </motion.div>
                        </div>

                        <motion.div
                          initial={ !isMobile() ? { x: 0, y: 0, opacity: 0 } : false }
                          animate={ !isMobile() ? { x: 100, y: 100, opacity: 1, } : false }
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="relative pl-[1.438rem] text-base leading-relaxed">
                          <div className="absolute -top-4 -left-2 text-blue-500 text-3xl font-serif">
                            <img className='w-[1.938rem] h-[1.438rem] object-contain' src="/Images/LandingPage/Testimonial/quotes.png" alt="Testimonial_Quotes" />
                          </div>
                          <p className='interFont text-[#E3E3E3] font-normal text-[1rem] leading-[1.3rem] tracking-[0.00em] text-left'>
                            {t.quote}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.button>
                );
              }


              // All other small buttons (static)
              return (
                <button
                  key={index}
                  onMouseEnter={() => !isMobile() && handleSetActiveIndex(index)}
                  onClick={() => isMobile() && handleSetActiveIndex(index)}
                  className="relative w-full p-[0.625rem] gap-[2.063rem] md:gap-0 md:p-0 md:w-[5.125rem] h-max md:h-[27.5rem] flex-shrink-0 cursor-pointer flex flex-row md:flex-col items-center justify-start md:justify-end rounded-[2.5rem] border-[0.25rem] border-[#4285F4]"
                >
                  <img
                    className="w-[2.75rem] h-[2.75rem] md:w-[3.688rem] md:h-[3.688rem] mx-0 my-0 md:mx-[0.75rem] md:my-[0.50rem] rounded-full"
                    src={t.image}
                    alt="Testimonial_Client"
                  />
                  <div className="static md:absolute left-2/3 bottom-[6.5rem]  transform  origin-bottom-left rotate-0 md:rotate-[-90deg] interFont font-semibold text-[0.938rem] leading-[1.2em] md:text-[1.25rem] text-[#E3E3E3] whitespace-nowrap">
                    {t.name}
                  </div>
                </button>

              );
            })}

          </div>

        </div>
      </div>
    )
  );
}