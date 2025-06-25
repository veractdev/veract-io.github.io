'use client'
import React, { useEffect, useState } from 'react'

export default function Casestudy_Banner() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Max out the scaling effect at 300px scroll (adjust as needed)
      const maxScroll = 300
      const scaleFactor = Math.max(0.85, 1 - scrollY / maxScroll / 2) // limits scaling to 0.85
      setScale(scaleFactor)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const overlayScroll = () => {
    window.addEventListener('scroll', () => {
      const overlay = document.getElementById('overlay');
      if (overlay) {
        overlay.style.height = `${window.scrollY}%`;
        overlay.style.maxHeight = '15%';
        overlay.style.transition = 'all 0.3s ease';
      }
    })
  }

  useEffect(() => {
    overlayScroll();
  })

  return (
    <>
      <div id='overlay' className='fixed z-10 top-0 left-0 w-full h-0 bg-black' />
      <div
        id='casestudy-banner-container'
        style={{ transform: `scale(${scale})`, transition: 'transform 0.05s linear' }}
        className='w-full py-[18.75rem_18.688rem] flex flex-col gap-[.625rem] items-center justify-center bg-red-300'
      >
        <div className='w-[calc(100%-6.25rem)] syneFont text-[4.375rem] text-white leading-[1em] tracking-[-0.05em] font-bold text-center'>
          Enhancing Animal Health with Thermography
        </div>
        <div className='w-[37.5rem] interFont text-white text-[1.063rem] leading-[1.5em] tracking-[-0.02em] font-normal text-center'>
          A reliable, stress-free method for monitoring livestock health and preventing disease outbreaks.
        </div>
      </div>
    </>
  )
}
