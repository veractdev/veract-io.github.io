"use client"
import Image from 'next/image'
import Modal from './components/modal';
import TopnavBar from './components/topnavbar';
import Banner from './components/banner';
import Clients from './components/clients';
import Services from './components/services';
import Casestudies from './components/casestudies';
import Testimonials from './components/testimonials';
import Contacts from './components/contacts';
import VeractDetails from './components/veractDetails';
import Footer from './components/footer';
import FoundersDesk from './components/foundersDesk';
import { useEffect } from 'react';
// import { useRouter } from 'next/router';
import { usePathname, useSearchParams,useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  console.log(searchParams?.get("sectionId"));

  const scrollToElement=(sectionId:string)=>{
    const section = document.getElementById(sectionId);

    
    console.log("ROUTER");

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    
    
    
  }
    
  }

  useEffect(() => {
    // if(router.query){
let scroll =   searchParams?.get("sectionId");
  if(scroll){
    scrollToElement(scroll);
    window.history.replaceState(null, '', '/')

  

  }

    //}
}, []);

    return (
        <>
            <div id="Home">
              

          {/* <div className=" custom-cursor"> */}
            {/* <CustomCursor /> */}
            <div className="mainPage fontFamily flex">
              <TopnavBar />
              <Banner />
            </div>
            <div>
            <Clients />
            </div>
            <div>
              <FoundersDesk />
            </div>
            <div >
            <Services />
            </div>
            <div  >
              <Casestudies />
            </div>
            <div >
              <Testimonials />
            </div>
            <div>
            <Contacts />
            </div>
            <div>
              {/* <Carousel/> */}
              < VeractDetails />
            </div>
            <div>
              < Footer/>
            </div>
          {/* </div> */}
        </div>
        </>
    )
}

export default Page;