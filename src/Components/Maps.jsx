import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define the map container style and center
const mapContainerStyle = {
  height: "400px",
  width: "130%",
};

const center = {
  lat: -28.757276903974866, // Replace with your desired latitude
  lng: 32.02051132564684 // Replace with your desired longitude
};

const Map = () => {
  return (
    <LoadScript
      // Replace with your Google Maps API key
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
