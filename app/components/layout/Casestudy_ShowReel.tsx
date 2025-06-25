'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function Casestudy_ShowReel() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const rawWidth = useTransform(scrollYProgress, [0, 1], ['50%', '115%']);
    const width = useSpring(rawWidth, {
        stiffness: 100,
        damping: 20,
    });

    const rawHeight = useTransform(scrollYProgress, [0, 1], ['200px', '700px']);
    const height = useSpring(rawHeight, {
        stiffness: 100,
        damping: 20,
    });

    const rawScale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
    const scale = useSpring(rawScale, {
        stiffness: 100,
        damping: 20,
    });

    return (
        <div ref={sectionRef} className="h-[300vh] relative mt-[100vh] bg-[#0d0d0d]">
            {/* <div className='absolute -top-[8.375rem] w-full h-[8.375rem] bg-linear-to-t from-[#0D0D0D] to-[#0D0D0D]/20 backdrop-blur-[84px]' /> */}
            <img src="/Images/case-studies/Overlay.png" alt="overlay" className='absolute top-[-103px] z-[100]' />
            <motion.div
                className='sticky z-10 top-0 w-screen syneFont  text-[11.563rem] leading-[100%] tracking-[-0.05em] font-bold text-white text-center bg-[#0d0d0d]'
                style={{
                    scale,
                }}
            >
                SHOWREEL
            </motion.div>
            <div className="sticky z-10 top-[1rem] h-max flex flex-col items-center justify-center bg-[#0d0d0d]">
                <motion.div
                    style={
                        {
                            width,
                            height
                        }
                    }
                    className="bg-white rounded-xl relative z-11"
                />
            </div>
        </div>
    );
}