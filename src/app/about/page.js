import React from "react";

export default function About() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container flex flex-col items-center mx-auto">
        <h2 className="mb-8 text-3xl font-semibold text-gray-800">About Us</h2>

        <div className="md:flex md:space-x-8">
          <div className="md:w-1/2">
            <img
              src="/aboutPic.jpeg"
              alt="About Us Image"
              className="object-cover w-full h-auto rounded-lg shadow-lg md:h-64"
            />
          </div>
          <div className="mt-4 md:w-1/2 md:mt-0">
            <p className="leading-relaxed text-gray-600">
              "Sara's Kitchen - Homemade Food in Karachi offers delectable
              home-cooked meals that will satisfy your taste buds and warm your
              heart. Our dishes are prepared with love and care, ensuring a
              delightful dining experience. From mouthwatering classics to
              unique culinary creations, Sara's Kitchen brings the essence of
              homemade goodness to every bite.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Indulge in the flavors of Karachi with our thoughtfully crafted
              menu. We take pride in serving you the finest homemade food, made
              with the freshest ingredients and a dash of passion. Whether
              you're craving comfort food or exploring new culinary delights,
              Sara's Kitchen has something to please every palate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
