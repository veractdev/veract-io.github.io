"use client"
import React, { useEffect, useRef, useState } from 'react'
import LenisProvider from '../LenisProvider'
import { useRouter } from 'next/navigation';
import { baseUrl, caseStudiesHomePageData } from '@/lib/custom_data';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import { isMobile, isTablet } from '@/lib/utils';
import Footer from '../components/layout/Landing_Page/Footer';
import FAQ from '../components/layout/Landing_Page/FAQ';
import { useFooterScrollState } from '@/lib/globalState';
interface CaseStudyCard {
  name: string;
  routeTo: string;
  image: string;
  header: string;
  subHeader: string;
  hover_image: string;
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
  const footerRef = useRef<HTMLDivElement>(null);
  const { getScrollPosition, clearScrollPosition } = useFooterScrollState();
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
        setVideo(`${baseUrl}/Images/case-studies/List/our_projects_mob_tab.mp4`);
      } else {
        setVideo(`${baseUrl}/Images/case-studies/List/our_projects_hero_video_web_view.mp4`);
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

  const handleAllClick = () => {
    setActiveTile('All');
    const allCards = Object.values(
      caseStudiesHomePageData.caseStudiesList
    ).flat();
    setCaseStudyCards(allCards as unknown as CaseStudyCard[]);
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

  useEffect(() => {
    const savedScrollPosition = getScrollPosition("footer-case-studies");
    if (savedScrollPosition) {
      setTimeout(() => {
        // Restore the saved scroll position
        window.scrollTo(0, savedScrollPosition);
        clearScrollPosition("footer-case-studies");
      }, 100);
    }
  }, [getScrollPosition, clearScrollPosition]);

  // Handle tab close to clear scroll position
  useEffect(() => {
    const handleBeforeUnload = () => {
      clearScrollPosition("footer-case-studies");
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [clearScrollPosition]);

  return (
    loaded && (
      // <LenisProvider>
      <div className="flex flex-col items-center justify-center">
        <Navbar />
        <div className="w-full flex flex-col overflow-y-scroll bg-primary-text select-none">
          <div className="w-full h-[100vh] md:h-[100vh] lg:h-max flex flex-col items-center justify-center py-0 md:py-[15.25rem_22.5rem] px-[3.125rem] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              {isClient && fetchVideo && (
                <video
                  className="w-full h-[99%] object-cover"
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
            <img loading="lazy" src={`${baseUrl}/Images/case-studies/Overlay-1.png`} alt="overlay image" className='absolute top-0 left-0 w-full h-full' />
            <img loading="lazy" src={`${baseUrl}/Images/case-studies/Overlay-2.png`} alt="overlay image" className='absolute top-0 left-0 w-full h-full' />
            <div
              className="w-[80%] absolute left-[1.25rem] bottom-[4.75rem] md:w-[80%] lg:w-[90%] md:left-[3.125rem] md:bottom-[2.5rem] md:top-auto lg:top-[15.25rem] lg:left-[3.125rem] lg:bottom-auto flex flex-wrap flex-col gap-[0.625rem] items-start justify-center"
              style={{
                transform: `translateY(${translateY}px)`,
                willChange: "transform",
              }}
            >
              <div className="syneFont text-[3.75rem] md:text-[6rem] gradient-text font-bold leading-[1em] -tracking-[0.05em] pr-[0.75rem]">
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
            {/* All button - initially selected */}
            <div
              className={`syneFont p-[0.625rem_1.25rem] rounded-[2rem] text-[1rem] font-normal leading-[1.2] hover:bg-[#4285F4]/20 border-[1px]  hover:border-[#4285F4] hover:shadow-[0px_6px_12px_0px_#4285F440] cursor-pointer transition-all duration-300 easeTransition ${activeTile === 'All' || activeTile === ''
                ? "border-[#4285F4] shadow-none bg-[#4285F4]/20 text-[#4285F4]"
                : "border-[#FFFFFF]/50 bg-[#FFFFFF]/4 text-white hover:text-[#4285F4]"
                } `}
              onClick={handleAllClick}
            >
              All
            </div>

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
                See more
              </div>
            )}
          </div>
          <div className={`flex flex-row flex-wrap items-start justify-center lg:justify-start md:gap-[1rem] lg:gap-[0.563rem] px-[1.25rem] md:px-[3.125rem] pb-0 md:pb-[3.125rem]`}>
            {caseStudyCards.map((item: CaseStudyCard, index: number) => (
              <div
                key={index}
                className="w-full md:w-[20.75rem] lg:w-[25.563rem] flex flex-col items-center justify-center gap-[1.375rem] p-[0.625rem_0.625rem_1.75rem_0.625rem]"
              // initial={{ opacity: 0, y: 40 }}
              // whileInView={{
              //   opacity: 1,
              //   y: 0,
              //   transition: {
              //     duration: 0.3,
              //     ease: "easeIn",
              //     delay: 0.1 * (index * 0.35),
              //   },
              // }}
              // viewport={{
              //   once: true,
              // }}
              >
                <div
                  className='relative group w-full h-[13.188rem] md:w-[19.5rem] md:h-[11.5rem] lg:w-[24.313rem] lg:h-[13.125rem] rounded-[0.875rem] flex justify-center cursor-pointer overflow-hidden'
                  onClick={() => {
                    if (item.routeTo) {
                      router.push(item.routeTo);
                    } else {
                      router.push('/contact-us');
                    }
                  }}
                >
                  <img
                    loading="lazy"
                    src={item.image}
                    alt="project image"
                    className="absolute w-full h-full object-contain md:object-cover opacity-100 group-hover:opacity-0 transition-all duration-300 ease-in-out"
                  />
                  <img
                    loading='lazy'
                    src={item.hover_image}
                    alt={item.header}
                    className='absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:z-50 group-hover:scale-105 transition-all duration-300 ease-in-out'
                  />
                </div>
                <div className="flex flex-col w-full flex-wrap pl-[1rem]">
                  <div className="uppercase text-left syneFont text-[1.375rem] md:text-[1.25rem] text-white font-semibold leading-[2em]">
                    {item.header}
                  </div>
                  <div className="text-left interFont text-[0.875rem] text-[#71717A] font-medium leading-[150%] -tracking-[0.05em]">
                    {item.subHeader}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <FAQ faq_props={caseStudiesHomePageData.faq} />
        <Footer ref={footerRef} sessionId={'footer-case-studies'} />
      </div>
      // </LenisProvider>
    )
  );
}
