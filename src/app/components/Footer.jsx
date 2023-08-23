import React from "react";

function Footer() {
  return (
    <div>
      <div className="container flex flex-col m-auto sm:flex-row xl:flex-row 2xl:flex-row">
        {/** Footer Columns */}

       
        <div className="p-5 sm:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 w-1/1">
          <h1 className="text-lg font-bold">Menus</h1>
          <p>
            Sara's Kitchen warmly welcomes you to indulge in the rich and
            flavorful culinary heritage of Karachi. Drawing inspiration from the
            bustling streets and vibrant markets of the city, we specialize in
            serving authentic home-cooked delights that capture the essence of
            traditional Pakistani cuisine.
          </p>
        </div>
        <div className="p-5 sm:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 w-1/1">
          <h1 className="text-lg font-bold">Menus</h1>
          <p>
            Sara's Kitchen warmly welcomes you to indulge in the rich and
            flavorful culinary heritage of Karachi. Drawing inspiration from the
            bustling streets and vibrant markets of the city, we specialize in
            serving authentic home-cooked delights that capture the essence of
            traditional Pakistani cuisine.
          </p>
        </div>
        <div className="p-5 sm:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 w-1/1">
          <h1 className="text-lg font-bold">Useful Links</h1>
          <p>
            Sara's Kitchen warmly welcomes you to indulge in the rich and
            flavorful culinary heritage of Karachi. Drawing inspiration from the
            bustling streets and vibrant markets of the city, we specialize in
            serving authentic home-cooked delights that capture the essence of
            traditional Pakistani cuisine.
          </p>
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
