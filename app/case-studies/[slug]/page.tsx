"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import UserServices from "../../components/layout/Casestudy/Casestudy_UserServices";
import Casestudy_Banner from "../../components/layout/Casestudy/Casestudy_Banner";
import Casestudy_ShowReel from "../../components/layout/Casestudy/Casestudy_ShowReel";
// import Casestudy_Testimonial from '../../components/layout/Casestudy/Casestudy_Testimonial';
import Casestudy_Key_Features from "../../components/layout/Casestudy/Casestudy_Key_Features";
import CaseStudy_Challenges from "../../components/layout/Casestudy/CaseStudy_Challenges";
import Casestudy_Description from "../../components/layout/Casestudy/Casestudy_Description";
import LenisProvider from "@/app/LenisProvider";
import { caseStudyData } from "@/lib/custom_data";
import FAQ from "@/app/components/layout/Landing_Page/FAQ";
import Footer from "@/app/components/layout/Landing_Page/Footer";
import { isValidSlug } from "@/lib/utils";
import { notFound } from "next/navigation";
// import Casestudy_Testimonial from '@/app/components/layout/Casestudy/Casestudy_Testimonial';

type Props = {
  params: Promise<{ slug: string }>;
};

export default function Page({ params }: Props) {
  const { slug } = React.use(params);
  const data = caseStudyData[slug as keyof typeof caseStudyData];
  const [loaded, setLoaded] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(true);
    setTimeout(() => {
      if (sessionStorage.getItem("footer-case-studies-slug") === "true") {
        return;
      } else {
        window.lenis?.scrollTo(0);
      }
    }, 500);
    const savedScrollPosition = sessionStorage.getItem("footer-case-studies-slug");
    if (savedScrollPosition) {
      setTimeout(() => {
        // Restore the saved scroll position
        const scrollPosition = parseInt(savedScrollPosition);
        if (!isNaN(scrollPosition)) {
          window.scrollTo(0, scrollPosition);
        }
        sessionStorage.clear()
      }, 700);
    }
  }, [loaded]);

  if (!isValidSlug(slug)) {
    return notFound();
  }

  return (
    <LenisProvider>
      {data && loaded && (
        <div className="w-screen flex items-center justify-center flex-col bg-primary-text">
          <Navbar />
          <Casestudy_Banner banner_props={data.banner} />
          <Casestudy_ShowReel showreel_props={data.showReel} />
          <Casestudy_Description description_props={data.description} />
          <CaseStudy_Challenges challenges_props={data.challenges} />
          <UserServices user_services_props={data.services} />
          <Casestudy_Key_Features key_features_props={data.key_features} />
          {/* <Casestudy_Testimonial testimonial_props={data.testimonials} /> */}
          <FAQ faq_props={data.faq} />
          <Footer ref={footerRef} sessionId={'footer-case-studies-slug'} />
        </div>
      )}
    </LenisProvider>
  );
}
