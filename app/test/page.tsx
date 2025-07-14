'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function page() {
  const router = useRouter();
  return (
    <div className='w-full h-max bg-black p-[12.5rem_14.375rem_10rem_14.375rem] flex flex-col items-center'>
      <div className='p-[0.375rem_0.875rem_0.375rem_0.375rem] flex flex-row gap-[0.75rem] items-center justify-center shadow-[0px_0px_0px_1px_#FFFFFF0D_inset] rounded-[0.625rem] backdrop-blur-[0.625rem]'>
        <div className='uppercase p-[0.563rem_0.625rem] bg-[#0055FE] rounded-[0.375rem] shadow-[0px_0px_0px_2px_#FFFFFF26_inset] dmSansFont text-[0.75rem] text-white font-bold leading-[0.625rem] -tracking-[0.031rem]'>oops</div>
        <div className='dmSansFont text-[1rem] text-white font-normal leading-[1.625rem] -tracking-[0.031rem]'>Page Not Found</div>
      </div>
      <div className='flex flex-col items-center justify-center dmSansFont text-[5.375rem] text-white font-normal leading-[5.625rem] -tracking-[0.238rem] text-center'>
        <div>404 - Oops Page</div>
        <div>Not Found in Data.</div>
      </div>
      <div className='dmSansFont text-[1rem] text-[#FFFFFF]/60 font-normal leading-[1.625rem] -tracking-[0.013rem] text-center p-[0_15rem]'>Oops! The web page you’re looking for doesn’t exist. Please click the below button to get back to the home.</div>
      <div
        onClick={() => {
          router.push('/');
        }}
        className='p-[0.625rem_1.125rem] bg-primary-blue rounded-[0.625rem] page-not-found-CTA-boxShadow dmSansFont text-[1rem] text-white font-medium leading-[1.625rem] -tracking-[0.031rem]'
      >
        Back To Homepage
      </div>
    </div>
  )
}
