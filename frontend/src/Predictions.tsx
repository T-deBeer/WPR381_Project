import { useState, useEffect } from 'react';
import { Navbar, VideoBackground, WeatherDayDisplay } from './compoments';
import  { forecastData, weeksForecast } from './data/interfaces';
import { useParams } from 'react-router-dom';


export default function Predictions() {
  const [weatherInfo, setWeather] = useState<forecastData[]>([]);
  const [useMetricUnits, setUseMetricUnits] = useState<boolean>(true)
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
  
  console.log(weatherInfo[0]);

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

    // alert(document.getElementById('weatherDayDisplay-1')?.classList);
    // alert(main.classList);
    // alert(`#weatherDayDisplay-${id}`);
  }

  let i = 0;

  return (
    <div>
      <div className='bg-creamlight h-[100vh]'>
        <Navbar/>
        <div className='w-[94vw] ml-[3vw] mt-[3vh] h-[85vh] bg-black' id='container'>
          {weatherInfo.map((weather:forecastData) =>(i++,<WeatherDayDisplay info={weather} key={i} id={i} refresh={refresh} onClick={setFocus}/>))}
        </div>
      </div>
      <button type="button" className='bg-cream p-2 rounded-md hover:bg-creamDark text-black' onClick={switchUnit}>Switch Unit</button>
    </div>
  );
}