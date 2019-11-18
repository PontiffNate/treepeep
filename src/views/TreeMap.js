import React, {useState, Component} from "react";
import "./TreeMap.css";
import { GoogleMap, Marker, InfoWindow, withGoogleMap, withScriptjs } from "react-google-maps";
import * as testData from "../data/testData.json";
import TreeController from "./DatabaseControllers/TreeController";

// import Map from "./GoogleAPIWrapper";
const MapWrapped = withScriptjs(withGoogleMap(Map));

export default class TreeMap extends Component {
    render() {
        return(
            <React.Fragment>
                <div style={{ width: "100vw", height: "100vh" }}>
                <h1 id="tree-map-title">Tree Map</h1>
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

function getTreePostID() {
  var url = new URL(window.location.href);
  var id = url.searchParams.get("id");
  return parseInt(id);
}


function Map() {
    var tc = new TreeController();
    const [selectedTree, setSelectedTree] = useState(null);
    console.log(getTreePostID());
    if (getTreePostID() > 0) {
      var treeData = tc.getTreeByID(getTreePostID());
      return (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat: treeData.COORDINATES[0], lng: treeData.COORDINATES[1] }}
        >
          <Marker
            key={treeData.ID}
            position={{ lat: treeData.COORDINATES[0], lng: treeData.COORDINATES[1] }}
            onClick={() => { setSelectedTree(treeData); }}
          />
          {selectedTree && (
            <InfoWindow
              onCloseClick={() => { setSelectedTree(null); }}
              position={{ lat: treeData.COORDINATES[0], lng: treeData.COORDINATES[1] }}
            >
              <div>
                <h2>{selectedTree.NAME}</h2>
                <img src={""+ selectedTree.IMAGE_URL}/>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      );
    } else {
      var treeData = tc.getAllTrees();
      return (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
        >
          {testData.trees.map(treeMap => (
            <Marker
              key={treeMap.TREE_ID}
              position={{
                lat: treeMap.coordinates[1],
                lng: treeMap.coordinates[0]
              }}
              onClick={() => { setSelectedTree(treeMap); }}
              
            />
          ))}
    
          {selectedTree && (
            <InfoWindow
              onCloseClick={() => { setSelectedTree(null); }}
              position={{
                lat: selectedTree.coordinates[1],
                lng: selectedTree.coordinates[0]
              }}
            >
              <div>
                <h2>{selectedTree.NAME}</h2>
                <img src={""+ selectedTree.IMAGE_URL}/>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      );
    }
      
  }

