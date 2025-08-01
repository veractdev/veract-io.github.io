"use client";
import { baseUrl } from "@/lib/custom_data";
import { isMobile, isTablet } from "@/lib/utils";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type showreel_props = {
    title: string;
    video: string[];
    youtube_url: string;
};

export default function Casestudy_ShowReel({
    showreel_props,
}: {
    showreel_props: showreel_props;
}) {
    const sectionRef = useRef(null);
    const [isMobileView, setIsMobileView] = useState(false);
    const [isTabView, setTabView] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const videoRef = useRef<HTMLIFrameElement>(null);
    const [isVideo, setVideo] = useState<boolean>(false);
    const [videoURL, setVideoURL] = useState<number>(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"], // triggers when the top of section hits top of viewport
    });

    const scale = useTransform(scrollYProgress, [0, 0.2], [0.2, isTablet() ? 0.95 : 0.80]); // full scale before scroll continues
    const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.1]);

    const [isHover, setHover] = useState<boolean>(false);

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
        if (typeof window !== 'undefined') {
            if (isMobile()) {
                setVideoURL(2);
            } else if (isTablet()) {
                setVideoURL(1);
            } else {
                setVideoURL(0);
            }
            setLoaded(true);
        }
    }, [])

    return (
        loaded && (
            <div ref={sectionRef} className={`${isMobileView ? 'h-max' : `${isTabView ? 'h-[180vh]' : 'h-[300vh]'}`} relative mt-[100vh] bg-primary-text flex flex-col`}>
                <div className='flex items-center justify-center w-full'>
                    <img loading="lazy" src={`${baseUrl}/Images/case-studies/Overlay.png`} alt="overlay" className='w-full absolute top-[-10.938rem] h-[11rem] z-[100]' />
                </div>
                <motion.div
                    id='showreel-text'
                    className={`static md:sticky lg:sticky z-10 ${isTabView ? 'top-[7rem]' : 'top-0'} w-screen syneFont text-[3rem] md:text-[7.813rem] lg:text-[11.563rem] leading-[100%] tracking-[-0.05em] font-bold text-white text-center bg-primary-text`}
                    style={{
                        // scale,
                        scale: !isMobile() ? springTextScale : 1,
                    }}
                >
                    {showreel_props.title}
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
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls={false}
                        >
                            <source src={showreel_props.video[videoURL]} type="video/mp4" />
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
                        onClick={() => setVideo(true)}
                    >
                        {/* <div className='w-[7.313rem] h-[7.313rem] rounded-full bg-transparent flex items-center justify-center relative'>
                            <img loading="lazy"
                                src="/Images/LandingPage/showReel/play- default.svg"
                                alt="play icon"
                                className='w-[7.313rem] h-[7.313rem] absolute opacity-100 group-hover:opacity-0 transition-opacity duration-300'
                            />
                            <img loading="lazy"
                                src="/Images/LandingPage/showReel/play- hover.svg"
                                alt="play icon"
                                className='w-[7.313rem] h-[7.313rem] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                            />
                        </div> */}

                        {/* <div className='syneFont text-[1rem] text-black font-bold leading-[1.2em] uppercase opacity-100 translate-y-6 transition-all duration-300'>
                            play showreel
                        </div> */}
                    </motion.div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='flex md:hidden lg:hidden items-center justify-center w-[calc(100%-2.5rem)] h-[60vh] bg-white rounded-xl my-[3.938rem_5.563rem] overflow-hidden'>
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls={false}
                        >
                            <source src={showreel_props.video[videoURL]} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
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
                            onClick={() => setVideo(true)}
                        >
                            {/* <div className='w-[7.313rem] h-[7.313rem] rounded-full bg-transparent flex items-center justify-center relative'>
                                <img loading="lazy"
                                    src="/Images/LandingPage/showReel/play- default.svg"
                                    alt="play icon"
                                    className='w-[7.313rem] h-[7.313rem] absolute opacity-100 group-hover:opacity-0 transition-opacity duration-300'
                                />
                                <img loading="lazy"
                                    src="/Images/LandingPage/showReel/play- hover.svg"
                                    alt="play icon"
                                    className='w-[7.313rem] h-[7.313rem] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                                />
                            </div> */}

                            {/* <div className='syneFont text-[1rem] text-black font-bold leading-[1.2em] uppercase opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-300'>
                                play showreel
                            </div> */}
                        </motion.div>
                    </div>
                </div>
                {isVideo && (
                    <div
                        className="fixed z-[997] inset-0 bg-[#000000]/60 flex items-center justify-center"
                        onClick={() => { setVideo(false) }} // ⬅️ close on outside click
                    >
                        <div
                            className="w-[80%] h-[80vh] bg-black"
                            onClick={(e) => e.stopPropagation()} // ⬅️ prevent close when clicking inside
                        >
                            <iframe
                                ref={videoRef}
                                src={showreel_props.youtube_url}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                )}
            </div>
        )
    );
}
