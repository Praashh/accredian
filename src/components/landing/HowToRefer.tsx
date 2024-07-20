import { Button } from "@mui/material"
import img from "../../assets/ss.png"

const HowToRefer = () => {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center px-4">
      <h2 className="flex justify-center pt-10 items-center text-xl md:text-2xl lg:text-3xl text-center">
        How Do I <span className="text-[#1A73E8] ml-2">Refer?</span>
      </h2>
      <div className="w-full max-w-4xl mt-2 md:mt-0">
        <img 
          src={img} 
          alt="Referral process" 
          className="object-contain w-full h-auto" 
        />
      </div>
      <Button 
        variant="contained" 
        className="mt-8 px-6 py-3 text-base md:text-lg"
      >
        Refer Now
      </Button>
    </div>
  )
}

export default HowToRefer