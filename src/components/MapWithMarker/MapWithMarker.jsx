
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapWithMarker = ({ latitude, longitude }) => {
  return (
    <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]}>
        <Popup>Your location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapWithMarker;

