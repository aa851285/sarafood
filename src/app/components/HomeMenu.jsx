"use client" // This line doesn't serve any purpose and can be removed.

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { biryaniImg } from '../assets'
import { GraphQLClient, gql } from 'graphql-request'; // Import the necessary modules for GraphQL.

const MY_QUERY = gql`
  query MyQuery {
    menu {
      menuTitle
      foodImage {
        url
      }
    }
  }
`;

function HomeMenu() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const client = new GraphQLClient(
      "https://api-ap-south-1.hygraph.com/v2/cllzct6pn050e01ug4fq69w44/master"
    );
    const fetchData = async () => {
      try {
        const response = await client.request(MY_QUERY); // Use `client.request` to send the GraphQL query.
        setData(response); // Set the response data in the state.
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
    <div className='container p-12 m-auto space-y-10 w-max'>
      <h1 className='text-3xl font-semibold text-center'>Homestyle Desi Cooking at its Best</h1>
      <h1 className='text-center'>~Food Menu~</h1>
      <div className='flex flex-wrap'>
        {data.menu.map((menuItem, index) => (
          <div key={index} className='w-1/3 p-4'> {/* Divide the row into 3 equal columns */}
            <Image src={menuItem.foodImage.url} className="rounded-md resize" width="500" height="400" />
            <h1 className='text-lg font-semibold'>{menuItem.menuTitle}</h1>
            <p>Karachi famous biryani 100% Homemade cuisine.</p>
            <button className='p-2 bg-red-500'>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
}

export default HomeMenu;
