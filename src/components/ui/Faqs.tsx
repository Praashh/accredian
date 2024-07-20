import { Button } from "@mui/material";
import img from "../../assets/hero.png";
import moneyLeft from "../icons/money-left.svg";
import moneyRight from "../icons/money-right.svg"
import moneyRightCenter from "../icons/money-right.svg"
import moneyRightDowb from "../icons/money-right-down.svg"
import centerDown from "../icons/center-down.svg"

const FAQs = () => {
    return (
        <div className="relative shadow-lg flex flex-col-reverse lg:flex-row items-center shadow-slate-500 w-[90vw] lg:w-[80vw] xl:w-[60vw] h-auto lg:h-[60vh] bg-[#1A73E826] rounded-3xl overflow-hidden p-4 lg:p-8">
            <img src={moneyLeft} alt="moneyleft" className="absolute left-0 top-11 lg:left-3 lg:top-0 z-0 w-1/4 lg:w-auto" />
            <div className="flex flex-col justify-center items-start gap-4 lg:gap-7 w-full lg:w-1/2 px-4 lg:px-16 mb-8 lg:mb-0 relative z-10">
                <h2 className="text-2xl lg:text-4xl xl:text-5xl text-[rgb(26,32,44)] font-bold">24/7 FAQs</h2>
                <div>
                    <p className="text-lg lg:text-2xl xl:text-3xl text-[#1A202C]">Get a chance to win</p>
                    <p className="text-lg lg:text-2xl xl:text-3xl text-[#1A202C]">up-to <span className="text-xl lg:text-3xl xl:text-4xl text-[#1A73E8] font-bold">Rs.15,000</span></p>
                </div>
                <Button variant="contained" className="mt-4 lg:mt-0">Refer Now</Button>
            </div>
            <div className="w-full lg:w-1/2 h-48 lg:h-full mb-8 lg:mb-0 relative">
                <img src={img} alt="hero" className="w-full h-full md:h-[56vh] md:mr-20 object-cover rounded-3xl" />
            </div>
            <img src={moneyRight} alt="moneyright" className="absolute right-0 top-11 lg:right-0 lg:-top-10 z-0 w-1/4 lg:w-auto" />
            <img src={moneyRightDowb} alt="moneyright" className="absolute right-0 bottom-11 lg:right-14 lg:top-[40%] z-0 w-1/5 lg:w-auto" />
            <img src={centerDown} alt="moneyright" className="absolute left-1/2 bottom-4 lg:left-[40%] lg:top-[68%] z-10 w-1/5 lg:w-auto" />
            <img src={moneyRightCenter} alt="moneyright" className="absolute left-1/2 top-11 lg:left-[51%] lg:top-[6%] -z-10 w-1/5 lg:w-auto" />
        </div>
    );
};

export default FAQs;
