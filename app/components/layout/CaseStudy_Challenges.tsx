import React from 'react'

export default function CaseStudy_Challenges() {

    const challenges = [
        {
            id: 1,
            title: 'Enable Seamless Communication',
        },
        {
            id: 2,
            title: 'Enable Seamless Communication',
        },
        {
            id: 3,
            title: 'Enable Seamless Communication',
        },
        {
            id: 4,
            title: 'Enable Seamless Communication',
        },
        {
            id: 5,
            title: 'Enable Seamless Communication',
        },
        {
            id: 6,
            title: 'Enable Seamless Communication',
        },
    ]
    return (
        <div className='w-full h-max flex flex-col lg:flex-row items-start justify-center md:gap-[3.125rem] p-[4.5rem_1.25rem_0_1.25rem] md:p-[10.25rem_3.25rem_0_3.25rem] lg:p-[4rem_0_0.125rem_0] relative z-50 bg-[#0d0d0d]'>
            <div className='w-full lg:w-auto flex flex-col items-start justify-center gap-[1.875rem] md:gap-[2.5rem]'>
                <div
                    className='geistFont text-[0.875rem] md:text-[1rem] text-[#868586] font-semibold tracking-[0em] uppercase leading-[1.4em]'
                >
                    Challenges & Goals
                </div>
                <div
                    className='w-full h-[16.875rem] md:h-[22.5rem] lg:w-[20.375rem] lg:h-[18.125rem] rounded-[0.313rem] backdrop-blur-[0.625rem] border border-[#282828] p-[0.625rem] md:p-[1.25rem]'
                >
                    <div className='w-full h-full bg-red-300' />
                </div>
            </div>
            <div className='relative w-full lg:w-[45.313rem]'>
                <div className='hidden md:block lg:blockw-full interFont text-[3.75rem] text-[#FFFFFF] opacity-[0.1] font-extrabold leading-[1em] tracking-[0em] uppercase text-right'>Bottleneck</div>
                <div className='flex flex-row items-center justify-between'>
                    <div className='hidden lg:block w-full basis-[13%] opacity-0'>TEXT</div>
                    <div
                        className='w-full lg:w-[45.313rem] h-max py-[2.5rem] md:py-[1.25rem_3.125rem] lg:py-[1.25rem_3.125rem] text-[1.5rem] md:text-[2.375rem] lg:text-[3rem] text-white font-medium leading-[1.2em] tracking-[0]'
                    >
                        <span className='hidden lg:inline-flex geistFont md:interFont lg:interFont w-[7rem] opacity-0'>Text</span>Designing an integrated system that connects thermal cameras and IoT devices to monitor
                        <span className='text-[#868586]'>{' '}livestock health with accuracy, reliability, and real-time insights.</span>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row gap-[0.625rem] md:gap-[3.125rem] lg:gap-[3.125rem] ml-0 lg:ml-[13%] items-start md:items-center justify-center md:justify-between lg:items-center'>
                    <div className='flex flex-col gap-[0.625rem] md:gap-[1.25rem] items-start md:items-center lg:items-center justify-center'>
                        {challenges.slice(0, 3).map((challenge, index) => (
                            <div key={index} className='flex flex-row items-center justify-center gap-[.875rem]'>
                                <img src="/Images/case-studies/challenges_lisiting_icon.png" alt="placeholder image" />
                                <div className='interFont text-[1.125rem] font-medium text-white tracking-[-0.02em] leading-[1.5em]'>{challenge.title}</div>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col gap-[0.625rem] md:gap-[1.25rem] items-start md:items-center lg:items-center justify-center'>
                        {challenges.slice(3, 6).map((challenge, index) => (
                            <div key={index} className='flex flex-row items-center justify-center gap-[.875rem]'>
                                <img src="/Images/case-studies/challenges_lisiting_icon.png" alt="placeholder image" />
                                <div className='interFont text-[1.125rem] font-medium text-white tracking-[-0.02em] leading-[1.5em]'>{challenge.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
