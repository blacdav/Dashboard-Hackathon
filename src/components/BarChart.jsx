import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Options, Daily } from '../Data';
import { Chart as ChartJS } from 'chart.js/auto';

const BarChart = () => {
  const [select, setSelect] =  useState();

  return (
    <div className='bg-tertiary border border-light ml-5 mr-5 lg:mr-0 mt-5 rounded-lg w-auto h-auto'>
        <div className='flex justify-between p-2 lg:px-5 lg:pt-5'>
            <h1 className='text-lg lg:2xs font-semibold'>{select} Sales Trends</h1>
            <div className='flex text-2xs'>
                <p>Sort by: </p>
                <select name="sortby" id="sortby" value={select} onChange={(e)=>setSelect(e.target.value)} className='rounded-full text-2xs lg:px-1 lg:ml-2 border-2 border-black'>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthy">Monthly</option>
                    <option value="Yearly">Yearly</option>
                </select>
            </div>
        </div>
        
        <div className='aspect-auto'>
          <Bar data={{
            labels: Daily.map((data) => data.day),
            datasets: [{
              label: "$",
              data: Daily.map((data) => `${data.userGain}`),
              borderRadius: 50,
              barThickness: 25,
              backgroundColor: '#34CAA51A',
              hoverBackgroundColor: '#34CAA5'
              // height: 70
            }]
          }} />
        </div>
      </div>
  )
}

export default BarChart;