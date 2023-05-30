export interface TextboxProps{
    text: string;
    onChange?: (event: any) => void;
  }

  export interface WeatherDisplayProps {
    info: forecastData;
    onChange?: (event: any) => void;
    useMetricUnits: boolean;
  }
  
export interface Weather {
    id: Number;
    main: String;
    description: String;
    icon: String;
  }

  export interface forecastData {
    date: String;
    sunrise: Date;
    sunset: Date;
    moonrise: Date;
    moonset: Date;
    moon_phase: Number;
    temperature: Number;
    feels_like: Number;
    pressure: Number;
    humidity: Number;
    dew_point: Number;
    wind_speed: Number;
    wind_deg: Number;
    wind_gust: Number;
    weather: Weather;
    clouds: Number;
    pop: Number;
    uvi: Number;
  }

 export interface weeksForecast{
  info: forecastData[];
 }