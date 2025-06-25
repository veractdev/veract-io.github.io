'use client'
import React, { useEffect, useState } from 'react'

export default function Casestudy_Banner() {
  // const [scale, setScale] = useState(1)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY
  //     // Max out the scaling effect at 300px scroll (adjust as needed)
  //     const maxScroll = 300
  //     const scaleFactor = Math.max(0.85, 1 - scrollY / maxScroll / 2) // limits scaling to 0.35
  //     setScale(scaleFactor)
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  const [translateY, setTranslateY] = useState<number>();
  const [rotateX, setRotateX] = useState<number>();
  const [scale, setScale] = useState<number>();

  useEffect(() => {
    const handleScroll = () => {
      setTranslateY(window.scrollY/2.5);
      setRotateX(window.scrollY/20);
      setScale(Math.max(0.85, (1 - window.scrollY / 300 / 2)*100))
    }
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id='casestudy-banner-container'
      // style={{ transform: `scale(${scale})` }}
      style={{
        // transform: `translateY(-${(translateY)}px) rotateX(${rotateX}deg) scale(${scale}%) opacity(${scale})`
      }}
      // py-[18.75rem_18.688rem]
      className='w-full h-[100vh] flex flex-col gap-[.625rem] items-center justify-center transform-3d perspective-[1200px]'
    >
      <div className='w-[calc(100%-6.25rem)] syneFont text-[4.375rem] text-white leading-[1em] tracking-[-0.05em] font-bold text-center'>
        Enhancing Animal Health with Thermography
      </div>
      <div className='w-[37.5rem] interFont text-white text-[1.063rem] leading-[1.5em] tracking-[-0.02em] font-normal text-center'>
        A reliable, stress-free method for monitoring livestock health and preventing disease outbreaks.
      </div>
    </div>
  )
}
