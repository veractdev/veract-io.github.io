"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { baseUrl } from "@/lib/custom_data";
import Navbar from "./components/layout/Navbar";

export default function NotFound() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    loaded && (
      <div className="w-full h-[100vh] relative overflow-auto flex items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          controls={false}
          playsInline
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source
            src={`${baseUrl}/Agent/Footer/footer-video.mp4`}
            type="video/mp4"
          />
        </video>

        {/* Page Content */}
        <div className="w-full h-max flex flex-col items-center pb-[10rem]">
          <Navbar />
          {/* <div className="flex flex-row gap-[0.75rem] items-center justify-center shadow-[0px_0px_0px_1px_#FFFFFF0D_inset] rounded-[0.625rem] backdrop-blur-[0.625rem] pl-[0.375rem] pb-[0.375rem] pr-[0.375rem]">
            <div className="uppercase bg-[#0055FE] rounded-[0.375rem] shadow-[0px_0px_0px_2px_#FFFFFF26_inset] dmSansFont text-[0.75rem] text-white font-bold leading-[0.625rem] -tracking-[0.031rem] pl-[0.625rem] pt-[0.563rem] pr-[0.625rem] pb-[0.625rem]">
              oops
            </div>
            <div className="dmSansFont text-[1rem] text-white font-normal leading-[1.625rem] -tracking-[0.031rem]">
              Page Not Found
            </div>
          </div> */}
          <div className="pt-0 lg:pt-[12.5rem] flex flex-col items-center justify-center dmSansFont text-[3.5rem] md:text-[5.375rem] lg:text-[5.375rem] text-white font-normal leading-[3.438rem] md:leading-[5.625rem] lg:leading-[5.625rem] -tracking-[0.238rem] text-center mt-[2.125rem] pl-[1.875rem] pr-[1.875rem] lg:pl-0 lg:pr-0 md:pl-0 md:pr-0">
            <div>404 - Oops Page</div>
            <div>Not Found in Data.</div>
          </div>
          <div className="dmSansFont text-[1rem] text-[#FFFFFF]/60 font-normal leading-[1.625rem] -tracking-[0.013rem] text-center mt-[1.625rem] w-[80%] lg:w-[40%] md:w-[60%]">
            Oops! The web page you’re looking for doesn’t exist. Please click the
            below button to get back to the home.
          </div>
          <div
            onClick={() => {
              router.push("/");
            }}
            className="bg-primary-blue rounded-[2.5rem] page-not-found-CTA-boxShadow dmSansFont text-[1rem] text-white font-medium leading-[1.625rem] -tracking-[0.031rem] mt-[2.375rem] cursor-pointer pl-[1.125rem] pt-[0.625rem] pb-[0.625rem] pr-[1.125rem]"
          >
            Go To Homepage
          </div>
        </div>
      </div>
    )
  );
}
