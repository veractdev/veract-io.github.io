"use client";
import { baseUrl, LandingPageData } from "@/lib/custom_data";
import React, { useEffect, useState } from "react";

export default function About_Us() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    loaded && (
      <div className="w-full h-max bg-[#0D0D0D] flex items-center justify-center pb-[6.188rem] relative z-20">
        <div className="w-full h-[24.5rem] bg-[#030810] relative rounded-[36px] overflow-hidden">
          <img loading="lazy"
            src={`${baseUrl}/Images/LandingPage/AboutUs/about_us_bg.png`}
            alt="placeholder image"
            className="absolute top-0 object-center object-cover w-full h-full rounded-[36px]"
          />

          {/* Roaming Balls */}
          <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
            <div className="animated-orb orb-path-client" />
            <div className="animated-orb orb-path-industry" />
            <div className="animated-orb orb-path-project" />
            <div className="animated-orb orb-path-found" />
          </div>

          {/* Grid Content Centered */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="syneFont grid text-white gap-y-10 gap-x-0 lg:gap-x-22 md:gap-x-22 grid-cols-2 md:grid-cols-4 place-items-center px-4 sm:px-8">
              {LandingPageData.aboutUs.achievementsList.map(
                (category, index) => (
                  <div
                    key={index}
                    className="flex flex-col lg:gap-[20px] md:gap-[20px] items-center"
                  >
                    <div className="md:text-[54px] lg:text-[54px] text-[32px] sm:text-[10px ] tracking-[-1.9px] lg:leading-[50px] md:leading-[50px] text-center">
                      {category.numbers}
                    </div>
                    <div className="lg:text-[32px] md:text-[32px] text-[24px] tracking-[-1.9px] leading-[32px] lg:leading-[50px] md:leading-[50px] text-center text-wrap">
                      {category.description}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
