import { GoogleMap } from "react-google-maps";

function Map() {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 45.4211, lng: -75.6903 }}>
      { /* We will render our data here */ }
    </GoogleMap>
  );
}