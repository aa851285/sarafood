import React from "react";
import Image from "next/image";

import HomeMenu from "./components/HomeMenu";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <div >
      {/** Header Slider */}


      <div className="flex items-start content-start m-auto -mt-[9.5rem] " style={{
    backgroundImage: `url("/background-burgers-home-top.jpeg")`,
    zIndex: -50,
    height: "700px"
  }}>
    <div className="container flex flex-col items-start content-start m-auto">
    <h1 className="bg-[#682d0b] p-2">Welcome To Sara's Kitchen</h1>
    <h1 className="text-[80px] font-bold leading-tight font-jameel w-1/2">
        Where Quality Meets Home-Cooked <br></br>Perfection!{" "}
      </h1>
      <button className='p-2 text-sm text-white bg-red-700'>Order Now</button>
    </div>
      
      </div>

      {/** Ending SLider */}

<HomeMenu />
<CallToAction />

<HomeMenu />

<CallToAction />

<HomeMenu />

</div>
  );
}
