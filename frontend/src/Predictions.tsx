import { useState, useEffect } from 'react';
import { Navbar, VideoBackground, WeatherDayDisplay } from './compoments';
import  { forecastData, weeksForecast } from './data/interfaces';
import { useParams } from 'react-router-dom';


export default function Predictions() {
  const [weatherInfo, setWeather] = useState<forecastData[]>([]);

  const {zipcode} = useParams();

  useEffect(() => {
    fetch(`/api/${zipcode}`)
      .then(response => response.json())
      .then((data: forecastData[]) => {
        setWeather(data);
      });
  }, []);
  
  return (
   
    <div className='bg-creamlight h-[100vh]'>
     {/* <DetailedWeatherDisplay/> */}
      <Navbar/>
      <div className='w-[94vw] ml-[3vw] mt-[3vh] h-[85vh] bg-black'>
      {weatherInfo.map((weather:forecastData) =>(<WeatherDayDisplay info={weather}/>))}
        
      </div>
    </div>
  );
}