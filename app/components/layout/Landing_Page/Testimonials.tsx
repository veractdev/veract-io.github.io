'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

export default function Testimonials() {

  const [isActive, setActive] = useState(false);

  return (
    <div className='flex flex-row items-center justify-center gap-[2.75rem] p-[12.813rem_3.188rem_7.813rem_6.25rem]'>
      <div className='SyneFont flex flex-col items-center justify-center gap-[0.625rem] text-[5rem] font-semibold leading-[1.2em] relative'>
        <img src="/Images/LandingPage/Testimonial/TestimonialDots.png" alt="quote image" className='absolute -top-[13.188rem] -left-[2.438rem]' />
        <div className='text-transparent bg-clip-text' style={{ backgroundImage: 'linear-gradient(0deg, rgb(156, 156, 161) 48%, rgba(250, 250, 250, 0) 100%)' }}>What</div>
        <div className='text-transparent bg-clip-text' style={{ backgroundImage: 'linear-gradient(0deg, rgb(184, 184, 184) 100%, rgba(250, 250, 250, 0) 100%)' }}>our</div>
        <div className='text-transparent bg-clip-text' style={{ backgroundImage: 'linear-gradient(97deg, rgb(66, 133, 244) 24%, rgba(255, 255, 255, 0.63) 100%)' }}>Clients</div>
        <div className='interFont text-[#E3E3E3]'>Say?</div>
      </div>
      <div className='flex flex-row items-center justify-center gap-[1.125rem]'>
        <motion.div
          layout
          // onMouseEnter={() => setActive(true)}
          // onMouseLeave={() => setActive(false)}
          animate={{ width: isActive ? '19.625rem' : '5.125rem' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='h-[27.5rem] rounded-[2.5rem] border-[0.25rem] border-[#4285F4] shadow-[0px_0px_13px_0px_#4287F5] flex flex-col items-center justify-start gap-[2.375rem] py-[1.625rem] relative'
        >
          {/* <img src="/Images/LandingPage/Testimonial/quotes.png" alt="testimonial quote" className='w-[1.938rem] h-[1.438rem] absolute top-[6.688rem] left-[0.875rem]' /> */}
          <div className='w-full flex flex-row items-center justify-center gap-[0.625rem] pl-[1.313rem]'>
            <img src="/Images/LandingPage/Testimonial/testimonial_profile.png" alt="profile image" className='w-[3.688rem] h-[3.688rem] rounded-full' />
            <div className='w-full flex flex-col items-start justify-center gap-[0.625rem]'>
              <div className='interFont text-[1.25rem] text-[#E3E3E3] font-semibold leading-[1.2em]'>Hare Priya Rajendran</div>
              <div className='interFont text-[1.125rem] text-[#E3E3E3] font-normal leading-[1.2em]'>Geeraj Business Solution</div>
            </div>
          </div>
          {/* <div className='px-[2.875rem_1.375rem] interFont text-[1rem] text-[#E3E3E3] font-normal leading-[1.3em]'>
            I am amazed the way Veract took the initial discussion of our HRMS product MyTrackie. They swiftly got into the details and educated me wherever required. Really thrilled to work with Veract for the software upgrades of our product. I would certainly recommend Veract for product development and technical consulting.
          </div> */}
        </motion.div>
      </div>
    </div>
  )
}
