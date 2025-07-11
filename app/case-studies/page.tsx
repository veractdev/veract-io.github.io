"use client"
import React, { useEffect, useState } from 'react'
import LenisProvider from '../LenisProvider'
import { useRouter } from 'next/navigation';
import { caseStudiesHomePageData } from '@/lib/custom_data';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import { getCaseStudyState, getNavbarState } from '@/lib/globalState';
interface CaseStudyCard {
    name: string;
    routeTo: string;
    image: string;
    header: string;
    subHeader: string;
}
export default function Page() {

    const router = useRouter();
    // const [activeTile, setActiveTile] = useState<string>('');
    const [caseStudyCards, setCaseStudyCards] = useState<CaseStudyCard[]>([]);
    const [translateY, setTranslateY] = useState<number>(0);

    const { setNavbarState } = getNavbarState();
    const { caseStudyState, setCaseStudyState } = getCaseStudyState();

    // Initialize with all cards when component mounts
    useEffect(() => {
        setNavbarState(1);
        const allCards = Object.values(caseStudiesHomePageData.caseStudiesList).flat();
        setCaseStudyCards(allCards as unknown as CaseStudyCard[]);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setTranslateY(-scrollY / 3);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleTileClick = (item: { name: string }) => {
        console.log('item: ', item.name);
        setCaseStudyState(item.name);
        const name = item.name.split(' ').join('').toLowerCase();
        const filteredCardsArray = caseStudiesHomePageData.caseStudiesList[name as keyof typeof caseStudiesHomePageData.caseStudiesList] as unknown as CaseStudyCard[];
        setCaseStudyCards(filteredCardsArray);
    }

    useEffect(() => {
        console.log('caseStudyState: ', caseStudyState);
    })

    return (
        <LenisProvider>
            <div className='flex items-center justify-center'>
                <Navbar />
                <div className='w-full flex flex-col overflow-y-scroll bg-primary-text select-none'>
                    <div className='w-full h-[100vh] md:h-max flex flex-col items-center justify-center py-0 md:py-[15.25rem_22.5rem] px-[3.125rem] relative'>
                        <img loading="lazy" src="/Images/case-studies/case_study_banner_image.png" alt="background image" className='absolute top-0 left-0 w-full h-full' />
                        <img loading="lazy" src="/Images/case-studies/Overlay-1.png" alt="overlay image" className='absolute top-0 left-0 w-full h-full' />
                        <img loading="lazy" src="/Images/case-studies/Overlay-2.png" alt="overlay image" className='absolute top-0 left-0 w-full h-full' />
                        <div
                            className='w-max static md:absolute top-[15.25rem] left-[3.125rem] flex flex-wrap flex-col gap-[0.625rem] items-start justify-center'
                            style={{
                                transform: `translateY(${translateY}px)`,
                                willChange: 'transform',
                            }}
                        >
                            <div className='syneFont text-[2rem] md:text-[6rem] gradient-text font-bold leading-[1em] -tracking-[0.05em]'>{caseStudiesHomePageData.header}</div>
                            <div className='interFont max-w-full md:max-w-1/2 text-[1.25rem] text-white font-light leading-[1.5em] -tracking-[0.02em]'>{caseStudiesHomePageData.subHeader}</div>
                        </div>
                        <div className='absolute top-[85%] -left-[1.5rem] flex flex-row gap-[1rem] items-center justify-center transform rotate-90'>
                            <div className='uppercase interFont text-[0.875rem] text-white font-light leading-[1.5em] -tracking-[0.02em]'>Scroll</div>
                            <div className="h-full bg-white animate-grow-line" />
                        </div>
                    </div>
                    <div className='w-full flex flex-row flex-wrap p-[3.125rem] items-center justify-center gap-[0.5rem]'>
                        {caseStudiesHomePageData.caseStudiesTitleList.map((item) => (
                            <div
                                key={item.id}
                                className={`syneFont p-[0.625rem_1.25rem] rounded-[2rem] text-[1rem] font-normal leading-[1.2] hover:bg-[#FF7A3B]/20 border-[1px]  hover:border-[#FF7A3B] hover:shadow-[0px_6px_12px_0px_#FF7A3B40] cursor-pointer transition-all duration-300 easeTransition ${caseStudyState === item.name ? 'border-[#FF7A3B] shadow-none bg-[#FF7A3B]/20 text-[#FF7A3B]' : 'border-[#FFFFFF]/50 bg-[#FFFFFF]/4 text-white hover:text-[#FF7A3B]'} `}
                                onClick={() => {
                                    handleTileClick(item);
                                }}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-row flex-wrap items-start gap-[0.563rem] px-[3.125rem] pb-[3.125rem]'>
                        {caseStudyCards.map((item: CaseStudyCard, index: number) => (
                            <motion.div
                                key={index}
                                className='w-[22.313rem] flex flex-col items-center justify-center gap-[1.375rem] p-[0.625rem_0.625rem_1.75rem_0.625rem] cursor-pointer'
                                onClick={() => {
                                    router.push(item.routeTo)
                                }}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeIn', delay: 0.1 * (index * 0.5) } }}
                            >
                                <img loading="lazy" src={item.image} alt="project image" className='w-full h-[14.75rem] rounded-[0.875rem]' />
                                <div className='flex flex-col w-full flex-wrap pl-[1.25rem]'>
                                    <div className='uppercase text-left syneFont text-[1.5rem] text-white font-semibold leading-[2em]'>{item.header}</div>
                                    <div className='uppercase text-left interFont text-[0.875rem] text-[#71717A] font-medium leading-[150%] -tracking-[0.05em]'>{item.subHeader}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </LenisProvider>
    )
}
