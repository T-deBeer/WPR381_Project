import { useState, useEffect } from 'react';
import { Navbar, VideoBackground, WeatherDayDisplay, Button } from './compoments';
import  { forecastData, weeksForecast } from './data/interfaces';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchange } from '@fortawesome/free-solid-svg-icons';


export default function Predictions() {
  const [weatherInfo, setWeather] = useState<forecastData[]>([]);
  const [useMetricUnits, setUseMetricUnits] = useState<boolean>(false)
  const [units, setUnits] = useState<string>('metric')
  const [refresh, setRefresh] = useState<boolean>(false);
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

  // Performed when one of the WeatherDayDisplays is clicked for expanding the selected element.
  function setFocus(event: any) {
    const selectedBox = event.target;
    const container = document.getElementById('container') || document.createElement('div');
    const boxes = Array.from(container.children);

    // Removes expanded from all elements.
    boxes.forEach(box => box.classList.remove('expanded'));
    // we need to have consistency, so when an element is clicked inside the element we want to make expanded, we instead locate the main element and change it's classlist.
    const main = selectedBox.closest("section");
    main.classList.add('expanded');

    // Refreshes the generation of all the elements.
    setRefresh(prev => !prev);
  }

  let i = 0;
  return (
    <div>
      <div className='bg-creamlighter h-[100vh] fixed'>
        <Navbar/>
        {weatherInfo.length > 0 && (
          <h3 className='text-center text-3xl font-bold absolute top-[1vh] left-[35vw] text-white'>Weather in {weatherInfo[0].location}</h3>
        )}
        
        <div className='relative w-[94vw] ml-[3vw] h-[95vh] bg-creamlight shadow-2xl' id='container'>
          <Button className='absolute top-[5.5vh] left-[87vw] z-10 hover:bg-creamDark' onClick={switchUnit} icon={<FontAwesomeIcon icon={faExchange} size="lg" />}></Button>
          {weatherInfo.map((weather:forecastData) =>(i++,<WeatherDayDisplay info={weather} key={i} id={i} refresh={refresh} units={units} onClick={setFocus}/>))}
        </div>        
      </div>
    </div>
  );
}