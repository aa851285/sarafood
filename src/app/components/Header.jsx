import Image from "next/image";
import Link from "next/link";
import React from "react";
import { logo } from "../assets";
import {TiSocialFacebook} from "react-icons/ti"
import {AiFillInstagram,AiFillYoutube} from "react-icons/ai"

function Header() {
  return (
    
    <div className="container z-0 flex flex-row items-center p-3 m-auto space-x-10">
      <div>
      
        <Image src={logo} className="w-32" />
      </div>
      <div>
        <ul className="flex flex-col space-x-6 text-xl sm:flex-row lg:flex-row xl:flex-row 2xl:flex-row font-extralight">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/menu">Menu</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div>
      <ul className="flex flex-row items-center space-x-2">
            <p className="text-lg">| Follow Us:</p>
          <li><TiSocialFacebook size={30} /></li>
          <li><AiFillInstagram size={30} /></li>
          <li><AiFillYoutube size={30} /></li>
          
          </ul>
      </div>
    </div>
  );
}

export default Header;
