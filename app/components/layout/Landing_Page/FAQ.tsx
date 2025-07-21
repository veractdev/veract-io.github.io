'use client'
import { CaretDown } from 'phosphor-react';
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {

    const [loaded, setLoaded] = useState(false);
    const [active, setActive] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setLoaded(true)
    }, [])

    const faq_items = [
        {
            id: 1,
            title: "What does Veract.io do?",
            content: "Veract.io helps businesses modernize and automate operations using AI, machine vision, IoT systems, and custom software solutions."
        },
        {
            id: 2,
            title: "What does Veract.io do?",
            content: "Veract.io helps businesses modernize and automate operations using AI, machine vision, IoT systems, and custom software solutions."
        },
        {
            id: 3,
            title: "What does Veract.io do?",
            content: "Veract.io helps businesses modernize and automate operations using AI, machine vision, IoT systems, and custom software solutions."
        },
        {
            id: 4,
            title: "What does Veract.io do?",
            content: "Veract.io helps businesses modernize and automate operations using AI, machine vision, IoT systems, and custom software solutions."
        },
        {
            id: 5,
            title: "What does Veract.io do?",
            content: "Veract.io helps businesses modernize and automate operations using AI, machine vision, IoT systems, and custom software solutions."
        },
    ]

    return (
        loaded && (
            <div className='w-full h-max flex flex-col items-center relative z-50 bg-primary-text py-[6.25rem_3.125rem] gap-[3.75rem]'>
                <img src="/Images/LandingPage/FAQ/Lines.png" alt="FAQ background overlay" className='absolute top-0 left-0 z-0 w-full h-full object-cover' />
                <div className='z-1 w-[80%] lg:w-full syneFont text-[1.875rem] text-white font-semibold leading-[1.2em] -tracking-[0.05em] text-center'>Curious? Check our FAQs</div>
                <div className='z-1 w-[80%] lg:w-[calc(100%-18.75rem)] flex flex-col gap-[0.625rem]'>
                    {faq_items.map((item) => (
                        <div
                            key={item.id}
                            className='group w-full p-[1.5rem] flex flex-col rounded-[1.25rem] shadow-[0px_0px_0px_1px_#FFFFFF4D_inset] cursor-pointer transition-all duration-300 backdrop-blur-[0.625rem]'
                            onClick={() => {
                                if (active != item.id) {
                                    setActive(item.id)
                                }
                                else {
                                    setActive(0);
                                }
                            }}
                        >
                            <div className='reltive flex flex-row items-center justify-between'>
                                <div
                                    className={`syneFont w-full lg:w-[95%] text-[1.125rem] text-[#FFFFFF] font-medium leading-[50%] -tracking-[0.05em] transition-all duration-300 ${active === item.id ? 'pl-0' : 'group-hover:pl-[1.25rem] group-hover:opacity-[0.67]'}`}
                                >
                                    {item.title}
                                </div>
                                <motion.div
                                    animate={{ rotate: active === item.id ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <CaretDown
                                        size={28}
                                        weight='regular'
                                        className={`${active === item.id ? 'text-white group-hover:text-[#095D5D]' : 'text-white group-hover:text-orange'} transition-all duration-300`}
                                    />
                                </motion.div>
                            </div>
                            <AnimatePresence>
                                {active === item.id && (
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
