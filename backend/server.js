const express = require("express");
const axios = require("axios");

const app = express();

app.get("/api/:zipcode", async (req, res) => {
  const { zipcode } = req.params;
  const { units } = req.query;

  try {
    // Perform geocoding using Nominatim API limited to South Africa
    const geocodingEndpoint = `https://nominatim.openstreetmap.org/search?postalcode=${zipcode}&country=South+Africa&format=json&limit=1`;
    //const geocodingEndpoint = `https://nominatim.openstreetmap.org/search?postalcode=${zipcode}&format=json&limit=1`;

    const geocodingResponse = await fetch(geocodingEndpoint);
    const geocodingData = await geocodingResponse.json();

    if (geocodingData.length === 0) {
      res.status(404).json({ error: "Zip code not found" });
      return;
    }

    const { lat, lon, display_name } = geocodingData[0];

    // Use latitude and longitude to fetch weather data from the OpenWeather API

    const weatherEndpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=${units}&appid=47252d79c6b16c9635284528ca390df0`;
    // const weatherEndpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=47252d79c6b16c9635284528ca390df0`;
    const weatherResponse = await fetch(weatherEndpoint);
    const weatherData = await weatherResponse.json();

    const parts = display_name.split(",");
    const place = parts[1].trim();

    const dailyForecast = weatherData.daily.map((day) => {
      const date = new Date(day.dt * 1000);
      const formattedDate = date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      });

      return {
        location: place,
        date: formattedDate,
        sunrise: new Date(day.sunrise * 1000),
        sunset: new Date(day.sunset * 1000),
        moonrise: new Date(day.moonrise * 1000),
        moonset: new Date(day.moonset * 1000),
        moon_phase: day.moon_phase,
        temperature: Math.round(day.temp.day),
        min_temp: Math.round(day.temp.min),
        max_temp: Math.round(day.temp.max),
        feels_like: Math.round(day.feels_like.day),
        pressure: day.pressure,
        humidity: day.humidity,
        dew_point: day.dew_point,
        wind_speed: day.wind_speed,
        wind_deg: day.wind_deg,
        wind_gust: day.wind_gust,
        weather: day.weather[0],
        clouds: day.clouds,
        pop: day.pop,
        uvi: day.uvi,
      };
    });

    res.json(dailyForecast);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
