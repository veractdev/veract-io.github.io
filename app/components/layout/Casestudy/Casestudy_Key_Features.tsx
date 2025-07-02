'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { isMobile, isTablet } from '@/lib/utils'

type key_features_props = {
  title: string;
  key_features_list: {
    number: string;
    title: string;
    img: string;
    desc: string;
  }[];
}
export default function Casestudy_Key_Features({ key_features_props }: { key_features_props: key_features_props }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    loaded && (
      <div className="z-1 lg:w-[68.75rem] md:w-[44.375rem] w-full py-[3.563rem] flex flex-col lg:px-[1.875rem] px-[1.25rem] bg-[#FFFFFF] geistFont mb-[4.5rem] md:mb-[6.25rem] lg:mb-[8.438rem] lg:mt-[8.438rem]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="text-left text-[#868586] font-semibold text-[1rem] leading-[1.4em] geistFont">{key_features_props.title}</div>
        </motion.div>
        <div className="flex flex-col lg:w-[65rem] w-full">
          {key_features_props.key_features_list.map((feature, idx) =>
            <motion.div
              key={feature.number}
              className="group relative flex lg:flex-row md:flex-col flex-col lg:items-center items-start md:py-[1.875rem] py-[3.125rem] lg:opacity-60 hover:!opacity-100 border-b-[0.063rem] border-[#282828] lg:gap-0 gap-[0.938rem]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: isMobile() || isTablet() ? 1 : 0.6, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx === 0 ? 0.15 : idx * 0.15, }}
            >
              <div className="pr-[1.625rem] text-orange text-[1.125rem] font-medium interFont leading-[1.4em]">{feature.number}</div>
              <div className="lg:w-[30.5rem] w-full ls:text-[2.5rem] text-[1.75rem] lg:mr-[16.875rem] lg:pr-[9rem] text-primary-text font-medium leading-[1.2em] geistFont">{feature.title}</div>
              <div className="absolute right-[18rem] top-[-7rem] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-rotate-15 p-[1.25rem] backdrop-blur-[0.625rem]">
                <img src={feature.img} className="w-[17.5rem] h-[19.063rem]" alt='Feature Image' />
              </div>
              <div className="lg:w-[13.313rem] lg:pl-[1.25rem] text-[#282828] interFont text-[0.875rem] font-medium leading-[1.4em]">{feature.desc}</div>
            </motion.div>
          )}
        </div>
      </div>
    )
  )
}