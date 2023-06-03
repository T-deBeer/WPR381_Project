import React, { useState, useEffect } from 'react'
import { background, cloudy, rain, sunny, calender, tempNormal, tempCold, tempWarm, sunrise, sunset, moonrise, moonset, compass, wind, gust, humidity, feel, sunny_video, rainy_video, cloudy_video } from '../assets';
import { WeatherDisplayProps } from '../data/interfaces';

const firstTime = false;
let g_units = "";

// dictionary to dynamically link the weather prediction images.
const weather_pred_icons: { [key: string]: string } = {
  Clouds: cloudy,
  Rain: rain,
  Clear: sunny,
};

// dictionary to dynamically link the weather prediction videos.
const weather_pred_videos: { [key: string]: string } = {
  Clouds: cloudy_video,
  Rain: rainy_video,
  Clear: sunny_video,
};

// Function to dynamically change the temperature image according to how hot or cold it is when we input the temperature.
const temp_img = ((value: number) => {
  if (g_units === "metric") {
    if (value <= 15) {
      return tempCold;
    };
    if (value >= 25) {
      return tempWarm;
    };
    return tempNormal;
  } else {
    if (value <= 60) {
      return tempCold;
    };
    if (value >= 80) {
      return tempWarm;
    };
    return tempNormal;
  };
});

// Function to dynamically determine the compass direction from inputted wind direction in degrees.
const wind_direction = ((value: number) => {
  if ((value >= 337.5) || (value <= 22.5)) {
    return "North";
  };
  if ((value >= 22.5) && (value <= 67.5)) {
    return "Northeast";
  };
  if ((value >= 67.5) && (value <= 112.5)) {
    return "East";
  };
  if ((value >= 112.5) && (value <= 157.5)) {
    return "SouthEast";
  };
  if ((value >= 157.5) && (value <= 202.5)) {
    return "South";
  };
  if ((value >= 202.5) && (value <= 247.5)) {
    return "SouthWest";
  };
  if ((value >= 247.5) && (value <= 292.5)) {
    return "West";
  };
  if ((value >= 292.5) && (value <= 337.5)) {
    return "NorthWest";
  };
});

export default function WeatherDayDisplay(props: WeatherDisplayProps & { id: number } & { refresh: boolean} & {units: string}) {
  const [isFocused, setIsFocused] = useState(false);
  const uniqueId = `weatherDayDisplay-${props.id}`;
  g_units = props.units;

  let temp_metric = "";
  let speed_metric = "";

  if (props.units === "metric") {
    temp_metric = "°C";
    speed_metric = "Km/h";
  } else {
    temp_metric = "°F";
    speed_metric = "mph";
  }

  // Refreshes the page everytime a new item is focused so that all other items are moved out of focus. 
  // Otherwise the previously focused item will still remain focus when selecting another element to focus.
  // Checks through akll the elements since other elements can be clicked on that weatherdaydisplay.
  useEffect(() => {
    setIsFocused(() => document.getElementById(uniqueId)?.classList.contains('expanded') ? true : false);
  }, [props.refresh]);

  // Set the first element to be focused, but only once when the page is either loaded or refreshed by using the boolean firstTime.
  useEffect(() => {
    if ((props.id === 1) && (firstTime === false)) {
      setIsFocused(() => true);
    }
  }, [props.id]);

  return (
    <section id={uniqueId} className={`bg-cream rounded-2xl inline-block ml-10 mt-10 transition-all shadow-xl shadow-slate-600
      ${isFocused ? 'absolute top-0 left-0 w-[90vw] h-[50vh] mb-[5vh]' : 'relative top-[58vh] w-[11vw] h-[29vh]'}`}
      // The onClick event adds 'expanded' to the selected element and removes it from the other elements.
      // Also changes the refresh property to refresh the page.
      onClick={ (event) => {
        props.onClick?.(event);
      }}>
      {/* Checks if an item is focused and changes its appearance accordingly */}
      {isFocused ?
        <div>
          {/* Video Area */}
          <div className='w-[27vw] h-[50vh] border overflow-hidden rounded-tl-2xl rounded-bl-2xl inline-block'>
            <video src={weather_pred_videos[props.info.weather.main.toString()]} muted loop autoPlay className="h-[100%] w-[100%] object-cover">This video is not available at the moment</video>
            <p className='absolute top-[21vh] left-[13vw] text-white text-4xl -translate-x-1/2 -translate-y-1/2'>{props.info.date.substring(0,props.info.date.indexOf(','))}</p>
            <p className='absolute top-[27vh] left-[13vw] text-white text-4xl -translate-x-1/2 -translate-y-1/2'>{props.info.date.substring(props.info.date.indexOf(',') + 2, props.info.date.length)}</p>
          </div>

          {/* Weather prediction area */}
          <div className='w-[27vw] h-[50vh] ml-[3vw] inline-block align-top'>
            <div className='w-[27vw] h-[10vh] mb-[2vh] mt-[2vh] bg-creamlight rounded-xl shadow-md shadow-slate-600'>
              <ul className='list-none absolute left-[36%] flex'>
                <li className='text-black mt-[2.8vh] text-lg whitespace-nowrap flex items-center'>
                  <div className='bg-sky-600 p-1 mr-2 rounded-md'>
                    <img src={weather_pred_icons[props.info.weather.main.toString()]} alt="sunny" className='h-[3.5vh]' />
                  </div>
                  <p>{props.info.weather.description}</p>
                </li>
                <li className='text-black mt-[2.8vh] text-lg whitespace-nowrap flex items-center ml-[5.5vw]'>
                  <p>Clouds: {props.info.clouds.toString()}</p>
                </li>
              </ul>
            </div>

            {/* sun/moon-rise/set area */}
            <div className='w-[27vw] h-[16vh] mb-[2vh] bg-creamlight rounded-xl shadow-md shadow-slate-600'>
              <ul className='list-none absolute left-[36%] flex'>
                <li className='text-black mt-[2.8vh] text-lg whitespace-nowrap flex items-center'>
                  <img src={sunrise} alt="sunny" title='sunrise' className='h-[3.5vh] mr-[0.5vw]' />
                  <p title='sunrise'>{props.info.sunrise.toString().substring(props.info.sunrise.toString().indexOf('T') + 1, 16)}</p>
                </li>
                <li className='text-black mt-[2.8vh] text-lg whitespace-nowrap flex items-center ml-[7vw]'>
                  <img src={sunset} alt="sunny" title='sunset' className='h-[3.5vh] mr-[0.5vw]' />
                  <p title='sunset'>{props.info.sunset.toString().substring(props.info.sunset.toString().indexOf('T') + 1, 16)}</p>
                </li>
              </ul>
              <ul className='list-none absolute left-[36%] top-[40%] flex'>
                <li className='text-black mt-[2.8vh] text-lg whitespace-nowrap flex items-center'>
                  <img src={moonrise} alt="sunny" title='moonrise' className='h-[3.5vh] mr-[0.5vw]' />
                  <p title='moonrise'>{props.info.moonrise.toString().substring(props.info.moonrise.toString().indexOf('T') + 1, 16)}</p>
                </li>
                <li className='text-black mt-[2.8vh] text-lg whitespace-nowrap flex items-center ml-[7vw]'>
                  <img src={moonset} alt="sunny" title='moonset' className='h-[3.5vh] mr-[0.5vw]' />
                  <p title='moonset'>{props.info.moonset.toString().substring(props.info.moonset.toString().indexOf('T') + 1, 16)}</p>
                </li>
              </ul>
            </div>

            {/* temperature area */}
            <div className='w-[27vw] h-[16vh] border bg-creamlight rounded-xl shadow-md shadow-slate-600'>
              <ul className='list-none absolute left-[36%] flex'>
                <li className='text-black mt-[2.8vh] text-lg whitespace-nowrap flex items-center'>
                  <p>min:</p>
                  <img src={temp_img(Number.parseInt(props.info.min_temp.toString()))} alt="temp" title='minimum temperature' className='h-[3.5vh] mr-2' />
                  <p className='w-[1vw]' title='minimum temperature'>{props.info.min_temp.toString()}{temp_metric}</p>
                </li>
                <li className='text-black mt-[2.8vh] text-lg whitespace-nowrap flex items-center ml-[7vw]'>
                  <p>max:</p>
                  <img src={temp_img(Number.parseInt(props.info.max_temp.toString()))} alt="temp" title='maximum temperature' className='h-[3.5vh] mr-2' />
                  <p className='w-[1vw]' title='maximum temperature'>{props.info.max_temp.toString()}{temp_metric}</p>
                </li>
              </ul>
              <ul className='list-none absolute left-[28.2%] top-[76%]'>
                <li className='text-black mt-[2.8vh] text-lg whitespace-nowrap flex items-center ml-[7vw]'>
                  <p>avg:</p>
                  <img src={temp_img(Number.parseInt(props.info.temperature.toString()))} alt="temp" title='average temperature' className='h-[3.5vh] mr-2' />
                  <p title='maximum temperature'>{props.info.temperature.toString()}{temp_metric}</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Wind Area */}
          <div className='w-[27vw] h-[50vh] ml-[3vw] inline-block'>
            {/* <div className='w-[27vw] h-[10vh] mb-[2vh] mt-[2vh]'>
              <ul className='list-none absolute left-[68.5%] flex'>
                <li className='text-black mt-[3.3vh] text-lg whitespace-nowrap flex items-center'>
                  <p className='text-2xl'>Hover over the icons/text for more details</p>
                </li>
              </ul>
            </div> */}
            <div className='w-[27vw] h-[16vh] mb-[2vh] mt-[14vh] bg-creamlight rounded-xl shadow-md shadow-slate-600'>
              <ul className='list-none absolute flex ml-[3vw]'>
                <li className='text-black mt-[2.8vh] text-lg whitespace-nowrap flex items-center'>
                  <img src={compass} alt="temp" title='wind direction' className='h-[3.5vh] mr-2' />
                  <p title='wind direction' className='w-[4vw]'>{props.info.wind_deg.toString()}° {wind_direction(Number.parseFloat(props.info.wind_deg.toString()))}</p>
                </li>
                <li className='text-black mt-[2.8vh] text-lg whitespace-nowrap flex items-center ml-[7vw]'>
                  <img src={wind} alt="temp" title='wind speed' className='h-[3.5vh] mr-2' />
                  <p title='wind speed'>{props.info.wind_speed.toString()} {speed_metric}</p>
                </li>
              </ul>
              <ul className='list-none absolute flex ml-[3vw] top-[20vh]'>
                <li className='text-black mt-[2.8vh] text-lg whitespace-nowrap flex items-center'>
                  <img src={gust} alt="temp" title='wind gust (strongest speed)' className='h-[3.5vh] mr-2' />
                  <p title='wind gust (strongest speed)'>{props.info.wind_gust.toString()} {speed_metric}</p>
                </li>
              </ul>
            </div>

            {/* Humidity/pressure area */}
            <div className='w-[27vw] h-[16vh] border bg-creamlight rounded-xl shadow-md shadow-slate-600'>
              <ul className='list-none absolute flex ml-[3vw]'>
                <li className='text-black mt-[2.8vh] text-lg whitespace-nowrap flex items-center'>
                  <img src={humidity} alt="temp" title='humidity (relative humidity)' className='h-[3.5vh] mr-2' />
                  <p className='w-[11vw]' title='humidity (relative humidity)'>{props.info.humidity.toString()}%</p>
                </li>
                <li className='text-black mt-[2.8vh] text-lg whitespace-nowrap flex items-center'>
                  <img src={feel} alt="temp" title='what the humidity feels like (relative humidity)' className='h-[3.5vh] mr-2' />
                  <p title='what the humidity feels like (relative humidity)'>{props.info.feels_like.toString()}%</p>
                </li>
              </ul>
              <ul className='list-none absolute flex ml-[3vw] top-[38vh]'>
                <li className='text-black mt-[2.8vh] text-lg whitespace-nowrap flex items-center'>
                  <img src={wind} alt="temp" title='air pressure (hectopascals)' className='h-[3.5vh] mr-2' />
                  <p title='air pressure (hectopascals)'>{props.info.pressure.toString()} hPa</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
        :
        <div>
          <div className='relative'>
            <video src={weather_pred_videos[props.info.weather.main.toString()]} muted loop autoPlay className="h-auto rounded-t-2xl">This video is not available at the moment</video>
            <p className='absolute top-[50%] left-[50%] text-white text-4xl -translate-x-1/2 -translate-y-1/2'>{props.info.date.substring(0,props.info.date.indexOf(','))}</p>
          </div>
          <ul className='list-none absolute left-[45%] -translate-x-[50%]'>
            <li className='text-black mt-[1.5vh] text-lg whitespace-nowrap flex items-center'>
              <img src={calender} alt="Calender" className='h-[3.5vh] mr-2' />
              {props.info.date.substring(props.info.date.indexOf(',')+1)}
            </li>
            <li className='text-black mt-[1.5vh] text-lg whitespace-nowrap flex items-center'>
              <img src={temp_img(Number.parseInt(props.info.temperature.toString()))} alt="temp" className='h-[3.5vh] mr-2' />
              {props.info.temperature.toString()}{temp_metric}
            </li>
            <li className='text-black mt-[1.5vh] text-lg whitespace-nowrap flex items-center'>
              <img src={weather_pred_icons[props.info.weather.main.toString()]} alt="sunny" className='h-[3.5vh] mr-2' />
              {props.info.weather.description}
            </li>
          </ul>
        </div>}
    </section>
  )
}