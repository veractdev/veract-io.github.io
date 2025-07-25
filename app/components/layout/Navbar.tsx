"use client";
import { navItems } from "@/lib/custom_data";
import { getNavbarState } from "@/lib/globalState";
import { isMobile, isTablet } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [isHamburgerMenu, setIsHamburgerMenu] = useState<boolean>(false);
    const [loaded, setLoaded] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const { navbarState, setNavbarState } = getNavbarState();


    useEffect(() => {
        setLoaded(true);
    }, [])

    useEffect(() => {
        if (!pathname) return;
        if (pathname === "/") {
            setNavbarState(1);
        } else if (pathname === "/case-studies") {
            setNavbarState(4);
        } else if (pathname === "/agentic-ai") {
            setNavbarState(3);
        }
        else if (pathname === "/contact-us") {
            setNavbarState(6);
        } else {
            setNavbarState(0); // default/fallback
        }
    }, [pathname]);

    useEffect(() => {
        const handleResize = () => {
            if (window && typeof window !== "undefined") {
                if (window.innerWidth >= 1024) {
                    setIsHamburgerMenu(false);
                }
            }
        };
        // Initial check
        handleResize();
        // Add resize listener
        window.addEventListener("resize", handleResize);
        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    // outside click handler to close the hamburger menu
    // and scroll handler to close the hamburger menu on scroll
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsHamburgerMenu(false);
            }
        };

        const handleScroll = () => {
            setIsHamburgerMenu(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <React.Fragment>
            {loaded && (
                <div
                    className={`flex fixed top-0 z-[999] items-center justify-center select-none ${isMobile()
                        ? "py-[0.625rem_0.375rem]"
                        : `${isTablet()
                            ? "py-[0.625rem_0.375rem]"
                            : "py-[1.875rem_0.375rem]"
                        }`
                        }`}
                >
                    <div
                        ref={menuRef}
                        className={`lg:w-[56.25rem] md:w-[40.813rem] w-[21.875rem] ${isHamburgerMenu ? "h-max" : "h-[3.5rem]"
                            } rounded-[2.75rem] flex ${isHamburgerMenu ? "flex-col" : "flex-row"
                            } items-center lg:justify-between bg-background backdrop-blur-[0.563rem] ${isHamburgerMenu
                                ? `${isMobile() ? "py-[6.5rem_1.25rem]" : "py-[4.125rem_1.25rem]"
                                }`
                                : "p-[0.375rem_0.438rem_0.375rem_1.25rem]"
                            } backdrop-blur-[0.563rem] transform transform-gpu transition-all duration-300 ease-in`}
                    >
                        <img loading="lazy"
                            src={`/Images/LandingPage/Navbar/veract-logo-white-font.svg`}
                            alt="veract-logo"
                            className={`
                                absolute left-[1.25rem] w-[9.5rem] h-[2.75rem] object-contain cursor-pointer 
                                transition-all duration-500 ease-in 
                                ${isHamburgerMenu
                                    ? "top-[1.875rem]"
                                    : "top-[0.25rem]"
                                }
                                lg:static lg:top-auto lg:left-auto
                            `}
                            onClick={() => {
                                router.push("/");
                            }}
                        />

                        <div
                            className={`flex ${isHamburgerMenu ? "flex-col" : "flex-row"} items-center justify-center ${isHamburgerMenu && "opacity-0 animate-fade-in"}`}
                        >
                            {navItems.map((item) => (
                                <div
                                    key={item.id}
                                    className={`${isHamburgerMenu
                                        ? ""
                                        : " max-sm:hidden max-md:hidden max-lg:hidden"
                                        } relative flex items-center justify-center group`}
                                    onClick={() => {
                                        setNavbarState(item.id);
                                        router.push(item.link);
                                    }}
                                >
                                    {item.id === 3 && (
                                        <img src={`/Images/LandingPage/Banner/Join.svg`} alt="star icon" className="absolute top-[7px] right-[9px]" />
                                    )}
                                    <div
                                        className={`syneFont ${item.id === 3 ? 'p-[0.875rem_1.75rem_0.875rem_1rem]' : 'p-[0.875rem_1rem]'} text-[1rem] leading-[1em] 
                                            tracking-[-0.05em] text-nowrap ${navbarState === item.id && item.status == 'active'
                                                ? "text-primary-blue"
                                                : "text-white"
                                            } font-semibold ${item.status == 'inactive' ? "opacity-50 pointer-events-none" : "cursor-pointer group-hover:bg-[#FFFFFF1A] group-hover:text-primary-blue"}  
                                            transition-all duration-300 rounded-[1.625rem] 
                                            `}
                                    >
                                        {item.name}
                                    </div>
                                    <div
                                        className={`absolute bottom-0 h-[0.125rem] rounded-[0.688rem] w-0 ${navbarState === item.id && item.status == 'active'
                                            ? "w-[calc(100%-3.563rem)]"
                                            : "w-0"
                                            } group-hover:w-[calc(100%-3.563rem)] ${item.status == 'active' ? 'bg-primary-blue' : ''} transition-all duration-300`}
                                    />
                                </div>
                            ))}
                            <div
                                onClick={() => {
                                    router.push("/contact-us");
                                }}
                                className={`${isHamburgerMenu
                                    ? `${isMobile() ? "mt-[3.875rem]" : "mt-[3.125rem]"}`
                                    : "max-sm:hidden max-md:hidden max-lg:hidden"
                                    } syneFont hover:bg-orange hover:text-white ${navbarState === 6 ? "bg-orange text-white" : "bg-[#FFFFFF] text-black"} font-bold leading-[1.2em] tracking-[0em] p-[0.563rem_2.063rem] rounded-[1.875rem] cursor-pointer transition-all duration-300 ease-in-out ${!isMobile() && !isTablet() ? "ml-[.625rem]" : ""
                                    } text-nowrap`}
                            >
                                Talk to us
                            </div>
                        </div>
                        <div
                            className={`min-lg:hidden fixed ${isHamburgerMenu
                                ? "top-[1.875rem] right-[.625rem]"
                                : "right-[.438rem]"
                                } w-[2.75rem] h-[2.75rem] rounded-full ${isHamburgerMenu ? "bg-transparent" : "bg-[#FFFFFF1A]"
                                } flex items-center justify-center transform transition-all duration-500 ease-in`}
                            onClick={() => {
                                setIsHamburgerMenu(!isHamburgerMenu);
                            }}
                        >
                            <div
                                className={`flex flex-col gap-[0.438rem] ${isHamburgerMenu ? "items-center" : "items-end"
                                    } justify-center transition-all duration-300 ease-in`}
                            >
                                <div
                                    className={`w-[1.375rem] h-[0.125rem] bg-[#FFFFFF] transition-all duration-300 ease-in ${isHamburgerMenu ? "absolute rotate-45" : ""
                                        }`}
                                />
                                <div
                                    className={`${isHamburgerMenu ? "hidden" : ""
                                        } w-[.75rem] h-[0.125rem] bg-[#FFFFFF]`}
                                />
                                <div
                                    className={`w-[1.375rem] h-[0.125rem] bg-[#FFFFFF] transition-all duration-300 ease-in ${isHamburgerMenu ? "absolute -rotate-45" : ""
                                        }`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}
