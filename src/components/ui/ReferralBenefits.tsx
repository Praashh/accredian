import EnableSwitch from "./EnableSwitch"
import ProductMenu from "./ProducMenu"
import ContentTable from "./Table"

const HowToReferContent = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center pt-6 md:pt-10 text-xl md:text-2xl lg:text-3xl">
        What Are The <span className="font-semibold text-[#1A73E8]">Referral Benefits?</span>
      </h1>
      
      <div className="flex justify-center mt-4 md:mt-6">
        <EnableSwitch />
      </div>
      
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-6 lg:gap-8 mt-6 md:mt-10">
        <div className="w-full lg:w-auto">
          <ProductMenu />
        </div>
        <div className="w-full lg:w-1/2">
          <ContentTable />
        </div>
      </div>
    </div>
  )
}

export default HowToReferContent