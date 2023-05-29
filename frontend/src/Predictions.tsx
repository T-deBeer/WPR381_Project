import { useState, useEffect } from 'react';
import { Navbar, VideoBackground, WeatherDayDisplay } from './compoments';
import  { BackendData } from './data/interfaces';


export default function Predictions() {
  const [backendData, setBackendData] = useState<BackendData>({ users: [] });

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then((data: BackendData) => {
        setBackendData(data);
      });
  }, []);
  
  return (
   
    <div className='bg-creamlight h-[100vh]'>
     {/* <DetailedWeatherDisplay/> */}
      <Navbar/>
      <div className='w-[94vw] ml-[3vw] mt-[3vh] h-[85vh] bg-black'>
        <div className='w-[90vw] ml-[2vw] h-[40vh] bg-red-500'>

        </div>
        <WeatherDayDisplay/>
      </div>
    </div>
  );
}