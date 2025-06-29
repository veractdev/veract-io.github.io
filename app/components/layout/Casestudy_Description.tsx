import React, { useEffect, useRef, useState } from 'react'

export default function Casestudy_Description() {
    const glimpseRef = useRef<HTMLDivElement>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const checkOverflow = () => {
            if (glimpseRef.current) {
                const rect = glimpseRef.current.getBoundingClientRect();
                const isOverflowingTop = rect.top < 0;
                setIsOverflowing(isOverflowingTop);
            }
        };

        // Check on mount and scroll
        checkOverflow();
        window.addEventListener('scroll', checkOverflow);
        window.addEventListener('resize', checkOverflow);

        return () => {
            window.removeEventListener('scroll', checkOverflow);
            window.removeEventListener('resize', checkOverflow);
        };
    }, []);

    return (
        <div className='w-full h-max p-[6.25rem_3.125rem] bg-white relative z-50 flex flex-row gap-[0.625rem] items-start justify-center'>
            <div
                ref={glimpseRef}
                className={`syneFont min-w-[22.688rem] text-[1.875rem] text-black font-semibold leading-[1.2em] tracking-[-0.05em] ${
                    isOverflowing ? 'translate-y-[250%]' : 'translate-y-0'
                }`}
            >
                A small glimpse
            </div>
            <div
                className='interFont w-full text-[2.25rem] text-[#0d0d0d]/50 font-extralight leading-[1.2em] tracking-[-0.04em]'
            >
                A thermal imaging system for
                <span
                    className='text-[#0d0d0d]'
                >
                    {' '}monitoring buffalo udder health
                </span>
                {' '}using
                <span
                    className='text-[#FF7A3B]'
                >
                    {' '}infrared thermography</span>
                <span
                    className='text-[#0d0d0d]'
                >
                    —
                </span>
                <span
                    className='text-[#0d0d0d]/70'
                >
                    enabling early mastitis detection, temperature analysis, and session-based tracking
                </span>
                {' '}with offline support and seamless integration into veterinary workflows.
            </div>
        </div>
    )
}