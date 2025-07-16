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

export default function Page() {
  const [loader, setLoader] = useState(false);
  const preloadImages = [
    "/Images/LandingPage/Advantages/img1.webp",
    "/Images/LandingPage/Advantages/img2.jpg",
    "/Images/LandingPage/Advantages/img3.webp",
    "/Images/LandingPage/Advantages/img4.webp",
  ];

  useEffect(() => {
    requestAnimationFrame(() => {
      setLoader(true);
    });
  }, []);

  return (
    <LenisProvider>
      {loader && (
        <div className="w-full flex flex-col items-center justify-center bg-primaty-text select-none  ">
          {preloadImages.map((image, index) => (
            <link
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
          {/* <Services /> */}
          <We_Work_With />
          <Testimonials />
          <Footer />
        </div>
      )}
    </LenisProvider>
  );
}
