'use client';
import '../styles/cube.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { count } from 'console';
import { motion } from 'framer-motion';


export default function Banner() {
    return (
        <div className='bannerWidth flex flex-row  items-center justify-center'>
            <div className="flex flex-col items-center justify-center customTextLandingPage">
                {/* <div className="pl-8 flex flex-col customTextLandingPage md:gap-6 fontFamily"> */}
                {/* <div>Custom</div> */}
                {/* <div className=" whitespace-nowrap"  ><span className='WebAnimation'>Web</span> <span className='highlight-pipe'><span className='pipeMobile'>|</span></span><span className="MobileAnimation"> Mobile </span><span className='highlight-pipe'><span className="pipeAi">|</span></span><span className='aiAnimation'> AI Solutions</span></div> */}
                <div className=" whitespace-nowrap paddingWebContent"  >Web <span className='highlight-pipe'>| </span> Mobile <span className='highlight-pipe'>|</span> AI & ML </div>
                <div className='mobileContentBanner'>
                    <div className="  flex flex-col pt-32">
                        <div className="mobileBannerText flex items-center justify-center"><span style={{ color: "white" }}>Custom</span></div>
                        <div className="mobileBannerText flex items-center justify-center whitespace-nowrap"><span style={{ color: "white" }}>software development</span></div>
                        <div className="mobileBannerText flex items-center justify-center">as a service</div>
                        {/* <div className="mobileBannerText whitespace-nowrap flex items-center justify-center">as a Service  </div> */}
                    </div>
                </div>
                <div className='spacer' ></div>
                <div className=" pt-10 md:gap-2">
                    <div className='typed'>
                        <div className='happyPath'>Custom software development as a service</div>
                        {/* <div className='happyPathMobile'>Crafting your happy path from concept to code</div> */}
                    </div>

                </div>


            </div>

        </div>

    );
}
