'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Casestudy_ShowReel() {
    const sectionRef = useRef(null);
    const [isMobileView, setIsMobileView] = useState(false);
    const [isTabView, setTabView] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'], // triggers when the top of section hits top of viewport
    });

    const rawWidth = useTransform(scrollYProgress, [0, 1], ['50%', `${isTabView ? '90%' : '90%'}`]);
    const rawHeight = useTransform(scrollYProgress, [0, 1], ['25vh', '100vh']);
    // const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 3]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]); // full scale before scroll continues
    const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);


    const width = useSpring(rawWidth, {
        stiffness: 100,
        damping: 20,
    });

    const height = useSpring(rawHeight, {
        stiffness: 100,
        damping: 20,
    });

    const springScale = useSpring(scale, {
        stiffness: 100,
        damping: 20,
    });

    const springTextScale = useSpring(textScale, {
        stiffness: 500,
        damping: 50,
    });

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

    return (
        loaded && (
            <div ref={sectionRef} className={`${isMobileView ? 'h-max' : `${isTabView ? 'h-[180vh]' : 'h-[300vh]'}`} relative mt-[100vh] bg-primary-text flex flex-col`}>
                <div className='flex items-center justify-center w-full'>
                    <img src="/Images/case-studies/Overlay.png" alt="overlay" className='absolute top-[-10.938rem] h-[11rem] z-[100]' />
                </div>
                <motion.div
                    id='showreel-text'
                    className={`static md:sticky lg:sticky z-10 ${isTabView ? 'top-[7rem]' : 'top-0'} w-screen syneFont text-[3.625rem] md:text-[7.813rem] lg:text-[11.563rem] leading-[100%] tracking-[-0.05em] font-bold text-white text-center bg-primary-text`}
                    style={{
                        // scale,
                        scale: springTextScale,
                    }}
                >
                    SHOWREEL
                </motion.div>
                <div className={`hidden md:flex lg:flex flex-col items-center justify-center sticky top-[0%] transform z-10 bg-transparent`}>
                    <motion.div
                        style={{
                            scale: springScale,
                            transformOrigin: 'center center',
                        }}
                        className={`bg-[#FFFFFF] rounded-xl w-screen h-screen relative z-11`}
                    />
                </div>
                <div className='flex items-center justify-center'>
                    <div className='flex md:hidden lg:hidden items-center justify-center w-[calc(100%-2.5rem)] h-[60vh] bg-red-500 my-[3.938rem_5.563rem]'>
                        <div className='w-[18.75rem] h-[18.75rem] bg-blue-500'></div>
                    </div>
                </div>
            </div>
        )
    );
}