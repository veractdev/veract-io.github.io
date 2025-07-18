import { LandingPageData } from '@/lib/custom_data';
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

export default function Services() {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    },[])

    return (
        loaded &&
        <div id='services' className='w-full h-max bg-black overflow-x-hidden flex flex-col items-center justify-center relative z-50 py-[0_6.25rem] xl:px-[10%]'>
            <div className='w-full flex flex-col items-center justify-center gap-[0.625rem] py-[6.25rem_3.125rem] lg:py-[5.875rem_3.125rem]'>
                <div className='uppercase syneFont text-[2.5rem] text-white font-bold -tracking-[0.05rem] leading-[3.125rem]'>Our <span className='text-primary-blue'>Service</span></div>
                <div className='w-full lg:w-[50rem] px-[1.5rem] md:px-[4.375rem] lg:px-0 interFont text-[1.125rem] text-white font-normal leading-[1.8em] text-center'>Take a look at our handpicked case studies showcasing real-world tech solutions.A quick glimpse into the impact we create.</div>
            </div>
            <div className="flex flex-col w-full px-[1.5rem] md:px-[4.375rem] lg:px-[3.125rem] overflow-x-hidden">
                {LandingPageData.services.service_list.map((feature, idx) =>
                    <motion.div
                        layout
                        key={feature.number}
                        className="group relative flex lg:flex-row md:flex-col flex-col lg:items-center items-start py-[1.125rem] md:py-[1.875rem] lg:py-[3.125rem] border-b-[0.063rem] border-[#282828] lg:gap-0 gap-[0.938rem]"
                        // initial={{ y: 40 }}
                        // whileInView={{ y: 0 }}
                        // viewport={{ once: true, amount: 0.3 }}
                        // transition={{ duration: 0.6, delay: idx === 0 ? 0.15 : idx * 0.15, }}
                    >
                        <div className='flex flex-col lg:flex-row items-start justify-start gap-[0.938rem] lg:gap-[1.25rem]'>
                            <div className="interFont pt-0 lg:pt-[0.5rem] text-[1.125rem] text-white font-medium leading-[1.4em]">{feature.number}</div>
                            <div className="geistFont w-full lg:w-[30.5rem] text-[1.75rem] lg:text-[2.5rem] text-white font-medium leading-[1.2em]">{feature.title}</div>
                        </div>
                        <div className='w-full lg:w-[30rem] static pl-0 lg:pl-[1.25rem] lg:absolute right-0 transform lg:group-hover:delay-200 lg:translate-x-full lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 transition-all duration-300 ease-in-out interFont text-white text-[0.875rem] lg:text-[1.125rem] font-medium leading-[1.4em] flex flex-col'>
                            {feature.highlighted_desc.map((desc, idx) =>
                                <div key={idx} dangerouslySetInnerHTML={{ __html: desc }}></div>
                            )}
                        </div>
                        <div className="hidden lg:flex flex-col absolute right-0 group-hover:opacity-0 opacity-100 w-[30rem] transition-all duration-300 ease-in-out interFont lg:w-[13.313rem] lg:pl-[1.25rem] text-white text-[0.875rem] font-medium leading-[1.4em]">
                            {feature.desc.map((desc, idx) =>
                                <div key={idx}>{desc}</div>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    )
}
