const express = require("express");
const axios = require("axios");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    users: [
      { firstName: "Tiaan", lastName: "de Beer" },
      { firstName: "Yvan", lastName: "Greyling" },
    ],
  });
});

app.get("/api/:zipcode", async (req, res) => {
  const { zipcode } = req.params;

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

    const { lat, lon } = geocodingData[0];

    // Use latitude and longitude to fetch weather data from the OpenWeather API
    const weatherEndpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=47252d79c6b16c9635284528ca390df0`;
    const weatherResponse = await fetch(weatherEndpoint);
    const weatherData = await weatherResponse.json();

    res.json(weatherData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
