import React from 'react'
import { Users } from '../Data'

const LastOrders = () => {
  return (
    <div className='p-5 bg-tertiary border border-light ml-5 mr-5 lg:mr-0 mb-0 lg:mb-5 rounded-lg'>
      <div>
        <div className='flex justify-between'>
            <h1 className='text-xs lg:text-lg font-semibold'>Last Orders</h1>
            <p className='text-primary'>See All</p>
        </div>
        <div className='grid grid-cols-6 gap-2 text-xs lg:text-base mr-4'>
            <p className='col-span-2'>Name</p>
            <p className=''>Date</p>
            <p>Amount</p>
            <p className='ml-1'>Status</p>
            <p>Invoice</p>
        </div>
      </div>

      {Users.map((user) => {
        return(
          <div className='grid grid-cols-6 border-t border-light text-xs lg:text-base gap-1 p-0 lg:p-3'  key={user.id}>
            <p className='col-span-2 flex'><img src={user.img} alt="." width={20} height={20} className='mr-2' /> {user.name} </p>
            <p className=''> {user.date} </p>
            <p> {user.amount} </p>
            <p className='text-center'> {user.status} </p>
            <p><img src="#" alt="..." /> {user.invoice} </p>
          </div>
        )
      })}
    </div>
  );
}

export default LastOrders
