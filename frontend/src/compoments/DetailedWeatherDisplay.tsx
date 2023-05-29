import React from 'react'
import {  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
);

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Temperatures C',
    },
  },
  scales: {
    y: {
      ticks: {
        stepSize: 3
      },
      grid: {
        display: false
      },
    },
    x: {
      grid: {
        display: false
      },
    },
  },
};

const labels = ['Min', 'Morning', 'Max', 'Sunset'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Temperature',
      data: [1, 2, 3, 4],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      barPercentage: 0.8, 
    },
  ],
};


export default function DetailedWeatherDisplay() {
  return (    
    <div className='h-[60vh] w-[80vw] bg-cream m-auto rounded-3xl p-[3vh]'>
      DetailedWeatherDisplay
      <div className='h-[100%] w-[30%]'>
        <Bar options={options} data={data} />
      </div>
    </div>
  )
}