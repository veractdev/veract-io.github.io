import PortfolioDetails from "../components/portfolioDetails";
import Footer from "../components/footer";
import TopnavBar from "../components/topnavbar";
import Tab from "../components/tab";

const Page = () => {
    return <div>
        <TopnavBar />
        <div className="pt-20">
            <Tab />
        </div>
        
        <PortfolioDetails />
        <Footer />
    </div>
};



export default Page;