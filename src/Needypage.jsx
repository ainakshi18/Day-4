import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const NeedyPage = () => {
  return (
    <div>
      <h1>Needy Page</h1>
      <MapContainer
        center={[51.505, -0.09]} // Replace with your desired coordinates
        zoom={13}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A sample popup here!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default NeedyPage;
