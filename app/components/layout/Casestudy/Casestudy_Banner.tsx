'use client'
import React, { useEffect, useState } from 'react'

type banner_props = {
  title: string;
  description: string;
  image: string;
}

export default function Casestudy_Banner({ banner_props }: { banner_props: banner_props }) {

  const [translateY, setTranslateY] = useState<number>(0);
  const [translateY2, setTranslateY2] = useState<number>(0);
  const [rotateX, setRotateX] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const [opacity, setOpacity] = useState<number>(1);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setTranslateY(scrollY / 2.5);
      setTranslateY2(scrollY / 6);
      setRotateX(Math.min(scrollY / 10, 20));
      setScale(Math.max(0.88, 1 - scrollY / 300 / 2));
      setOpacity(Math.max(0.65, 1 - scrollY / 600 / 2));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, [])

  return (
    loaded && (
      <div
        className="fixed top-0 w-full h-[100vh] overflow-hidden perspective-[75rem] flex items-center justify-center bg-primary-text"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* background image */}
        <img loading="lazy"
          src={`${banner_props.image}`}
          alt={`placeholder image`}
          className="absolute w-full h-full object-cover"
          style={{
            transform: `translateY(-${translateY}px) rotateX(-${rotateX}deg) scale(${scale})`,
            transformOrigin: 'center center',
            transition: 'transform 0.1s ease',
          }}
        />
        {/* text overlays */}
        <div
          className="w-[calc(100%-2.5rem)] lg:w-auto relative z-10 text-center text-white flex flex-col items-center justify-center gap-[2.188rem] md:gap-[0.625rem] lg:gap-[.625rem]"
          style={{
            opacity: opacity,
            transform: `scale(${scale}) translateY(${translateY2}px)`,
            transition: 'transform 0.1s ease',
          }}
        >
          <div
            id='case-study-banner-text'
            className='syneFont fadeInAnimation lg:w-[calc(100%-6.25rem)] text-[2.25rem] md:text-[4.375rem] md:px-[6.188rem] lg:px-0 lg:text-[4.375rem] text-white leading-[1em] tracking-[-0.05em] font-bold text-center
          '
          >
            {banner_props.title}
          </div>
          <div
            className={`w-[calc(100%-4.75rem)] fadeInAnimation md:w-auto lg:w-[37.5rem] interFont text-white text-[1rem] md:text-[1.063rem] md:px-[10.313rem] lg:px-0 lg:text-[1.063rem] leading-[1.5em] tracking-[-0.02em] font-light text-center`}
          >
            {banner_props.description}
          </div>

        </div>
      </div>
    )
  )
}