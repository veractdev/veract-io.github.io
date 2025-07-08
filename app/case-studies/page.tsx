"use client"
import React, { useState } from 'react'
import LenisProvider from '../LenisProvider'

export default function Page() {

    const caseStudiesTitleList = [
        { id: 1, name: "Audio video" },
        { id: 2, name: "Accessibility" },
        { id: 3, name: "Chat bot" },
        { id: 4, name: "Ed Tech" },
        { id: 5, name: "Machine Vision" },
        { id: 6, name: "Wellness" },
        { id: 7, name: "Industry Platform" },
        { id: 8, name: "Manufacturing" },
        { id: 9, name: "Agri Tech" },
        { id: 10, name: "Ecommerce" },
        { id: 11, name: "Sales" },
        { id: 12, name: "Audit" },
        { id: 13, name: "Fintech" },
        { id: 14, name: "Thermal Vision" },
        { id: 15, name: "Accessibility" }
    ]

    const caseStudiesList = [
        {
            id: 1,
            image: '/Images/case-studies/project_image.png',
            header: 'Client Name',
            subHeader: 'project title'
        }
    ]
    const [activeTile, setActiveTile] = useState<string>('');

    return (
        <LenisProvider>
            <div className='w-full flex flex-col overflow-y-scroll bg-primary-text select-none'>
                <div className='w-full py-[15.25rem_22.5rem] px-[3.125rem] bg-red-300 relative'>
                    <div className='w-full absolute top-[15.25rem] left-[3.125rem] flex flex-col gap-[0.625rem] items-start justify-center'>
                        <div className='syneFont text-[6rem] gradient-text font-bold leading-[1em] -tracking-[0.05em]'>Page Heading</div>
                        <div className='max-w-1/2 interFont text-[1.25rem] text-white font-light leading-[1.5em] -tracking-[0.02em]'>Join us on a journey where ideas transform into captivating video content, with a dash of creativity and a whole lot of fun.</div>
                    </div>
                    <div className='absolute top-[90%] -left-[1.5rem] flex flex-row gap-[1rem] items-center justify-center transform rotate-90'>
                        <div className='uppercase interFont text-[0.875rem] text-white font-light leading-[1.5em] -tracking-[0.02em]'>Scroll</div>
                        <div className="h-full bg-gradient-to-r from-blue-500 to-pink-500 animate-grow-line" />
                    </div>
                </div>
                <div className='w-full flex flex-row flex-wrap p-[3.125rem] items-center justify-center gap-[0.5rem]'>
                    {caseStudiesTitleList.map((item) => (
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
                <div className='flex flex-row items-center gap-[1.5rem] px-[3.125rem]'>
                    <div className='flex flex-col items-center justify-center gap-[1.375rem] p-[0.625rem_0.625rem_1.75rem_0.625rem] cursor-pointer'>
                        <img src="/Images/case-studies/project_image.png" alt="project image" className='w-[25rem] h-[14.75rem] rounded-[0.875rem]' />
                        <div className='flex flex-col w-full flex-wrap pl-[1.25rem]'>
                            <div className='uppercase text-left syneFont text-[1.5rem] text-white font-semibold leading-[2em]'>client name</div>
                            <div className='uppercase text-left interFont text-[0.875rem] text-[#71717A] font-medium leading-[150%] -tracking-[0.05em]'>project title</div>
                        </div>
                    </div>
                </div>
            </div>
        </LenisProvider>
    )
}

// ${activeTile === item.name ? "text-[#FF7A3B] bg-[#FF7A3B]/20 shadow-[0_0_0_1px_#FF7A3B_inset] border-[#FF7A3B]" : ""}