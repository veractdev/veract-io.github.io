import AgriTech from "../components/agritech";
import Footer from "../components/footer";
import Health from "../components/health";
import Tab from "../components/tab";
import TopnavBar from "../components/topnavbar";

const Page = () => {
    return <div>
        <TopnavBar/>
        <div className="pt-20">
            <Tab />
        </div>
        <AgriTech />
        {/* <Footer /> */}
    </div>
};



export default Page;