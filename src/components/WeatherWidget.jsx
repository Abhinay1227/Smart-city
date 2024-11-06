// src/Dashboard/WeatherWidget.jsx
import React, { useEffect, useState } from 'react';

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = "b848742b8067474bbc4a922dc41b0a4a"; // Your OpenWeather API key
  const city = "Guntur"; // Set a default city or use props to pass it dynamically

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching the weather data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [apiKey, city]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!weather) {
    return <div>Weather data not available.</div>;
  }

  return (
    <div>
      <h2>{weather.name}</h2>
      <p>Temperature: {Math.round(weather.main.temp)}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
    </div>
  );
}

export default WeatherWidget;