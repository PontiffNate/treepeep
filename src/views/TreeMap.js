import React, {useState, Component} from "react";
import "./TreeMap.css";
import { GoogleMap, Marker, InfoWindow, withGoogleMap, withScriptjs } from "react-google-maps";
import * as testData from "../data/testData.json";

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
    const [selectedTree, setSelectedTree] = useState(null);
    return (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
        >
          {testData.trees.map(treeMap => (
            <Marker
              key={treeMap.treeData.TREE_ID}
              position={{
                lat: treeMap.treeData.coordinates[1],
                lng: treeMap.treeData.coordinates[0]
              }}
              onClick={() => { setSelectedTree(treeMap); }}
              
            />
          ))}
    
          {selectedTree && (
            <InfoWindow
              onCloseClick={() => { setSelectedTree(null); }}
              position={{
                lat: selectedTree.treeData.coordinates[1],
                lng: selectedTree.treeData.coordinates[0]
              }}
            >
              <div>
                <h2>{selectedTree.treeData.NAME}</h2>
                <p>{selectedTree.treeData.IMAGE_URL}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      );
  }