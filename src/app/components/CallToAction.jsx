import React from "react";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { BiSolidMap } from "react-icons/bi";

function CallToAction() {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url("/foodStrip.jpg")`,
        zIndex: -50,
        height: "auto",
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
       backgroundSize:'cover'
      }}
    >
      <div className="container flex flex-col items-start content-center p-4 m-auto ">
        <h1 className="text-3xl">Food is Just a Phone Call Away. Dial Now!</h1>

        <div className="flex flex-row content-center p-3 ">
          {/* Rows FOr phone & Button**/}
          <div>
            <button className="p-2 bg-red-500">Call Now</button>
          </div>
          <div className="flex flex-row items-center content-center p-3 space-x-2">
            <BsTelephoneFill />
            <span className="text-lg">+92 312 262 9392</span>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
