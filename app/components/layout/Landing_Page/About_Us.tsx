"use client";
import { LandingPageData } from "@/lib/custom_data";
import React, { useEffect, useState } from "react";

export default function About_Us() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    loaded && (
      <div className="w-full h-max bg-[#0D0D0D] flex items-center justify-center pb-[6.188rem] relative z-20">
        <div className="w-[100%] h-[24.5rem] bg-[#030810] relative rounded-[36px]">
          <img
            src="/Images/LandingPage/AboutUs/about_us_bg.png"
            alt="placeholder image"
            className="absolute top-0 object-center object-cover w-[100%] h-[100%] rounded-[36px]"
          />
          <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
            <div className="roaming-ball1" />
            <div className="roaming-ball2" />
            <div className="roaming-ball3" />
            <div className="roaming-ball4" />
            <div className="roaming-ball2" />
            <div className="roaming-ball3" />
          </div>

          <div className="syneFont w-full h-full text-white flex items-center justify-evenly relative gap-[2rem] flex-wrap">
            {LandingPageData.aboutUs.achievementsList.map((category, index) => (
              <div
                key={index}
                className="flex flex-col lg:gap-[20px] md:gap-[20px] items-center w-[30%]"
              >
                <div className="md:text-[54px] lg:text-[54px] text-[32px] tracking-[-1.9px] lg:leading-[50px] md:leading-[50px] text-center">
                  {category.numbers}
                </div>
                <div className="lg:text-[32px] md:text-[32px] text-[26px] tracking-[-1.9px] leading-[32px] lg:leading-[50px] md:leading-[50px] text-center text-wrap">
                  {category.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
