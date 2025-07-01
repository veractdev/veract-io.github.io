'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Casestudy_Description() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPastTop, setIsPastTop] = useState(false)
  const [enableMotion, setEnableMotion] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const isLargeScreen = window.innerWidth >= 1024 // Tailwind's lg breakpoint
    setEnableMotion(isLargeScreen)

    const checkScroll = () => {
      if (!containerRef.current || !isLargeScreen) return
      const rect = containerRef.current.getBoundingClientRect()
      setIsPastTop(rect.top < 0)
    }

    checkScroll()
    window.addEventListener('scroll', checkScroll)
    window.addEventListener('resize', checkScroll)
    return () => {
      window.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    loaded && (
      <div
        ref={containerRef}
        className='w-full h-max p-[3.125rem_1.25rem] md:p-[6.25rem_3.125rem] bg-[#FFFFFF] relative z-50 flex lg:flex-row flex-col gap-[1.25rem] md:gap-[3.125rem] lg:gap-[0.625rem] items-start justify-center'
      >
        <motion.div
          initial={{ y: '0%' }}
          animate={{ y: enableMotion && isPastTop ? '250%' : '0%' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className='syneFont lg:min-w-[22.688rem] min-w-0 text-[1.875rem] text-black font-semibold leading-[1.2em] tracking-[-0.05em]'
        >
          A small glimpse
        </motion.div>

        <div className='interFont w-full text-[1.5rem] md:text-[1.75rem] lg:text-[2.25rem] text-primary-text-50 font-extralight leading-[1.2em] tracking-[-0.04em]'>
          A thermal imaging system for
          <span className='text-primary-text'> monitoring buffalo udder health</span> using
          <span className='text-orange'> infrared thermography</span>
          <span className='text-primary-text'> —</span>
          <span className='text-primary-text-70'>
            enabling early mastitis detection, temperature analysis, and session-based tracking
          </span>{' '}
          with offline support and seamless integration into veterinary workflows.
        </div>
      </div>
    )
  )
}
