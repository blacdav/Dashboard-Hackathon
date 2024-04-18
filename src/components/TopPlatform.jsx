import React, { useState } from 'react'
import { Platforms } from '../Data'
// import form from '../images/'

const TopPlatform = ({display}) => {
  
  // const [style, useStyle] = useState();

  return (
    <div className={`${display ? 'bg-tertiary' : 'bg-black text-tertiary'} p-5 rounded-lg border border-light mb-5 ml-5 lg:ml-0 -mr-5 lg:mr-5`}>
      <div className='flex justify-between mb-4'>
        <h1>Top Platform</h1>
        <p className='text-primary'>See All</p>
      </div>

      {Platforms.map((index) => {
        return(
          <div className='mb-3' key={index.id}>
            <p className='font-bold'>{index.name}</p>
            {/* <div className='my-2 w-full h-2 bg-light rounded-full'>
              <div className='w-[50%] h-2 bg-blue rounded-full'></div>
            </div> */}
            <progress id='file' value={index.percent * 3.5} max={100} className='h-3 w-full bg-primary rounded-full'>70</progress>
            <div className='flex justify-between text-xs'>
              <p>${index.price}</p>
              <p>+{index.percent}%</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TopPlatform
