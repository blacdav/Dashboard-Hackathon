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
        <table className='w-full'>
          <thead className='grid grid-cols-6 gap-5 text-left text-xs lg:text-base mr-4'>
            <th className='col-span-2'>Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Invoice</th>
          </thead>
          {
            Users.map((user, i) => {
              return(
                <tbody className='grid grid-cols-6 border-t border-light text-xs lg:text-base gap-2 p-0 lg:py-3 justify-center items-center' key={i}>
                  <td className='flex col-span-2 items-center'><img src={user.img} alt="." className='mr-2 w-7' /> {user.name}</td>
                  <td className='flex'>{user.date}</td>
                  <td>{user.amount}</td>
                  <td className={`${user.status === 'Refund' ? 'text-blue' : user.status === 'Pending' ? 'text-orange' : user.status === 'Paid' ? 'text-primary' : 'text-red'}`}>{user.status}</td>
                  <td className='flex'><img src={user.icon} alt="..." className='w-5 h-5 mr-1' /> {user.invoice}</td>
                </tbody>
              )
            })
          }
        </table>
      </div>
    </div>
  );
}

export default LastOrders
