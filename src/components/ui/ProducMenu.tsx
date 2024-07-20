import  { useState } from "react";

const ProductMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const menuItems = [
    "Product Management",
    "Strategy & Leadership",
    "Business Management",
    "Fintech",
    "Senior Management",
    "Data Science",
    "Digital Transformation",
    "Business Analytics",
  ];

  return (
    <div className="w-64 bg-white shadow-md rounded-md overflow-hidden">
      <button className="w-full bg-blue-500 text-white py-2 px-4 text-left flex justify-between items-center">
        ALL PROGRAMS
        <span><Vector/></span>
      </button>
      <div>
        {menuItems.map((item, index) => (
            <>
          <button
            key={index}
            // @ts-ignore
            onClick={() => setActiveMenuItem(index)}
            className={`w-full py-2 px-4 text-left flex justify-between items-center ${
              activeMenuItem === index ? "bg-blue-100" : "bg-white"
            } hover:bg-blue-50`}
          >
            {item}
            <div><BlackVector/></div>
          </button>
          {menuItems.length-1 != index  && <svg width="229" height="1" viewBox="0 0 229 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.5H228" stroke="black" stroke-opacity="0.41" stroke-linecap="round"/>
</svg>}

        </>
        ))}
      </div>
    </div>
  );
};

export default ProductMenu;


const Vector = () =>{
    return (
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.64601 1.64599C1.69245 1.59943 1.74763 1.56249 1.80837 1.53728C1.86912 1.51207 1.93424 1.4991 2.00001 1.4991C2.06578 1.4991 2.1309 1.51207 2.19164 1.53728C2.25239 1.56249 2.30756 1.59943 2.35401 1.64599L8.35401 7.64599C8.40057 7.69244 8.43751 7.74761 8.46272 7.80836C8.48793 7.86911 8.5009 7.93423 8.5009 7.99999C8.5009 8.06576 8.48793 8.13088 8.46272 8.19163C8.43751 8.25237 8.40057 8.30755 8.35401 8.35399L2.35401 14.354C2.26012 14.4479 2.13278 14.5006 2.00001 14.5006C1.86723 14.5006 1.7399 14.4479 1.64601 14.354C1.55212 14.2601 1.49938 14.1328 1.49938 14C1.49938 13.8672 1.55212 13.7399 1.64601 13.646L7.29301 7.99999L1.64601 2.35399C1.59945 2.30755 1.5625 2.25237 1.5373 2.19163C1.51209 2.13088 1.49911 2.06576 1.49911 1.99999C1.49911 1.93423 1.51209 1.86911 1.5373 1.80836C1.5625 1.74761 1.59945 1.69244 1.64601 1.64599Z" fill="white" stroke="white" stroke-width="1.5"/>
</svg>

    )
}

const BlackVector = () =>{
    return (
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.26671 1.53235C1.29936 1.49961 1.33816 1.47363 1.38087 1.45591C1.42358 1.43818 1.46937 1.42906 1.51561 1.42906C1.56186 1.42906 1.60764 1.43818 1.65035 1.45591C1.69307 1.47363 1.73186 1.49961 1.76452 1.53235L5.98327 5.7511C6.01601 5.78375 6.04198 5.82255 6.05971 5.86526C6.07743 5.90797 6.08655 5.95376 6.08655 6C6.08655 6.04625 6.07743 6.09203 6.05971 6.13474C6.04198 6.17746 6.01601 6.21625 5.98327 6.24891L1.76452 10.4677C1.6985 10.5337 1.60897 10.5708 1.51561 10.5708C1.42225 10.5708 1.33272 10.5337 1.26671 10.4677C1.20069 10.4016 1.16361 10.3121 1.16361 10.2188C1.16361 10.1254 1.20069 10.0359 1.26671 9.96985L5.23725 6L1.26671 2.03016C1.23397 1.9975 1.20799 1.95871 1.19027 1.916C1.17254 1.87328 1.16342 1.8275 1.16342 1.78125C1.16342 1.73501 1.17254 1.68922 1.19027 1.64651C1.20799 1.6038 1.23397 1.565 1.26671 1.53235Z" fill="#3C4852" stroke="#3C4852" stroke-width="1.05469"/>
</svg>

    )
}
