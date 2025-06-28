'use client';
import { isMobile, isTablet } from '@/lib/utils';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Casestudy_ShowReel() {
    const sectionRef = useRef(null);
    const [isMobileView, setIsMobileView] = useState(false);
    const [isTabView, setTabView] = useState(false);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });
    const rawWidth = useTransform(scrollYProgress, [0, 1], ['50%', `${isTabView ? '90%' : '115%'}`]);
    const rawHeight = useTransform(scrollYProgress, [0, 1], ['200px', '700px']);
    const rawScale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);

    const width = useSpring(rawWidth, {
        stiffness: 100,
        damping: 20,
    });

    const height = useSpring(rawHeight, {
        stiffness: 100,
        damping: 20,
    });

    const scale = useSpring(rawScale, {
        stiffness: 100,
        damping: 20,
    });

    useEffect(() => {
        if (window) {
            if(window.innerWidth < 1024) {
                setTabView(true);
            }
            if (window.innerWidth < 768) {
                setIsMobileView(true);
            }
        }
    }, [])

    return (
        <div ref={sectionRef} className={`${isMobileView ? 'h-max' : `${isTabView ? 'h-[180vh]' : 'h-[300vh]'}`} relative mt-[100vh] bg-[#0d0d0d] flex flex-col`}>
            <div className='flex items-center justify-center w-full'>
                <img src="/Images/case-studies/Overlay.png" alt="overlay" className='absolute top-[-175px] h-[176px] z-[100]' />
            </div>
            <motion.div
                id='showreel-text'
                className={`static md:sticky lg:sticky z-10 ${isTabView ? 'top-[7rem]' : 'top-0'} w-screen syneFont text-[3.625rem] md:text-[7.813rem] lg:text-[11.563rem] leading-[100%] tracking-[-0.05em] font-bold text-white text-center bg-[#0d0d0d]`}
                style={{
                    scale,
                }}
            >
                SHOWREEL
            </motion.div>
            <div className={`hidden md:flex lg:flex flex-col items-center justify-center sticky z-10 ${isTabView ? 'top-[10rem]' : 'top-[1rem]'} bg-transparent`}>
                <motion.div
                    style={{
                        width,
                        height
                    }}
                    className={`bg-white rounded-xl relative z-11`}
                />
            </div>
            <div className='flex items-center justify-center'>
                <div className='flex md:hidden lg:hidden items-center justify-center w-[calc(100%-2.5rem)] h-[60vh] bg-red-500 my-[3.938rem_5.563rem]'>
                    <div className='w-[300px] h-[300px] bg-blue-500'></div>
                </div>
            </div>
        </div>
    );
}