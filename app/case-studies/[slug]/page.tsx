import Navbar from "../../components/layout/Navbar";
import Casestudy_Banner from "../../components/layout/Casestudy/Casestudy_Banner";
import Casestudy_ShowReel from "../../components/layout/Casestudy/Casestudy_ShowReel";
import Casestudy_Description from "../../components/layout/Casestudy/Casestudy_Description";
import CaseStudy_Challenges from "../../components/layout/Casestudy/CaseStudy_Challenges";
import UserServices from "../../components/layout/Casestudy/Casestudy_UserServices";
import Casestudy_Key_Features from "../../components/layout/Casestudy/Casestudy_Key_Features";
import FAQ from "../../components/layout/Landing_Page/FAQ";
import Footer from "../../components/layout/Landing_Page/Footer";
import { notFound } from "next/navigation";
import { getCaseStudyDataBySlug } from "@/lib/cms";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  let caseStudyData = await getCaseStudyDataBySlug(slug);
  if (!caseStudyData) {
    return notFound();
  }
  let data = caseStudyData.data[0];
  console.log(data);
  return (
    // <LenisProvider>
    // data && loaded && (
      <div className="w-screen flex items-center justify-center flex-col bg-primary-text">
        <Navbar />
        <Casestudy_Banner banner_props={data.banner} />
        <Casestudy_ShowReel showreel_props={data.showreel} />
        <Casestudy_Description description_props={data.description} />
        <CaseStudy_Challenges challenges_props={data.challenges} />
        <UserServices user_services_props={data.services} />
        <Casestudy_Key_Features key_features_props={data.key_features} />
        {/* <Casestudy_Testimonial testimonial_props={data.testimonials} /> */}
        <FAQ faq_props={data.faq} />
        <Footer sessionId={'footer-case-studies-slug'} />
      </div>
    // )
    // </LenisProvider>
  );
}
