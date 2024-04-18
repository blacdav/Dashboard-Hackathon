import React from 'react'
import { Users } from '../Data'

const LastOrders = ({display}) => {
  return (
    <div className={`${display ? 'bg-tertiary' : 'bg-black text-tertiary'} p-5 border border-light mx-5 lg:mr-0 mb-0 lg:mb-5 rounded-lg`}>
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
          <div className='grid grid-cols-6 border-t border-light text-xs lg:text-base gap-2 p-0 lg:py-3 justify-center items-center'  key={user.id}>
            <p className='col-span-2 flex items-center'><img src={user.img} alt="." className='mr-2' /> {user.name} </p>
            <p> {user.date} </p>
            <p> {user.amount} </p>
            <p className=''> {user.status} </p>
            <p className='flex'><img src={user.icon} alt="..." className='w-5 h-5 mr-1' /> {user.invoice} </p>
          </div>
        )
      })}
    </div>
  );
}

export default LastOrders
