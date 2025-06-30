import React from 'react'
import { motion } from 'framer-motion'
import { isMobile, isTablet } from '@/lib/utils'

const features = [
  {
    number: '[01]',
    title: 'Thermal Imaging Integration',
    img: '/Images/CaseStudies/Thermal/img1.jpg',
    desc: 'Enables precise monitoring of temperature variations to identify early signs of health issues.'
  },
  {
    number: '[02]',
    title: 'Real-Time Data Processing',
    img: '/Images/CaseStudies/Thermal/img1.jpg',
    desc: 'Enables precise monitoring of temperature variations to identify early signs of health issues.'
  },
  {
    number: '[03]',
    title: 'Camera & IoT Synchronization',
    img: '/Images/CaseStudies/Thermal/img1.jpg',
    desc: 'Enables precise monitoring of temperature variations to identify early signs of health issues.'
  },
  {
    number: '[04]',
    title: 'Low-Latency Data Transfer',
    img: '/Images/CaseStudies/Thermal/img1.jpg',
    desc: 'Enables precise monitoring of temperature variations to identify early signs of health issues.'
  },
  {
    number: '[05]',
    title: 'User-Friendly Desktop Interface',
    img: '/Images/CaseStudies/Thermal/img1.jpg',
    desc: 'Enables precise monitoring of temperature variations to identify early signs of health issues.'
  },
]

export default function Casestudy_Key_Features(){
    return(
        <div className="z-1 lg:w-[1100px] md:w-[710px] w-full py-[57px] flex flex-col lg:px-[30px] px-[20px] bg-white geistFont mb-[4.5rem] md:mb-[6.25rem] lg:mb-[8.438rem]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="text-left text-[#868586] font-semibold text-[1rem] leading-[1.4em] geistFont">KEY FEATURES</div>
          </motion.div>
        <div className="flex flex-col lg:w-[1040px] w-full">
          {features.map((feature, idx) =>
              <motion.div
                key={feature.number}
                className="group relative flex lg:flex-row md:flex-col flex-col lg:items-center items-start md:py-[30px] py-[50px] lg:opacity-60 hover:!opacity-100 border-b-[1px] border-[#282828] lg:gap-0 gap-[15px]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: isMobile() || isTablet() ? 1 :0.6, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx === 0 ? 0.15 : idx * 0.15, }}
              >
                <div className="pr-[26px] text-[#FF7A3B] text-[18px] font-medium interFont leading-[1.4em]">{feature.number}</div>
                <div className="lg:w-[488px] w-full ls:text-[40px] text-[28px] lg:mr-[270px] lg:pr-[9rem] text-[#0D0D0D] font-medium leading-[1.2em] geistFont">{feature.title}</div>
                <div className="absolute right-[18rem] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-rotate-15 p-[20px] backdrop-blur-[10px]">
                  <img src={feature.img} className="w-[280px] h-[305px]" alt='Feature Image'/>
                </div>
                <div className="lg:w-[213px] lg:pl-[20px] text-[#282828] interFont text-[14px] font-medium leading-[1.4em]">{feature.desc}</div>
              </motion.div>
          )}
        </div>
      </div>
    )
}