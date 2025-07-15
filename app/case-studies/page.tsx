"use client"
import React, { useEffect, useState } from 'react'
import LenisProvider from '../LenisProvider'
import { useRouter } from 'next/navigation';
import { caseStudiesHomePageData } from '@/lib/custom_data';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import { isMobile, isTablet } from '@/lib/utils';
interface CaseStudyCard {
  name: string;
  routeTo: string;
  image: string;
  header: string;
  subHeader: string;
}
export default function Page() {

  const router = useRouter();
  const [activeTile, setActiveTile] = useState<string>('');
  const [caseStudyCards, setCaseStudyCards] = useState<CaseStudyCard[]>([]);
  const [translateY, setTranslateY] = useState<number>(0);
  const [fetchVideo, setVideo] = useState<string>('');
  const [isClient, setIsClient] = useState(false);
  const [showAllTitles, setShowAllTitles] = useState(false);
  const [loaded, setLoaded] = useState(false);
  // const { caseStudyState, setCaseStudyState } = getCaseStudyState();

  // Initialize with all cards when component mounts
  useEffect(() => {
    setIsClient(true);
    setLoaded(true);
    // Set video source after client-side detection
    const setVideoSource = () => {
      const isMobileDevice = isMobile();
      const isTabletDevice = isTablet();

      if (isMobileDevice || isTabletDevice) {
        setVideo('/Images/case-studies/List/our projects hero video-mobile & tab view.mp4');
      } else {
        setVideo('/Images/case-studies/List/our_projects_hero_video_web_view.mp4');
      }
    };

    setVideoSource();

    const allCards = Object.values(
      caseStudiesHomePageData.caseStudiesList
    ).flat();
    setCaseStudyCards(allCards as unknown as CaseStudyCard[]);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setTranslateY(-scrollY / 3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTileClick = (item: { name: string }) => {
    setActiveTile(item.name);
    const name = item.name.split(' ').join('').toLowerCase();
    const filteredCardsArray = caseStudiesHomePageData.caseStudiesList[name as keyof typeof caseStudiesHomePageData.caseStudiesList] as unknown as CaseStudyCard[];
    setCaseStudyCards(filteredCardsArray);
  }

  const handleSeeMoreClick = () => {
    setShowAllTitles(true);
  }

  // Get titles to display based on showAllTitles state and device type
  const getTitlesToDisplay = () => {
    const isMobileDevice = isMobile();

    // Only apply "See More" functionality on mobile
    if (isMobileDevice) {
      if (showAllTitles) {
        return caseStudiesHomePageData.caseStudiesTitleList;
      }
      return caseStudiesHomePageData.caseStudiesTitleList.slice(0, 5);
    }

    // On desktop/tablet, always show all titles
    return caseStudiesHomePageData.caseStudiesTitleList;
  }

  // useEffect(() => {
  //     if (caseStudyState) {
  //         let item = caseStudyState.split(' ').join('').toLowerCase();
  //         const filteredCardsArray = caseStudiesHomePageData.caseStudiesList[item as keyof typeof caseStudiesHomePageData.caseStudiesList] as unknown as CaseStudyCard[];
  //         setCaseStudyCards(filteredCardsArray);
  //     }
  // }, [])

  return (
    loaded && (
      <LenisProvider>
        <div className="flex items-center justify-center">
          <Navbar />
          <div className="w-full flex flex-col overflow-y-scroll bg-primary-text select-none">
            <div className="w-full h-[100vh] md:h-[100vh] lg:h-max flex flex-col items-center justify-center py-0 md:py-[15.25rem_22.5rem] px-[3.125rem] relative">
              <div className="absolute top-0 left-0 w-full h-full">
                {isClient && fetchVideo && (
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    // loop
                    muted
                    playsInline
                    controls={false}
                  >
                    <source
                      src={fetchVideo}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <img loading="lazy" src="/Images/case-studies/Overlay-1.png" alt="overlay image" className='absolute top-0 left-0 w-full h-full' />
              <img loading="lazy" src="/Images/case-studies/Overlay-2.png" alt="overlay image" className='absolute top-0 left-0 w-full h-full' />
              <div
                className="w-[80%] absolute left-[1.25rem] bottom-[4.75rem] md:w-[80%] lg:w-[90%] md:left-[3.125rem] md:bottom-[2.5rem] md:top-auto lg:top-[15.25rem] lg:left-[3.125rem] lg:bottom-auto flex flex-wrap flex-col gap-[0.625rem] items-start justify-center"
                style={{
                  transform: `translateY(${translateY}px)`,
                  willChange: "transform",
                }}
              >
                <div className="syneFont text-[3.75rem] md:text-[6rem] gradient-text font-bold leading-[1em] -tracking-[0.05em]">
                  {caseStudiesHomePageData.header}
                </div>
                <div className="interFont max-w-full lg:max-w-1/2 text-[1rem] md:text-[1.25rem] text-white font-light leading-[1.5em] -tracking-[0.02em]">
                  {caseStudiesHomePageData.subHeader}
                </div>
              </div>
              <div className="scale-75 md:scale-100 absolute top-[35%] md:top-[50%] left-[-2.85rem] translate-y-[50%] md:translate-y-[-50%] lg:translate-none lg:top-[85%] md:-left-[1.5rem] flex flex-row gap-[1rem] items-center justify-center transform rotate-90">
                <div className="uppercase interFont text-[0.875rem] text-white font-light leading-[1.5em] -tracking-[0.02em]">
                  Scroll
                </div>
                <div className="h-full bg-white animate-grow-line" />
              </div>
            </div>
            <div className="w-full flex flex-row flex-wrap p-[0_1.25rem_3.125rem_1.25rem] md:p-[3.125rem_3.75rem] items-center justify-start gap-[0.5rem]">
              {getTitlesToDisplay().map((item) => (
                <div
                  key={item.id}
                  className={`syneFont p-[0.625rem_1.25rem] rounded-[2rem] text-[1rem] font-normal leading-[1.2] hover:bg-[#4285F4]/20 border-[1px]  hover:border-[#4285F4] hover:shadow-[0px_6px_12px_0px_#4285F440] cursor-pointer transition-all duration-300 easeTransition ${activeTile === item.name
                    ? "border-[#4285F4] shadow-none bg-[#4285F4]/20 text-[#4285F4]"
                    : "border-[#FFFFFF]/50 bg-[#FFFFFF]/4 text-white hover:text-[#4285F4]"
                    } `}
                  onClick={() => {
                    handleTileClick(item);
                  }}
                >
                  {item.name}
                </div>
              ))}
              {!showAllTitles && isMobile() && caseStudiesHomePageData.caseStudiesTitleList.length > 5 && (
                <div
                  className="syneFont text-[1rem] font-medium leading-[1.2] text-white pl-[0.5rem]"
                  onClick={handleSeeMoreClick}
                >
                  See More
                </div>
              )}
            </div>
            <div className="flex flex-row flex-wrap items-start justify-center lg:justify-start md:gap-[1rem] lg:gap-[0.563rem] px-[1.25rem] md:px-[3.125rem] pb-[3.125rem]">
              {caseStudyCards.map((item: CaseStudyCard, index: number) => (
                <motion.div
                  key={index}
                  className="w-full md:w-[20.75rem] lg:w-[23.563rem] flex flex-col items-center justify-center gap-[1.375rem] p-[0.625rem_0.625rem_1.75rem_0.625rem]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.3,
                      ease: "easeIn",
                      delay: 0.1 * (index * 0.5),
                    },
                  }}
                >
                  <div className='w-full h-full md:w-[19.5rem] md:h-[11.5rem] lg:w-[22.313rem] lg:h-[13.125rem] rounded-[0.875rem] flex justify-center cursor-pointer overflow-hidden'>
                    <img
                      loading="lazy"
                      src={item.image}
                      alt="project image"
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
                      onClick={() => {
                        router.push(item.routeTo);
                      }}
                    />
                  </div>
                  <div className="flex flex-col w-full flex-wrap">
                    <div className="uppercase text-left syneFont text-[1.375rem] md:text-[1.25rem] text-white font-semibold leading-[2em]">
                      {item.header}
                    </div>
                    <div className="text-left interFont text-[0.875rem] text-[#71717A] font-medium leading-[150%] -tracking-[0.05em]">
                      {item.subHeader}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </LenisProvider>
    )
  );
}
