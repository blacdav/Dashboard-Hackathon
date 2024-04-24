import React from 'react'
import { Platforms } from '../Data'
import {Progress} from '@material-tailwind/react'

const TopPlatform = ({display}) => {
  return (
    <div className={`${display ? 'bg-tertiary' : 'bg-black text-tertiary'} p-5 rounded-lg border border-light mb-5 ml-5 lg:ml-0 -mr-5 lg:mr-5`}>
      <div className='flex justify-between mb-4'>
        <h1>Top Platform</h1>
        <p className='text-primary'>See All</p>
      </div>

      {Platforms.map((index) => {
        return(
          <div className='pb-3' key={index.id}>
            <p className='font-bold'>{index.name}</p>
            <Progress value={index.percent * 4} variant='filled' color={`${index.id === 1 ? 'deep-purple' : index.id === 2 ? 'light-blue' : index.id === 3 ? 'lime' : 'red'}`} className={`my-3 lg:my-2 h-4 border-0`} />
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

// ${index.id === 1 ? 'bg-blue' : index.id === 2 ? 'bg-primary' : index.id === 3 ? 'bg-yellow' : 'bg-red'}
export default TopPlatform
