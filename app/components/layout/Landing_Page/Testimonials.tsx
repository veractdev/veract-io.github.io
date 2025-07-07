'use client'
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndexRef = React.useRef<number>(0);

  const handleSetActiveIndex = (newIndex: number) => {
    if (newIndex !== activeIndex) {
      prevIndexRef.current = activeIndex;
      setActiveIndex(newIndex);
    }
  };

  const testimonials = [
    {
      name: "John Doe",
      quote:
        "I am amazed the way Veract took the initial discussion of our HRMS product MyTrackie. They swiftly got into the details and educated me wherever required. Really thrilled to work with Veract for the software upgrades of our product. I would certainly recommend Veract for product development and technical consulting.",
      image: "/Images/LandingPage/Testimonial/testimonial_profile.png",
      company: "Evo11ve",
    },
    {
      name: "Jane Smith",
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/Images/LandingPage/Testimonial/testimonial_profile.png",
      company: "TechSpark",
    },
    {
      name: "Alice Johnson",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/Images/LandingPage/Testimonial/testimonial_profile.png",
      company: "InnoVibe",
    },
    {
      name: "Bob Brown",
      quote:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/Images/LandingPage/Testimonial/testimonial_profile.png",
      company: "NextWare",
    },
    { 
      name: "Bob Brown",
      quote:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/Images/LandingPage/Testimonial/testimonial_profile.png",
      company: "NextWare",
    },
  ];
  return (
    <div className="w-full h-[100vh] bg-[#0D0D0D] text-white flex items-center justify-center">
      <div className="flex w-[75rem] gap-[2.75rem] h-full px-[6.25rem] py-[3.125rem] items-center justify-between">
        <div className="w-[30%] relative">
          <img
            className="absolute top-[-3.4rem] left-[-3rem] w-[6rem] md:w-[7.438rem] h-[6rem] md:h-[6.938rem] object-contain z-0"
            src="/Images/LandingPage/Testimonial/TestimonialDots.png"
            alt="Testimonial_Quotes"
          />
          <div className="relative z-10 syneFont leading-[1.2em] text-[5rem] font-semibold flex flex-col">
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
              background: 'linear-gradient(97deg, rgb(66, 133, 244) 24%, rgba(255, 255, 255, 0.63) 100%);',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Clients
            </span>
            <span className="text-[#E3E3E3]">Say?</span>
          </div>
        </div>

        <div className='w-[70%] h-[27.5rem]  flex gap-[1.125rem]'>
          {testimonials.map((t, index) => {
            // Expanded card
            if (activeIndex === index) {
              return (
                <motion.div
                  key={index}
                  initial={{ width: "5.125rem" }}
                  animate={{ width: "20.125rem" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ boxShadow: 'rgb(66, 135, 245) 0rem 0rem 0.813rem 0rem' } as any}
                  className="h-[27.5rem] rounded-[2.5rem] px-[1.563rem] py-[1.675rem] text-white border border-[0.25rem] border-[#4285F4] overflow-hidden"
                >
                  {/* Full Card Content */}
                  <motion.div
                    initial={{ x: 100, y: -50, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    exit={{ x: -100, y: 50, opacity: 0 }}  
                    className="flex items-center gap-[0.625rem] pb-[2.438rem]">
                    <img className="w-[3.688rem] h-[3.688rem]  rounded-full" src={t.image} alt="Testimonial_Client" />

                    <div className='flex flex-col gap-[0.625rem]'>
                      <div className="interFont text-[#E3E3E3] text-[1.25rem] font-semibold leading-[1.2rem] whitespace-nowrap">
                        {testimonials[activeIndex].name}
                      </div>
                      <div className="interFont text-[#E3E3E3] text-[1rem] font-normal leading-[1.2rem] whitespace-nowrap">
                        {testimonials[activeIndex].company}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: 100, y: 100, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1,}}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
                    className="relative pl-[1.438rem] text-base leading-relaxed">
                    <div className="absolute -top-4 -left-2 text-blue-500 text-3xl font-serif">
                      <img className='w-[1.938rem] h-[1.438rem] object-contain' src="/Images/LandingPage/Testimonial/quotes.png" alt="Testimonial_Quotes" />
                    </div>
                    <p className='interFont text-[#E3E3E3] font-normal text-[1rem] leading-[1.3rem] tracking-[0.00em]'>
                      {testimonials[activeIndex].quote}
                    </p>
                  </motion.div>
                </motion.div>
              );
            }

            // Recently closed card (animate shrink)
            if (prevIndexRef.current === index) {
              return (
                <motion.button
                  key={index}
                  initial={{ width: "20.125rem" }}
                  animate={{ width: "5.125rem" }}
                  transition={{ duration: 0.8,ease: "easeInOut" }}
                  // onClick={() => handleSetActiveIndex(index)}
                  onMouseEnter={() => handleSetActiveIndex(index)}
                  className="relative h-[27.5rem] flex-shrink-0 cursor-pointer flex flex-col items-center justify-end rounded-[2.5rem] border border-[0.25rem] border-[#4285F4] overflow-hidden"
                >
                  <div className='absolute top-[10rem]'>
                    <div className="interFont font-semibold text-[1.25rem] text-white rotate-[-90deg] whitespace-nowrap">
                      {t.name}
                    </div>
                  </div>
                  <img className="w-[3.688rem] h-[3.688rem] mx-[0.75rem] my-[0.50rem] rounded-full" src={t.image} alt="Testimonial_Client" />
                </motion.button>
              );
            }

            // All other small buttons (static)
            return (
              <button
                key={index}
                // onClick={() => handleSetActiveIndex(index)}
                onMouseEnter={() => handleSetActiveIndex(index)}
                className="relative w-[5.125rem] h-[27.5rem] flex-shrink-0 cursor-pointer flex flex-col items-center justify-end rounded-[2.5rem] border border-[0.25rem] border-[#4285F4]"
              >
                <div className='absolute top-[10rem]'>
                  <div className="interFont font-semibold text-[1.25rem] text-white rotate-[-90deg] whitespace-nowrap">
                    {t.name}
                  </div>
                </div>
                <img className="w-[3.688rem] h-[3.688rem] mx-[0.75rem] my-[0.50rem] rounded-full" src={t.image} alt="Testimonial_Client" />
              </button>
            );
          })}

        </div>

      </div>
    </div>
  );
}
