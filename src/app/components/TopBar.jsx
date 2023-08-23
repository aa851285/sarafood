import React from 'react'

function TopBar() {
  return (
    <div className='p-2 bg-red-900'>
        {/** Top Bar Section div */}
        <div className='container flex flex-row justify-between m-auto '>
            {/** 1st rows */}
            <div>
                Email: info@saraskitchen.com
            </div>
            <div>
                Phone: +92 312 262 9392
            </div>
        </div>
    </div>
  )
}

export default TopBar