import React from 'react'
import { Platforms } from '../Data'

const TopPlatform = () => {
  return (
    <div className='bg-tertiary p-5 rounded-lg border border-light mb-5 ml-5 lg:ml-0 -mr-5 lg:mr-5'>
      <div className='flex justify-between mb-4'>
        <h1>Top Platform</h1>
        <p className='text-primary'>See All</p>
      </div>

      {Platforms.map((index) => {
        return(
          <div className='mb-3' key={index.id}>
            <p className='font-bold'>{index.name}</p>
            <input type="range" name="range" id="range" className='w-full bg-primary' />
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
