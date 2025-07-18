'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/layout/Navbar';
import UserServices from '../../components/layout/Casestudy/Casestudy_UserServices';
import Casestudy_Banner from '../../components/layout/Casestudy/Casestudy_Banner';
import Casestudy_ShowReel from '../../components/layout/Casestudy/Casestudy_ShowReel';
// import Casestudy_Testimonial from '../../components/layout/Casestudy/Casestudy_Testimonial';
import Casestudy_Key_Features from '../../components/layout/Casestudy/Casestudy_Key_Features';
import CaseStudy_Challenges from '../../components/layout/Casestudy/CaseStudy_Challenges';
import Casestudy_Description from '../../components/layout/Casestudy/Casestudy_Description';
import LenisProvider from '@/app/LenisProvider';
import { caseStudyData } from '@/lib/custom_data';

type Props = {
  params: Promise<{ slug: string }>
}

export default function Page({ params }: Props) {
  const { slug } = React.use(params);
  const data = caseStudyData[slug as keyof typeof caseStudyData];
  const [loaded, setLoaded] = useState(false);
 
  useEffect(() => {
    setLoaded(true);
    setTimeout(() => {
    window.lenis?.scrollTo(0);
    }, 500);
  }, [loaded]);
 
  return (
      <LenisProvider>
        <div className='w-screen flex items-center justify-center flex-col bg-primary-text'>
          <Navbar />
        <Casestudy_Banner banner_props={data.banner} />
        <Casestudy_ShowReel showreel_props={data.showReel} />
        <Casestudy_Description description_props={data.description} />
        <CaseStudy_Challenges challenges_props={data.challenges} />
        <UserServices user_services_props={data.services} />
        <Casestudy_Key_Features key_features_props={data.key_features} />
        {/* <Casestudy_Testimonial testimonial_props={data.testimonials} /> */}
      </div>
    </LenisProvider>
  );
}