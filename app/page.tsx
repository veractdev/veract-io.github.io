import Image from 'next/image'
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

const Page = () => {
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