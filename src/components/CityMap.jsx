// src/CityMap.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function CityMap() {
  const [city, setCity] = useState("Guntur");
  const [coordinates, setCoordinates] = useState([16.3067, 80.4365]); // Default to Guntur coordinates

  const apiKey = "b848742b8067474bbc4a922dc41b0a4a"; // Your OpenWeather API key

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        setCoordinates([lat, lon]); // Update map to the new city coordinates
      } else {
        alert("City not found. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching the city coordinates:", error);
    }
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <div className="search-bar">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <MapContainer center={coordinates} zoom={13} style={{ height: "90%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={coordinates}>
          <Popup>{city}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default CityMap;
