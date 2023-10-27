import Footer from "../components/footer";
import Health from "../components/health";
import MachineVision from "../components/machineVision";
import Tab from "../components/tab";
import TopnavBar from "../components/topnavbar";

const Page = () => {
    return <div>
        <TopnavBar/>
        <div className="pt-20">
            <Tab />
        </div>
        <MachineVision />
        {/* <Footer /> */}
    </div>
};



export default Page;