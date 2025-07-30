"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Banner from "./components/layout/Landing_Page/Banner";
import ShowReel from "./components/layout/Landing_Page/ShowReel";
import About_Us from "./components/layout/Landing_Page/About_Us";
import Advantages from "./components/layout/Landing_Page/Advantages";
import We_Work_With from "./components/layout/Landing_Page/We_Work_With";
import Testimonials from "./components/layout/Landing_Page/Testimonials";
import Footer from "./components/layout/Landing_Page/Footer";
import LenisProvider from "./LenisProvider";
import Services from "./components/layout/Landing_Page/Services";
import { baseUrl } from "@/lib/custom_data";
// import FAQ from "./components/layout/Landing_Page/FAQ";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loader, setLoader] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const preloadImages = [
    `${baseUrl}/Images/LandingPage/Advantages/img1.webp`,
    `${baseUrl}/Images/LandingPage/Advantages/img2.jpg`,
    `${baseUrl}/Images/LandingPage/Advantages/img3.webp`,
    `${baseUrl}/Images/LandingPage/Advantages/img4.webp`,
  ];

  useEffect(() => {
    requestAnimationFrame(() => {
      setLoader(true);
    });
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem("footer-landing-page");
    if (savedScrollPosition) {
      setTimeout(() => {
        // Restore the saved scroll position
        const scrollPosition = parseInt(savedScrollPosition);
        if (!isNaN(scrollPosition)) {
          window.scrollTo(0, scrollPosition);
        }
        sessionStorage.removeItem("footer-landing-page");
      }, 100);
    }
  }, []);

  useEffect(() => {
    if (loader && containerRef.current && sessionStorage.getItem("services") === "true") {
      setTimeout(() => {
        containerRef.current?.scrollIntoView({
          behavior: "instant",
          block: "start",
        });
        sessionStorage.removeItem("services");
      }, 100);
    }
  }, [loader]);

  return (
    <LenisProvider>
      {loader && (
        <div className="w-full flex flex-col items-center justify-center bg-primaty-text select-none  ">
          {preloadImages.map((image, index) => (
            <link key={index} rel="preload" as="image" href={image} />
          ))}
          <Navbar />
          <Banner />
          <ShowReel />
          <About_Us />
          <Advantages />
          <div
            ref={containerRef}
            className="w-full"
          >
            <Services />
          </div>
          <We_Work_With />
          <Testimonials />
          {/* <FAQ faq_props={LandingPageData.faq} /> */}
          <Footer ref={footerRef} sessionId={"footer-landing-page"} />
        </div>
      )}
    </LenisProvider>
  );
}
