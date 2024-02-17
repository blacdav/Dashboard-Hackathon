import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Daily, Weekly, Monthly, Yearly } from '../Data'
// import { Options, Daily } from '../Data';
import { Chart as ChartJS } from 'chart.js/auto';

const BarChart = () => {
  const [select, setSelect] =  useState(true);

  const toggleList = () => {
    setSelect(!select);
  }

  return (
    <div className='bg-tertiary border border-light mx-5 lg:mr-0 mt-5 rounded-lg w-full lg:w-auto h-auto overflow-x-scroll lg:overflow-x-hidden'>
        <div className='flex justify-between p-2 lg:px-5 lg:pt-5'>
            <h1 className='text-lg lg:2xs font-semibold'>Sales Trends</h1>
            <div className='flex text-2xs'>
                <p>Sort by: </p>
                <select name="sortby" id="sortby"  onChange={(e)=>setSelect(e.target.value && toggleList)} className='rounded-full text-2xs lg:px-1 lg:ml-2 border-2 border-black cursor-pointer'>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthy">Monthly</option>
                    <option value="Yearly">Yearly</option>
                </select>
            </div>
        </div>
        
        <div className='overflow-x-scroll lg:overflow-x-hidden w-full lg:w-auto cursor-pointer'>
          {select ?
            <Bar data={{
              labels: Daily.map((data) => data.day),
              datasets: [{
                label: "$",
                data: Daily.map((data) => `${data.userGain}`),
                borderRadius: 50,
                barThickness: 25,
                backgroundColor: '#34CAA51A',
                hoverBackgroundColor: '#34CAA5',
                height: 30,
              }]
            }} />
            :
            <Bar data={{
              labels: Weekly.map((data) => data.week),
              datasets: [{
                label: "$",
                data: Weekly.map((data) => `${data.userGain}`),
                borderRadius: 50,
                barThickness: 25,
                backgroundColor: '#34CAA51A',
                hoverBackgroundColor: '#34CAA5',
                height: 30,
              }]
            }} />
            // :
            // <Bar data={{
            //   labels: Monthly.map((data) => data.month),
            //   datasets: [{
            //     label: "$",
            //     data: Monthly.map((data) => `${data.userGain}`),
            //     borderRadius: 50,
            //     barThickness: 25,
            //     backgroundColor: '#34CAA51A',
            //     hoverBackgroundColor: '#34CAA5',
            //     height: 30,
            //   }]
            // }} />
            // :
            // <Bar data={{
            //   labels: Yearly.map((data) => data.year),
            //   datasets: [{
            //     label: "$",
            //     data: Yearly.map((data) => `${data.userGain}`),
            //     borderRadius: 50,
            //     barThickness: 25,
            //     backgroundColor: '#34CAA51A',
            //     hoverBackgroundColor: '#34CAA5',
            //     height: 30,
            //   }]
            // }} />
          }
        </div>
      </div>
  )
}

export default BarChart;