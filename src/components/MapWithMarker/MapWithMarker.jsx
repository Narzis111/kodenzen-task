
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import PropTypes from 'prop-types';


const MapWithMarker = ({ latitude, longitude }) => {

  const icon = new L.icon({
    iconUrl: "/marker-icon-2x.png",
    iconSize: [30, 30],
  });

  return (
    <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]} icon={icon}>
        <Popup>Your location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapWithMarker;
MapWithMarker.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
}

