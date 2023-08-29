import React from "react";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import {BiSolidMap} from 'react-icons/bi'

function TopBar() {
  return (
    <div className="p-2 bg-[#682d0b]">
      {/** Top Bar Section div */}
      <div className="container flex flex-col items-center content-center justify-between m-auto sm:flex-row xl:flex-row 2xl:flex-row lg:flex-row">
        <div className="flex flex-col items-center space-x-2 sm:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
          {/**1 colmn left */}

          {/** 1st rows */}
          <div className="flex flex-row items-center content-center space-x-1">
            <MdEmail />
            <span>info@saras-kitchen.com</span>
          </div>
          <div className="flex flex-row items-center content-center space-x-1">
            <BsTelephoneFill />
            <span>+92 312 262 9392</span>
          </div>
        </div>
        <div className="flex flex-row items-center content-center space-x-1 sm:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
          {/** 2nd colmn right */}
          <BiSolidMap />
          <span>Phase 2 Ext. DHA</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
