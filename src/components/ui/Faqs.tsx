import { Button } from "@mui/material";
import img from "../../assets/hero.png";
import moneyLeft from "../icons/money-left.svg";
import moneyRight from "../icons/money-right.svg"
import moneyRightCenter from "../icons/money-right.svg"
import moneyRightDowb from "../icons/money-right-down.svg"
import centerDown from "../icons/center-down.svg"

const FAQs = () => {
    return (
        <div className="relative shadow-lg flex flex-col-reverse md:flex-row items-center  shadow-slate-500 md:w-[60vw] w-[90vw] h-[50vh] md:h-[60vh] bg-[#1A73E826] rounded-3xl">
            <img src={moneyLeft} alt="moneyleft" className="absolute left-0 top-11 md:left-3 md:top-0 z-0" />

            <div className="flex flex-col justify-center items-start gap-2 md:gap-7 h-full w-[48%] px-16 mr-8">
                <h2 className="text-lg md:text-5xl text-[rgb(26,32,44)] font-bold">24/7 FAQs Support</h2>
                <div><p className="text-lg text-[#1A202C] md:text-3xl">Get a chance to win</p>
                    <p className="text-lg text-[#1A202C] md:text-3xl">up-to <span className="text-lg md:text-4xl text-[#1A73E8]">Rs.15,000</span></p></div>
                <Button variant="contained">Refer Now</Button>
            </div>
            <img src={img} alt="hero" className="w-[70%] h-[70%] md:w-[100%] md:h-[100%] object-cover rounded-3xl relative top-0 md:top-2 z-10" />
            <img src={moneyRight} alt="moneyright" className="absolute right-0 top-11 md:right-0 md:-top-10 z-0" />
            <img src={moneyRightDowb} alt="moneyright" className="absolute right-0 top-11 md:right-14 md:top-[40%] z-0" />
            <img src={centerDown} alt="moneyright" className="absolute right-0 top-11 md:left-[40%] md:top-[68%] z-10" />
            <img src={moneyRightCenter} alt="moneyright" className="absolute right-0 top-11 md:left-[51%] md:top-[6%] -z-10" />    </div>
    );
};

export default FAQs;
