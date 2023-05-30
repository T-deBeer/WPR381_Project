import { useState, useEffect } from 'react';
import { Navbar, VideoBackground, WeatherDayDisplay } from './compoments';
import  { forecastData, weeksForecast } from './data/interfaces';
import { useParams } from 'react-router-dom';


export default function Predictions() {
  const [weatherInfo, setWeather] = useState<forecastData[]>([]);
  const [useMetricUnits, setUseMetricUnits] = useState<boolean>(true)
  const [units, setUnits] = useState<string>('metric')
  const {zipcode} = useParams();

  useEffect(() => {
    fetch(`/api/${zipcode}?units=${units}`)
      .then(response => response.json())
      .then((data: forecastData[]) => {
        setWeather(data);
      });
  }, [zipcode, useMetricUnits, units]);
  
  function switchUnit() {
    setUseMetricUnits(!useMetricUnits);
    setUnits(useMetricUnits ? "metric" : "imperial");
  }

  return (
    <div>
      <div className='bg-creamlight h-[100vh]'>
        <Navbar/>
        <div className='w-[94vw] ml-[3vw] mt-[3vh] h-[85vh] bg-black'>
          {weatherInfo.map((weather:forecastData) =>(<WeatherDayDisplay info={weather}/>))}
        </div>
      </div>
      <button type="button" className='bg-cream p-2 rounded-md hover:bg-creamDark text-black' onClick={switchUnit}>Switch Unit</button>
    </div>
  );
}