import React, {Component} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


// ...

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.testLocations = {
      trees: [{lat: 43.104185, lng: -77.580177},
        {latitude: 35.210395, longitude: -84.848504},
        {latitude: 30.94, longitude: -99.45},
        {latitude: 36.18, longitude: -118.89},
        {latitude: 49.12, longitude: -79.46},
        {latitude: 47.5524695, longitude: -122.0425407}]
    }
  }

  displayMarkers = () => {
    return this.testLocations.trees.map((tree, index) => {
      return <Marker key={index} id={index} position={{
       lat: tree.latitude,
       lng: tree.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }
    render() {
      return (
        <Map google={this.props.google}
             zoom={4}
             initialCenter={{ lat: 39.8097343, lng: -98.5556199}}
             >
            {this.displayMarkers()}
  
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'}
                   />
                  
  
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>Hello World</h1>
              </div>
          </InfoWindow>
        </Map>
      );
    }
  }

export default GoogleApiWrapper({
  apiKey: "AIzaSyAA_pdK9MBIEJnMoZ_8RFArBRL_okctPrg"
})(MapContainer)
