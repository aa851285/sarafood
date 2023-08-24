import React from "react";
import {TiSocialFacebook} from "react-icons/ti"
import {AiFillInstagram,AiFillYoutube} from "react-icons/ai"

function Footer() {
  return (
    <div className="bg-red-950">
      <div className="container flex flex-col m-auto sm:flex-row xl:flex-row 2xl:flex-row">
        {/** Footer Columns */}

       
        <div className="p-5 sm:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 w-1/1">
          <h1 className="text-3xl font-bold">About Sara's Kitchen</h1>
          <p>
            Sara's Kitchen warmly welcomes you to indulge in the rich and
            flavorful culinary heritage of Karachi. Drawing inspiration from the
            bustling streets and vibrant markets of the city, we specialize in
            serving authentic home-cooked delights that capture the essence of
            traditional Pakistani cuisine.
          </p>
          <ul className="flex flex-row items-center space-x-2">
            <p className="text-lg">Follow Us:</p>
          <li><TiSocialFacebook size={30} /></li>
          <li><AiFillInstagram size={30} /></li>
          <li><AiFillYoutube size={30} /></li>
          
          </ul>

        </div>
        <div className="p-5 sm:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 w-1/1">
          <h1 className="text-lg font-bold">Menus</h1>
         <ul>
          <li>Desi Foods</li>
          <li>Chineese Foods</li>
          <li>Italian Foods</li>
          <li>American Foods</li>
          <li>Turkish Foods</li>
          </ul>
        </div>
        <div className="p-5 sm:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 w-1/1">
          <h1 className="text-lg font-bold">Useful Links</h1>
          <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Menus</li>
          <li>Traditional Foods</li>
          <li>Our Speciality</li>
          </ul>
        </div>
        <div className="p-5 sm:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 w-1/1">
          <h1 className="text-lg font-bold">Company Info</h1>
          <ul>
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>Food Delivery</li>
          <li>Complain</li>
          <li>Get Help</li>
          </ul>
        </div>
      </div>

      <div>
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Sara's Kitchen. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
