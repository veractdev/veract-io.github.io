"use client"
import React, { useState } from 'react'
import LenisProvider from '../LenisProvider'
import { useRouter } from 'next/navigation';
import { caseStudiesHomePageData } from '@/lib/custom_data';

export default function Page() {

    const router = useRouter();     
    const [activeTile, setActiveTile] = useState<string>('');

    return (
        <LenisProvider>
            <div className='w-full flex flex-col overflow-y-scroll bg-primary-text select-none'>
                <div className='w-full h-[100vh] md:h-max flex flex-col items-center justify-center py-0 md:py-[15.25rem_22.5rem] px-[3.125rem] bg-red-300 relative'>
                    <div className='w-full absolute md:static top-[15.25rem] left-[3.125rem] flex flex-wrap flex-col gap-[0.625rem] items-start justify-center'>
                        <div className='syneFont text-[6rem] gradient-text font-bold leading-[1em] -tracking-[0.05em]'>{caseStudiesHomePageData.header}</div>
                        <div className='max-w-1/2 md:max-w-full interFont text-[1.25rem] text-white font-light leading-[1.5em] -tracking-[0.02em]'>{caseStudiesHomePageData.subHeader}</div>
                    </div>
                    <div className='absolute top-[90%] -left-[1.5rem] flex flex-row gap-[1rem] items-center justify-center transform rotate-90'>
                        <div className='uppercase interFont text-[0.875rem] text-white font-light leading-[1.5em] -tracking-[0.02em]'>Scroll</div>
                        <div className="h-full bg-white animate-grow-line" />
                    </div>
                </div>
                <div className='w-full flex flex-row flex-wrap p-[3.125rem] items-center justify-center gap-[0.5rem]'>
                    {caseStudiesHomePageData.caseStudiesTitleList.map((item) => (
                        <div
                            key={item.id}
                            className={`syneFont p-[0.625rem_1.25rem] rounded-[2rem] text-[1rem] font-normal leading-[1.2] hover:bg-[#FF7A3B]/20 border-[1px]  hover:border-[#FF7A3B] hover:shadow-[0px_6px_12px_0px_#FF7A3B40] cursor-pointer transition-all duration-300 easeTransition ${activeTile === item.name ? 'border-[#FF7A3B] shadow-none bg-[#FF7A3B]/20 text-[#FF7A3B]' : 'border-[#FFFFFF]/50 bg-[#FFFFFF]/4 text-white hover:text-[#FF7A3B]'} `}
                            onClick={() => {
                                setActiveTile(item.name)
                            }}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
                <div className='flex flex-row flex-wrap items-center gap-[1.5rem] px-[3.125rem]'>
                    {caseStudiesHomePageData.caseStudiesList.map((item) => (
                        <div
                            key={item.id}
                            className='flex flex-col items-center justify-center gap-[1.375rem] p-[0.625rem_0.625rem_1.75rem_0.625rem] cursor-pointer'
                            onClick={() => {
                                router.push(item.routeTo)
                            }}
                        >
                            <img src={item.image} alt="project image" className='w-[25rem] h-[14.75rem] rounded-[0.875rem]' />
                            <div className='flex flex-col w-full flex-wrap pl-[1.25rem]'>
                                <div className='uppercase text-left syneFont text-[1.5rem] text-white font-semibold leading-[2em]'>{item.header}</div>
                                <div className='uppercase text-left interFont text-[0.875rem] text-[#71717A] font-medium leading-[150%] -tracking-[0.05em]'>{item.subHeader}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </LenisProvider>
    )
}

// ${activeTile === item.name ? "text-[#FF7A3B] bg-[#FF7A3B]/20 shadow-[0_0_0_1px_#FF7A3B_inset] border-[#FF7A3B]" : ""}