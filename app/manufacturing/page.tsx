import Footer from "../components/footer";
import Health from "../components/health";
import Manufacturing from "../components/manufacturing";
import Tab from "../components/tab";
import TopnavBar from "../components/topnavbar";

const Page = () => {
    return <div>
        <TopnavBar/>
        <div className="pt-20">
            <Tab />
        </div>
        <Manufacturing />
        {/* <Footer /> */}
    </div>
};



export default Page;