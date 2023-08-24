import React from "react";
import Image from "next/image";
import headSliderImg from "./assets/header-img2.webp";
import HomeMenu from "./components/HomeMenu";

export default function Home() {
  return (
    <div className="relative items-start content-center Header Slider">
      <Image src={headSliderImg} className="w-full h-[700px]" />

      <div className="absolute flex flex-row justify-between w-4/5 p-4 text-3xl text-white transform -translate-x-1/2 bg-black bg-opacity-50 rounded-lg xl:top-32 2xl:top-31 top-1 sm:top-32 lg:top-32 left-1/2">
        {/**inside row */}
        <div className="items-start content-start space-y-5">
          <h1 className="text-[25px] font-poppins">
            Welcome to Sara's Kitchen
          </h1>
          <h1 className="text-[50px] font-bold leading-10 font-jameel">
            Where Quality Meets Home-Cooked <br></br>Perfection!{" "}
          </h1>
          <p className="text-[16px] leading-5">
            Indulge in the exquisite flavors and heartwarming aromas of our
            culinary haven, where every dish is a labor of love crafted within
            the comforting confines of home. At Sara's Kitchen, we take pride in
            offering you a tantalizing journey through the authentic tastes of
            homemade cuisine. Our commitment to quality is unwavering; each
            plate we serve encapsulates the essence of traditional recipes
            passed down through generations.
          </p>
        </div>

       
   
      </div>

      <HomeMenu />
    </div>
  );
}
