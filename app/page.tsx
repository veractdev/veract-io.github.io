"use client";
import React, { useEffect, useState } from "react";
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

export default function Page() {
  const [loader, setLoader] = useState(false);
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
    }
  }, []);

  return (
    <LenisProvider>
      {loader && (
        <div className="w-full flex flex-col items-center justify-center bg-primaty-text select-none  ">
          {preloadImages.map((image, index) => (
            <link
              key={index}
              rel="preload"
              as="image"
              href={image}
            />
          ))}
          <Navbar />
          <Banner />
          <ShowReel />
          <About_Us />
          <Advantages />
          <Services />
          <We_Work_With />
          <Testimonials />
          <Footer />
        </div>
      )}
    </LenisProvider>
  );
}
