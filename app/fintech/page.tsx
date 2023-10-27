import FinTech from "../components/fintech";
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
        <FinTech />
        {/* <Footer /> */}
    </div>
};



export default Page;