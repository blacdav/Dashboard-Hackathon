import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Daily, Weekly, Monthly, Yearly } from '../Data'
import { Chart as ChartJS } from 'chart.js/auto';

const BarChart = ({display}) => {
  const [select, setSelect] =  useState('');

  return (
    <div className={`${display ? 'bg-tertiary' : 'bg-black text-tertiary'} border border-light mx-5 lg:mr-0 mt-5 rounded-lg w-auto h-auto`}>
        <div className='flex justify-between p-2 lg:px-5 lg:pt-5'>
            <h1 className='text-lg lg:2xs font-semibold'>Sales Trends</h1>
            <div className='flex text-2xs'>
                <p>Sort by: </p>
                <select name="sortby" id="sortby"  onChange={(e)=>setSelect(e.target.value)} className={`${display ? '' : 'bg-black text-tertiary border-tertiary'} rounded-full text-2xs lg:px-1 lg:ml-2 border-2 border-black cursor-pointer`}>
                    <option className={`${display ? '' : 'bg-black text-tertiary'}`} value="Daily">Daily</option>
                    <option className={`${display ? '' : 'bg-black text-tertiary'}`} value="Weekly">Weekly</option>
                    <option className={`${display ? '' : 'bg-black text-tertiary'}`} value="Monthly">Monthly</option>
                    <option className={`${display ? '' : 'bg-black text-tertiary'}`} value="Yearly">Yearly</option>
                </select>
            </div>
        </div>
        
        <div className={`${display ? 'text-tertiary' : ''} w-auto cursor-pointer`}>
          { 
            select === 'Weekly' ?
            <Bar data={{
              labels: Weekly.map((data) => data.week),
              datasets: [{
                label: "$ Weekly",
                data: Weekly.map((data) => `${data.userGain}`),
                borderRadius: 50,
                barThickness: 25,
                backgroundColor: '#34CAA51A',
                hoverBackgroundColor: '#34CAA5',
                height: 30,
              }]
            }} />
            : select === 'Monthly' ?
            <Bar data={{
              labels: Monthly.map((data) => data.month),
              datasets: [{
                label: "$ Monthly",
                data: Monthly.map((data) => `${data.userGain}`),
                borderRadius: 50,
                barThickness: 25,
                backgroundColor: '#34CAA51A',
                hoverBackgroundColor: '#34CAA5',
                height: 30,
              }]
            }} />
            : select === 'Yearly' ?
            <Bar data={{
              labels: Yearly.map((data) => data.year),
              datasets: [{
                label: "$ Yearly",
                data: Yearly.map((data) => `${data.userGain}`),
                borderRadius: 50,
                barThickness: 25,
                backgroundColor: '#34CAA51A',
                hoverBackgroundColor: '#34CAA5',
                height: 30,
              }]
            }} />
            :
            <Bar data={{
              labels: Daily.map((data) => data.day),
              datasets: [{
                label: "$ Daily",
                data: Daily.map((data) => `${data.userGain}`),
                borderRadius: 50,
                barThickness: 25,
                backgroundColor: '#34CAA51A',
                hoverBackgroundColor: '#34CAA5',
                height: 30,
              }]
            }} />
          }
        </div>
      </div>
  )
}

export default BarChart;