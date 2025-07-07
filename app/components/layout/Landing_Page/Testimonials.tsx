'use client'
import React, { useState } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      quote:
        "I am amazed the way Veract took the initial discussion of our HRMS product MyTrackie. They swiftly got into the details and educated me wherever required. Really thrilled to work with Veract for the software upgrades of our product. I would certainly recommend Veract for product development and technical consulting.",
      image: "/Images/LandingPage/Testinomial/TestinomialDots.png",
      company: "Evo11ve",
    },
    {
      name: "Jane Smith",
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/Images/LandingPage/Testinomial/TestinomialDots.png",
      company: "TechSpark",
    },
    {
      name: "Alice Johnson",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/Images/LandingPage/Testinomial/TestinomialDots.png",
      company: "InnoVibe",
    },
    {
      name: "Bob Brown",
      quote:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/Images/LandingPage/Testinomial/TestinomialDots.png",
      company: "NextWare",
    },
  ];
  return (
    <div className="w-full py-[6.25rem] pl-[6.188rem] pr-[3.25rem] h-[100vh] bg-[#0D0D0D] text-white text-4xl flex items-center justify-center relative z-20">
      <div className="flex w-full h-full items-center justify-between">
        <div className="w-[30%] relative">
          <img
            className="absolute top-[-3.4rem] left-[-3rem] w-[6rem] md:w-[7.438rem] h-[6rem] md:h-[6.938rem] object-contain z-0"
            src="/Images/LandingPage/Testinomial/TestinomialDots.png"
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
          <div style={{ boxShadow: 'rgb(66, 135, 245) 0px 0px 13px 0px' }}
            className="w-[20.125rem] h-[27.5rem] rounded-[2.5rem] px-[1.563rem] py-[1.675rem] text-white border border-[0.25rem] border-[#4285F4]">
            <div className="flex items-center gap-[0.625rem] pb-[2.438rem]">
              <div className="w-[3.688rem] h-[3.688rem] rounded-full bg-white" />
              <div className='flex flex-col gap-[0.625rem]'>
                <div className="interFont text-[#E3E3E3] text-[1.25rem] font-semibold leading-[1.2rem]">
                  {testimonials[activeIndex].name}
                </div>
                <div className="interFont text-[#E3E3E3] text-[1rem] font-normal leading-[1.2rem]">
                  {testimonials[activeIndex].company}
                </div>
              </div>
            </div>

            <div className="relative pl-[1.438rem] text-base leading-relaxed">
              <div className="absolute -top-4 -left-2 text-blue-500 text-3xl font-serif">
                <img className='w-[1.938rem] h-[1.438rem] object-contain' src="/Images/LandingPage/Testinomial/quotes.png" alt="Testinomial_Quotes" />
              </div>
              <p className='interFont text-[#E3E3E3] font-normal text-[1rem] leading-[1.3rem] tracking-[0.00em]'>{testimonials[activeIndex].quote}</p>
            </div>
          </div>

          {/* Right side - List of testimonial tabs */}
          <div className=" flex gap-[1.125rem]">
            {testimonials.map((t, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative h-[100%] cursor-pointer w-[5.125rem] flex flex-col items-center justify-end rounded-[2.5rem] border border-[0.25rem] border-[#4285F4] transition-all duration-300
               ${index === activeIndex ? "" : ""}`}
              >
                <div className='absolute top-[10rem]'> 
                <div className="interFont font-semibold font-[1.25rem] leading-[1.2rem]  text-white rotate-[-90deg] whitespace-nowrap">
                  {t.name}
                </div>
                </div>
                <div className="w-[3.688rem] h-[3.688rem] mx-[0.75rem] my-[0.50rem] rounded-full bg-white" />
              </button>
            ))}
          </div>


        </div>
      </div>
    </div>
  );
}
