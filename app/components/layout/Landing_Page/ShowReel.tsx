'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { LandingPageData } from '@/lib/custom_data';

export default function ShowReel() {
  const sectionRef = useRef(null);

  const [isMobileView, setIsMobileView] = useState(false);
  const [isTabView, setTabView] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'], // triggers when the top of section hits top of viewport
  });

  const scale = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]); // full scale before scroll continues
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const springScale = useSpring(scale, {
    stiffness: 100,
    damping: 20,
  });

  const springTextScale = useSpring(textScale, {
    stiffness: 500,
    damping: 50,
  });

  const [isHover, setHover] = useState<boolean>(false);

  useEffect(() => {
    if (window) {
      if (window.innerWidth < 1024) {
        setTabView(true);
      }
      if (window.innerWidth < 768) {
        setIsMobileView(true);
      }
    }
  }, [])

  useEffect(() => {
    setLoaded(true)
  }, [])

  // useEffect(() => {
  //   /** handle dropdown outside clicks */
  //   const handleOutSideClick = (event: MouseEvent) => {
  //     if (videoRef.current && !videoRef.current.contains(event.target as Node)) {
  //       setVideo(false);
  //     }
  //   }
  //   window.addEventListener('mousedown', handleOutSideClick)
  //   return () => {
  //     window.removeEventListener('mousedown', handleOutSideClick)
  //   }
  // }, [videoRef]);

  // useEffect(() => {
  //   console.log('lenis', lenis);
  //   if (!lenis) return;

  //   if (isVideo) {
  //     lenis.stop();
  //     document.documentElement.style.overflow = 'hidden';
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     lenis.start();
  //     document.documentElement.style.overflow = '';
  //     document.body.style.overflow = '';
  //   }

  //   return () => {
  //     lenis.start();
  //     document.documentElement.style.overflow = '';
  //     document.body.style.overflow = '';
  //   };
  // }, [isVideo, lenis]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRefMobile = useRef<HTMLVideoElement>(null);
  const handleToggleVideo = () => {
    if (videoRef.current || videoRefMobile.current) {
      if (videoRef.current?.paused) {
        videoRef.current?.play();
      } else {
        videoRef.current?.pause();
      }
      if (videoRefMobile.current?.paused) {
        videoRefMobile.current?.play();
      } else {
        videoRefMobile.current?.pause();
      }
    }
  };

  return (
    loaded && (
      <div ref={sectionRef} className={`${isMobileView ? 'h-max' : `${isTabView ? 'h-[180vh]' : 'h-[300vh]'}`} relative mt-[100vh] bg-primary-text flex flex-col pb-[6.188rem]`}>
        <div className='flex items-center justify-center w-full'>
          <img loading="lazy" src="/Images/case-studies/Overlay.png" alt="overlay" className='absolute top-[-10.938rem] h-[11rem] z-[100]' />
        </div>
        <motion.div
          id='showreel-text'
          className={`uppercase static md:sticky lg:sticky z-10 ${isTabView ? 'top-[7rem]' : 'top-0'} w-screen syneFont text-[3.625rem] md:text-[7.813rem] lg:text-[11.563rem] leading-[100%] tracking-[-0.05em] font-bold text-white text-center bg-primary-text`}
          style={{
            scale: springTextScale,
          }}
        >
          {LandingPageData.showReel.title}
        </motion.div>
        <div className={`hidden md:flex lg:flex flex-col items-center justify-center sticky top-[0%] transform z-10 bg-transparent`}>
          <motion.div
            style={{
              scale: springScale,
              transformOrigin: 'center center',
            }}
            className={`bg-[#FFFFFF] rounded-xl w-screen h-screen relative z-11 overflow-hidden`}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              playsInline
              controls={true}
            >
              <source src={`/SampleVideo_1280x720_10mb.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div
            layout
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            animate={{
              gap: isHover ? '0.938rem' : '0rem',
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className='absolute z-[25] flex flex-col items-center justify-center group cursor-pointer'
            onClick={handleToggleVideo}
          // onClick={() => setVideo(true)}
          >
            <div className='w-[7.313rem] h-[7.313rem] rounded-full bg-transparent flex items-center justify-center relative'>
              {/* Base icon */}
              <img loading="lazy"
                src="/Images/LandingPage/showReel/play- default.svg"
                alt="play icon"
                className='w-[7.313rem] h-[7.313rem] absolute opacity-100 group-hover:opacity-0 transition-opacity duration-300'
              />
              {/* Hover icon */}
              <img loading="lazy"
                src="/Images/LandingPage/showReel/play- hover.svg"
                alt="play icon"
                className='w-[7.313rem] h-[7.313rem] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300'
              />
            </div>

            <div className='syneFont text-[1rem] text-black font-bold leading-[1.2em] uppercase opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-300'>
              play showreel
            </div>
          </motion.div>

        </div>
        <div className='flex items-center justify-center'>
          <div className='flex md:hidden lg:hidden items-center justify-center w-[calc(100%-2.5rem)] h-[60vh] bg-white rounded-xl my-[3.938rem_5.563rem] overflow-hidden'>
            <video
              ref={videoRefMobile}
              className="w-full h-full object-cover"
              autoPlay
              // muted
              loop
              playsInline
              controls={true}
            >
              <source src={`/SampleVideo_1280x720_10mb.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    )
  );
}