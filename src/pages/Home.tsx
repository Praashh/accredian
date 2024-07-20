import FAQSection from "../components/landing/FAQSection";
import Footer from "../components/landing/Footer";
import HowToRefer from "../components/landing/HowToRefer";
import HeroMenubar from "../components/ui/HeroMenubar";
import HowToReferContent from "../components/ui/ReferralBenefits";

const Home = () => {
  return (
    <div className=" mt-5 h-screen w-full">
        <div className="md:p-10 p-6"><HeroMenubar/></div>
        <div className="bg-[#EEF5FF] mt-10 mb-10"><HowToRefer/></div>
        <div><HowToReferContent/></div>
        <div><FAQSection/></div>
        <Footer/>
    </div>
  )
}

export default Home;