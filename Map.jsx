import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const cityCoordinates = {
  "ירושלים": [31.7683, 35.2137],
  "תל אביב": [32.0853, 34.7818],
  "רמת גן": [32.0823, 34.8118],
  "באר שבע": [31.2528, 34.7913]
};

const Map = ({ markers }) => {
  return (
    <MapContainer center={[31.0461, 34.8516]} zoom={8} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={cityCoordinates[marker]}>
          <Popup>{marker}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
