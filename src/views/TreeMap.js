import React, {useState, Component} from "react";
import "./TreeMap.css";
import { GoogleMap, Marker, InfoWindow, withGoogleMap, withScriptjs } from "react-google-maps";
import * as parkData from "../data/testData.json";

// import Map from "./GoogleAPIWrapper";
const MapWrapped = withScriptjs(withGoogleMap(Map));

export default class TreeMap extends Component {
    render() {
        return(
            <React.Fragment>
                <div style={{ width: "100vw", height: "100vh" }}>
                  <MapWrapped
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAA_pdK9MBIEJnMoZ_8RFArBRL_okctPrg`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                </div>
            </React.Fragment>
        );
    }
}

function Map() {
    const [selectedPark, setSelectedPark] = useState(null);
    return (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
        >
          {parkData.features.map(park => (
            <Marker
              key={park.properties.PARK_ID}
              position={{
                lat: park.geometry.coordinates[1],
                lng: park.geometry.coordinates[0]
              }}
              onClick={() => { setSelectedPark(park); }}
              
            />
          ))}
    
          {selectedPark && (
            <InfoWindow
              onCloseClick={() => { setSelectedPark(null); }}
              position={{
                lat: selectedPark.geometry.coordinates[1],
                lng: selectedPark.geometry.coordinates[0]
              }}
            >
              <div>
                <h2>{selectedPark.properties.NAME}</h2>
                <p>{selectedPark.properties.DESCRIPTION}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      );
  }