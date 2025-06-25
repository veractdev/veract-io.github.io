'use client'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

export default function Casestudy_Banner() {

  const [translateY, setTranslateY] = useState<number>(0);
  const [rotateX, setRotateX] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setTranslateY(scrollY / 2.5);
      setRotateX(Math.min(scrollY / 10, 20)); 
      setScale(Math.max(0.83, 1 - scrollY / 600 / 2));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textContainerRef,
    offset: ['start end', 'end start'],
  });

  // const rawScale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  // const scale = useSpring(rawScale, {
  //   stiffness: 100,
  //   damping: 20,
  // });

  return (
    <div
      ref={textContainerRef}
      className="fixed top-0 w-full h-[100vh] overflow-hidden perspective-[1200px] flex items-center justify-center"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* background image */}
      <img
        src="/Images/case-studies/case_study_banner_image.png"
        alt="Banner"
        className="absolute w-full h-full object-cover"
        style={{
          transform: `translateY(-${translateY}px) rotateX(-${rotateX}deg)`,
          transformOrigin: 'center center',
          transition: 'transform 0.1s ease',
        }}
      />
      {/* text overlays */}
      <motion.div
        className="relative z-10 text-center text-white flex flex-col items-center justify-center gap-[.625rem]"
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.1s ease',
          // scale  
        }}
      >
        <div className='w-[calc(100%-6.25rem)] syneFont text-[4.375rem] text-white leading-[1em] tracking-[-0.05em] font-bold text-center'>
          Enhancing Animal Health with Thermography
        </div>
        <div className='w-[37.5rem] interFont text-white text-[1.063rem] leading-[1.5em] tracking-[-0.02em] font-normal text-center'>
          A reliable, stress-free method for monitoring livestock health and preventing disease outbreaks.
        </div>
      </motion.div>
    </div>

  )
}