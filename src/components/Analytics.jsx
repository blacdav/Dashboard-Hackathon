import React from 'react'
import { Analytic } from '../Data'

const Analytics = () => {
  return (
    <div className=''>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 my-0 lg:my-5 -mr-5 lg:mr-5 ml-5 lg:ml-0'>
        {
          Analytic.map((index) => {
            return(
              <div className='flex flex-col justify-between bg-tertiary border border-light p-2 rounded-lg' key={index.id}>
                <div className='flex justify-between'>
                  <img src='#' alt="..." />
                  <img src={index.img} alt="..." />
                </div>
                <p>{index.text}</p>
                <p className='text-xl font-medium'>${index.amount}</p>
                <div className='flex justify-between text-xs'>
                  <p className='flex bg-[#34CAA51A] text-primary px-1 rounded-full'><img src={index.arrow} alt="..." className='mr-1' />{index.percent}</p>
                  <p className='text-xs'>{index.text2}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Analytics
