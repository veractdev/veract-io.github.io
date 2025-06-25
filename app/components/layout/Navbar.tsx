'use client'
import { navItems } from '@/lib/custom_data';
import { isMobile, isTablet } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Navbar() {

    const router = useRouter();
    const [selectedNav, setSelectedNav] = useState<number>();
    const [isHamburgerMenu, setIsHamburgerMenu] = useState<boolean>(false);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        if (window && typeof window !== 'undefined') {
            setLoaded(true);
        }
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if (window && typeof window !== 'undefined') {
                if (window.innerWidth >= 1024) {
                    setIsHamburgerMenu(false);
                }
            }
        };
        // Initial check
        handleResize();
        // Add resize listener
        window.addEventListener('resize', handleResize);
        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <React.Fragment>
            {loaded && (
                <div className={`flex fixed top-0 z-[100] items-center justify-center ${isMobile() ? 'py-[0.625rem_0.375rem]' : `${isTablet() ? 'py-[0.625rem_0.375rem]' : 'py-[1.875rem_0.375rem]'}`}`}>
                    <div
                        className={`lg:w-[56.25rem] md:w-[40.813rem] w-[21.875rem] ${isHamburgerMenu ? 'h-max' : 'h-[3.5rem]'} rounded-[2.75rem] flex ${isHamburgerMenu ? 'flex-col' : 'flex-row'} items-center lg:justify-center bg-background backdrop-blur-[0.563rem] ${isHamburgerMenu ? `${isMobile() ? 'py-[6.5rem_1.25rem]' : 'py-[4.125rem_1.25rem]'}` : 'p-[0.375rem_0.438rem_0.375rem_1.25rem]'} backdrop-blur-[0.563rem] transform transform-gpu transition-all duration-300 ease-in-out`}
                    >
                        {navItems.map((item) => (
                            <div
                                key={item.id}
                                className={`${isHamburgerMenu ? '' : 'first:ml-[210px] max-sm:hidden max-md:hidden max-lg:hidden'} relative flex items-center justify-center group`}
                                onClick={() => {
                                    setSelectedNav(item.id)
                                    router.push(item.link)
                                }}
                            >
                                <div
                                    className={`syneFont p-[0.875rem_1rem] text-[1rem] leading-[1em] 
                                tracking-[-0.05em] text-nowrap ${selectedNav === item.id ? 'text-[#4285F4]' : 'text-[#FFFFFF]'} group-hover:text-[#4285F4] font-semibold cursor-pointer 
                                transition-all duration-300 rounded-[1.625rem] 
                                group-hover:bg-[#FFFFFF1A]`}
                                >
                                    {item.name}
                                </div>
                                <div className={`absolute bottom-0 h-[0.125rem] rounded-[0.688rem] w-0 ${selectedNav === item.id ? 'w-[calc(100%-3.563rem)]' : 'w-0'} group-hover:w-[calc(100%-3.563rem)] bg-[#4285F4] transition-all duration-300`} />
                            </div>
                        ))}
                        <div className={`${isHamburgerMenu ? `${isMobile() ? 'mt-[3.875rem]' : 'mt-[3.125rem]'}` : 'max-sm:hidden max-md:hidden max-lg:hidden'} syneFont bg-white text-black font-bold leading-[1.2em] tracking-[0em] p-[0.563rem_2.063rem] rounded-[1.875rem] cursor-pointer hover:bg-[#FF7A3B] hover:text-white transition-all duration-300 ease-in-out ${!isMobile() && !isTablet() ? 'ml-[.625rem]' : ''} text-nowrap`}>Talk to us</div>
                        <div
                            className={`min-lg:hidden fixed ${isHamburgerMenu ? 'top-[1.875rem] right-[.625rem]' : 'right-[.438rem]'} w-[2.75rem] h-[2.75rem] rounded-full ${isHamburgerMenu ? 'bg-transparent' : 'bg-[#FFFFFF1A]'} flex items-center justify-center transform transition-all duration-300 ease-in-out`}
                            onClick={() => {
                                setIsHamburgerMenu(!isHamburgerMenu)
                            }}
                        >
                            <div className={`flex flex-col gap-[0.438rem] ${isHamburgerMenu ? 'items-center' : 'items-end'} justify-center transition-all duration-300 ease-in-out`}>
                                <div className={`w-[1.375rem] h-[0.125rem] bg-white transition-all duration-300 ease-in-out ${isHamburgerMenu ? 'absolute rotate-45' : ''}`} />
                                <div className={`${isHamburgerMenu ? 'hidden' : ''} w-[.75rem] h-[0.125rem] bg-white`} />
                                <div className={`w-[1.375rem] h-[0.125rem] bg-white transition-all duration-300 ease-in-out ${isHamburgerMenu ? 'absolute -rotate-45' : ''}`} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}