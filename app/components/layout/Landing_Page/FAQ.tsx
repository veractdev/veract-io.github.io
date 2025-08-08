'use client'
import { CaretDown } from 'phosphor-react';
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQProps {
    title: string;
    faq_list: {
        id: number;
        title: string;
        content: string;
    }[];
}

export default function FAQ({ faq_props }: { faq_props: FAQProps }) {

    const [loaded, setLoaded] = useState(false);
    const [active, setActive] = useState<number[]>([]);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        loaded && (
            <div className='w-full h-max flex flex-col items-center relative z-50 bg-primary-text p-[3.125rem_3.125rem_6.25rem_3.125rem] gap-[3.75rem] faqBackgroundOverlay'>
                {/* <img src="/Images/LandingPage/FAQ/Lines.png" alt="FAQ background overlay" className='absolute top-0 left-0 z-0 w-full h-full object-cover' /> */}
                <div className='z-1 px-[4rem] md:px-[13.563rem] lg:px-0 lg:w-full syneFont text-[1.875rem] text-white font-semibold leading-[1.2em] -tracking-[0.05em] text-center'>{faq_props.title}</div>
                <div className='z-1 w-full lg:w-[calc(100%-21.875rem)] flex flex-col gap-[0.625rem]'>
                    {faq_props.faq_list.map((item) => (
                        <div
                            key={item.id}
                            className='group w-full p-[1.5rem] flex flex-col rounded-[1.25rem] shadow-[0px_0px_0px_1px_#FFFFFF4D_inset] cursor-pointer transition-all duration-300 backdrop-blur-[0.625rem] overflow-hidden'
                            onClick={() => {
                                if (!active.includes(item.id)) {
                                    setActive([...active, item.id])
                                }
                                else {
                                    setActive(active.filter(id => id !== item.id));
                                }
                            }}
                        >
                            <div className='reltive flex flex-row items-center justify-between'>
                                <motion.div
                                    className={`left-[-40%] top-[-70%] group-hover:left-[15%] rounded-[50%] absolute w-[723px] h-[121px] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,255,255,0.15)_0%,_rgba(0,0,0,0)_100%)] z-990 transition-all duration-300 ${active.includes(item.id) ? 'animate-active-faq-hover' : 'animate-faq-hover'}`} />
                                <div
                                    className={`syneFont w-full lg:w-[95%] text-[1.125rem] text-[#FFFFFF] font-medium leading-[150%] lg:-tracking-[0.05em] transition-all duration-300 ${active.includes(item.id) ? 'pl-0' : 'group-hover:pl-[1.25rem] group-hover:opacity-[0.67]'}`}
                                >
                                    {item.title}
                                </div>
                                <motion.div
                                    animate={{ rotate: active.includes(item.id) ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <CaretDown
                                        size={28}
                                        weight='regular'
                                        className={`${active.includes(item.id) ? 'text-white group-hover:text-primary-blue' : 'text-white group-hover:text-primary-blue'} transition-all duration-300`}
                                    />
                                </motion.div>
                            </div>
                            <AnimatePresence>
                                {active.includes(item.id) && (
                                    <motion.div
                                        ref={contentRef}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{
                                            height: "auto",
                                            opacity: 1
                                        }}
                                        exit={{
                                            height: 0,
                                            opacity: 0
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut"
                                        }}
                                        className='overflow-hidden'
                                    >
                                        <div className='interFont text-[0.938rem] text-[#FFFFFFCC] font-light leading-[1.5em] pt-[1.625rem]'>
                                            {item.content}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        )
    )
}
