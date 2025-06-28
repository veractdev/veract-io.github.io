import React from 'react'

export default function CaseStudy_Challenges() {
    return (
        <div className='w-full h-max flex flex-row items-start justify-center p-[4rem_0_0.125rem_0] relative z-50 bg-[#0d0d0d]'>
            <div className='flex flex-col items-start justify-center gap-[2.5rem]'>
                <div
                    className='geistFont text-[1rem] text-[#868586] font-semibold tracking-[0em] uppercase leading-[1.4em]'
                >
                    Challenges & Goals
                </div>
                <div
                    className='w-[20.375rem] h-[18.125rem] rounded-[0.313rem] backdrop-blur-[0.625rem] border border-[#282828] p-[1.25rem]'
                >
                    <div className='w-full h-full bg-red-300' />
                </div>
            </div>
            <div className='relative w-[45.313rem]'>
                <div className='w-full interFont text-[3.75rem] text-[#FFFFFF] opacity-[0.1] font-extrabold leading-[1em] tracking-[0em] uppercase text-right'>Bottleneck</div>
                <div className='flex flex-row items-center justify-between'>
                    <div className='w-full basis-[13%] opacity-0'>TEXT</div>
                    <div
                        className='w-[45.313rem] h-max py-[1.25rem_3.125rem] text-[3rem] text-white font-medium leading-[1.2em] tracking-[0]'
                    >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Designing an integrated system that connects thermal cameras and IoT devices to monitor
                        <span className='text-[#868586]'>{' '}livestock health with accuracy, reliability, and real-time insights.</span>
                    </div>
                </div>
                <div className='flex flex-row gap-[3.125rem] ml-[13%] items-center justify-center'>
                    <div className='flex flex-col gap-[1.25rem] items-center justify-center'>
                        <div className='flex flex-row items-center justify-center gap-[.75rem]'>
                            <img src="/Images/case-studies/challenges_lisiting_icon.png" alt="placeholder image" />
                            <div className='interFont text-[1.125rem] font-medium text-white tracking-[-0.02em] leading-[1.5em]'>Enable Seamless Communication</div>
                        </div>
                        <div className='flex flex-row items-center justify-center gap-[.75rem]'>
                            <img src="/Images/case-studies/challenges_lisiting_icon.png" alt="placeholder image" />
                            <div className='interFont text-[1.125rem] font-medium text-white tracking-[-0.02em] leading-[1.5em]'>Enable Seamless Communication</div>
                        </div>
                        <div className='flex flex-row items-center justify-center gap-[.75rem]'>
                            <img src="/Images/case-studies/challenges_lisiting_icon.png" alt="placeholder image" />
                            <div className='interFont text-[1.125rem] font-medium text-white tracking-[-0.02em] leading-[1.5em]'>Enable Seamless Communication</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[1.25rem] items-center justify-center'>
                    <div className='flex flex-row items-center justify-center gap-[.75rem]'>
                            <img src="/Images/case-studies/challenges_lisiting_icon.png" alt="placeholder image" />
                            <div className='interFont text-[1.125rem] font-medium text-white tracking-[-0.02em] leading-[1.5em]'>Enable Seamless Communication</div>
                        </div>
                        <div className='flex flex-row items-center justify-center gap-[.75rem]'>
                            <img src="/Images/case-studies/challenges_lisiting_icon.png" alt="placeholder image" />
                            <div className='interFont text-[1.125rem] font-medium text-white tracking-[-0.02em] leading-[1.5em]'>Enable Seamless Communication</div>
                        </div>
                        <div className='flex flex-row items-center justify-center gap-[.75rem]'>
                            <img src="/Images/case-studies/challenges_lisiting_icon.png" alt="placeholder image" />
                            <div className='interFont text-[1.125rem] font-medium text-white tracking-[-0.02em] leading-[1.5em]'>Enable Seamless Communication</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
