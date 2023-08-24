import React from "react";

function Header() {
  return (
    
    <div className="container flex flex-row items-center justify-between p-3 m-auto">
      <div>
        <h1 className="text-5xl font-semibold ">Sara's Kitchen.</h1>
      </div>
      <div>
        <ul className="flex flex-col space-x-4 sm:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
          <li>Home</li>
          <li>About Us</li>
          <li>Menu</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
