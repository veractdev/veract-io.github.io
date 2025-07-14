'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Agent_Footer() {
    const router = useRouter();
    return (
        <div className='relative w-[calc(100%-3.75rem)] md:w-[41.75rem] lg:w-[60rem] h-max p-[1.875rem] md:p-[3.125rem] flex flex-col items-center justify-center gap-[1.875rem] rounded-[1.25rem] bg-transparent shadow-[0px_0px_0px_1px_#FFFFFF12_inset]'>
            {/* <video
                autoPlay
                controls={false}
                playsInline
                loop
                muted
                className='absolute top-0 left-0 w-full h-full'
            >
                <source src="/Images/Agent/Agent_Footer.mp4" type="video/mp4" />
            </video> */}
            <div className='relative flex flex-row p-[0.375rem_0.875rem] items-center justify-center gap-[0.625rem] rounded-[0.625rem] shadow-[0px_0px_0px_1px_#FFFFFF0D_inset] backdrop-blur-[2.5] agentFooterTitle'>
                <div className="absolute top-0 w-[61px] h-[1px] bg-[linear-gradient(90deg,rgba(66,133,244,0)_0%,#4285F4_50%,rgba(66,133,244,0)_100%)]"></div>
                <div className='w-[0.313rem] h-[0.313rem] rounded-full bg-white' />
                <div className='dmSansFont text-[1rem] agentFooterTitleColor font-normal leading-[1.625rem] -tracking-[0.031rem]'>Custom AI Agent</div>
            </div>
            <div className='flex flex-col items-center justify-center dmSansFont text-[2.25rem] font-normal leading-[3.125rem] -tracking-[0.119rem]'>
                <div className='text-white text-center'>Is Your Business Ready</div>
                <div className='text-[#FFFFFF]/60 text-center'>for the Future of Work?</div>
            </div>
            <div className='dmSansFont w-full md:w-[32.5rem] text-[1rem] text-[#FFFFFF]/60 font-normal leading-[1.625rem] -tracking-[0.013rem] text-center'>Step into a new era of intelligent automation. Transform operations with AI agents that grow with you.</div>
            <div
                onClick={() => {
                    router.push('/');
                }}
                className='p-[0.625rem_1.125rem] bg-primary-blue rounded-[0.625rem] page-not-found-CTA-boxShadow dmSansFont text-[1rem] text-white font-medium leading-[1.625rem] -tracking-[0.031rem] cursor-pointer'
            >
                Book a Free Consultation
            </div>
        </div>
    )
}