'use client'
import React, { useEffect, useState } from 'react'

type challenges_props = {
    title: string;
    video: string;
    challenge_description: string;
    challenge_solution: string;
    challenge_solution_highlighted: string;
    solution_list: {
        id: number;
        title: string;
    }[];
}

export default function CaseStudy_Challenges({ challenges_props }: { challenges_props: challenges_props }) {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        loaded && (
            <div className='w-full h-max flex flex-col lg:flex-row items-start justify-center md:gap-[3.125rem] p-[4.5rem_1.25rem_0_1.25rem] md:p-[10.25rem_3.25rem_0_3.25rem] lg:p-[4rem_0_0.125rem_0] relative z-50 bg-primary-text'>
                <div className='w-full lg:w-auto flex flex-col items-start justify-center gap-[1.875rem] md:gap-[2.5rem]'>
                    <div
                        className='geistFont text-[0.875rem] md:text-[1rem] text-[#868586] font-semibold tracking-[0em] uppercase leading-[1.4em]'
                    >
                        {challenges_props.title}
                    </div>
                    <div
                        className='w-full h-[16.875rem] md:h-[22.5rem] lg:w-[20.375rem] lg:h-[18.125rem] rounded-[0.313rem] backdrop-blur-[0.625rem] border border-[#282828] p-[0.625rem] md:p-[1.25rem]'
                    >
                        {/* <div className='w-full h-full bg-red-300' /> */}
                        <video src={challenges_props.video} autoPlay loop controls={true} className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='relative w-full lg:w-[45.313rem]'>
                    <div className='hidden md:block lg:blockw-full interFont text-[3.75rem] text-white opacity-[0.1] font-extrabold leading-[1em] tracking-[0em] uppercase text-right'>{challenges_props.challenge_description}</div>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='hidden lg:block w-full basis-[13%] opacity-0'>TEXT</div>
                        <div
                            className='w-full lg:w-[45.313rem] h-max py-[2.5rem] md:py-[1.25rem_3.125rem] lg:py-[1.25rem_3.125rem] text-[1.5rem] md:text-[2.375rem] lg:text-[3rem] text-white font-medium leading-[1.2em] tracking-[0]'
                        >
                            <span className='hidden lg:inline-flex geistFont md:interFont lg:interFont w-[7rem] opacity-0'>Text</span>{challenges_props.challenge_solution}
                            <span className='text-[#868586]'>{' '}{challenges_props.challenge_solution_highlighted}</span>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row lg:flex-row gap-[0.625rem] md:gap-[3.125rem] lg:gap-[2.125rem] ml-0 lg:ml-[11.5%] items-start md:items-center justify-center md:justify-between lg:items-center'>
                        <div className='flex flex-col gap-[0.625rem] md:gap-[1.25rem] items-start justify-center'>
                            {challenges_props.solution_list.slice(0, 3).map((challenge, index) => (
                                <div key={index} className='flex flex-row items-center justify-center gap-[.875rem]'>
                                    <img src="/Images/case-studies/challenges_lisiting_icon.png" alt="placeholder image" className='w-[1.25rem] h-[1.25rem] md:w-[1.375rem] md:h-[1.375rem] lg:w-[1.563rem] lg:h-[1.563rem]' />
                                    <div className='interFont text-[1rem] md:text-[0.875rem] lg:text-[1.125rem] font-medium text-white tracking-[-0.02em] leading-[1.4em] lg:leading-[1.5em]'>{challenge.title}</div>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col gap-[0.625rem] md:gap-[1.25rem] items-start justify-center'>
                            {challenges_props.solution_list.slice(3, 6).map((challenge, index) => (
                                <div key={index} className='flex flex-row items-center justify-center gap-[.875rem]'>
                                    <img src="/Images/case-studies/challenges_lisiting_icon.png" alt="placeholder image" className='w-[1.25rem] h-[1.25rem] md:w-[1.375rem] md:h-[1.375rem] lg:w-[1.563rem] lg:h-[1.563rem]' />
                                    <div className='interFont text-[1rem] md:text-[0.875rem] lg:text-[1.125rem] font-medium text-white tracking-[-0.02em] leading-[1.4em] lg:leading-[1.5em]'>{challenge.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}
