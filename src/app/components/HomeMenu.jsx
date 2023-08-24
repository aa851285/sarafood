import Image from 'next/image'
import React from 'react'
import { biryaniImg } from '../assets'

function HomeMenu() {
  return (
    <div>
        
        <div className='container p-12 m-auto space-y-10 w-max'>
        {/** Start From this div */}
        <h1 className='text-2xl font-semibold text-center'>Our Menu</h1>
        <div className='flex flex-row space-x-3'>
            {/**row one */}
            <div>
                
                <Image src={biryaniImg} className="rounded-md w-96" />
                <h1 className='text-lg font-semibold'>Chicken Biryani</h1>
                <p>Karachi famous biryani 100% Homemade cruisine.</p>
             
            </div>
            <div>
         
            <Image src={biryaniImg} className="rounded-md w-96" />
            <h1 className='text-lg font-semibold'>Chicken Biryani</h1>
                <p>Karachi famous biryani 100% Homemade cruisine.</p>
            
            </div>
            <div>
          
            <Image src={biryaniImg} className="rounded-md w-96" />
            <h1 className='text-lg font-semibold'>Chicken Biryani</h1>
                <p>Karachi famous biryani 100% Homemade cruisine.</p>
               
            </div>
        </div>

        <div className='flex flex-row space-x-3'>
            {/**row one */}
            <div>
                
                <Image src={biryaniImg} className="rounded-md w-96" />
                <h1 className='text-lg font-semibold'>Chicken Biryani</h1>
                <p>Karachi famous biryani 100% Homemade cruisine.</p>
             
            </div>
            <div>
         
            <Image src={biryaniImg} className="rounded-md w-96" />
            <h1 className='text-lg font-semibold'>Chicken Biryani</h1>
                <p>Karachi famous biryani 100% Homemade cruisine.</p>
            
            </div>
            <div>
          
            <Image src={biryaniImg} className="rounded-md w-96" />
            <h1 className='text-lg font-semibold'>Chicken Biryani</h1>
                <p>Karachi famous biryani 100% Homemade cruisine.</p>
               
            </div>
        </div>
       
        </div>
    </div>
  )
}

export default HomeMenu