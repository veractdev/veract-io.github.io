'use client'
import { CaretDown } from 'phosphor-react';
import React, { useEffect, useState } from 'react';

export default function FAQ() {

    const [loaded, setLoaded] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        loaded && (
            <div className='w-full h-max flex flex-col items-center relative z-50 bg-primary-text py-[6.25rem_3.125rem] gap-[3.75rem]'>
                <img src="/Images/LandingPage/FAQ/Lines.png" alt="FAQ background overlay" className='absolute top-0 left-0 z-0 w-full h-full object-cover' />
                <div className='z-1 syneFont text-[1.875rem] text-white font-semibold leading-[1.2em] -tracking-[0.05em] text-center'>Curious? Check our FAQs</div>
                <div className='z-1 w-[calc(100%-18.75rem)] flex flex-col gap-[0.625rem]'>
                    <div
                        className='w-full p-[1.5rem] flex flex-col gap-[1.625rem] rounded-[1.25rem] shadow-[0px_0px_0px_1px_#FFFFFF4D_inset]'
                        onClick={() => {
                            setOpen(!open)
                        }}
                    >
                        <div className='flex flex-row items-center justify-between'>
                            <div className='syneFont text-[1.125rem] text-[#FFFFFF] font-medium leading-[50%] -tracking-[0.05em]'>What does Veract.io do?</div>
                            <CaretDown size={28} weight='regular' className='text-white' />
                        </div>
                        {open && (
                            <div className='interFont text-[0.938rem] text-[#FFFFFFCC] font-light leading-[1.5em]'>
                                Veract.io helps businesses modernize and automate operations using AI, machine vision, IoT systems, and custom software solutions.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    )
}
