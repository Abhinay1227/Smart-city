// src/CityMap.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import marker icon assets for Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

function CityMap() {
  const [city, setCity] = useState("Guntur");
  const [coordinates, setCoordinates] = useState([16.3067, 80.4365]); // Default to Guntur coordinates
  const [hasCoordinates, setHasCoordinates] = useState(true);
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
        setHasCoordinates(true); // Show marker for new location
      } else {
        alert("City not found. Please try again.");
        setHasCoordinates(false); // Hide marker if city is not found
      }
    } catch (error) {
      console.error("Error fetching the city coordinates:", error);
    }
  };

  // Component to set the view to new coordinates when they change
  function SetViewOnCoordinates({ coords }) {
    const map = useMap();
    map.setView(coords, 13); // Center map on new coordinates with zoom level 13
    return null;
  }

  // Custom icon for the marker
  const customIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -41] // point from which the popup should open relative to the iconAnchor
  });

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
        {hasCoordinates && (
          <Marker position={coordinates} icon={customIcon}>
            <Popup>{city}</Popup>
          </Marker>
        )}
        <SetViewOnCoordinates coords={coordinates} />
      </MapContainer>
    </div>
  );
}

export default CityMap;
