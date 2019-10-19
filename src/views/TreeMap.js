import React, {Component} from "react";
import "./TreeMap.css";
import MapContainer from "./GoogleAPIWrapper";

export default class TreeMap extends Component {
    render() {
        return(
            <React.Fragment>
                <div id="map-container-google-3" class="z-depth-1-half map-container-3">
                    <MapContainer/>
                </div>
            </React.Fragment>
        );
    }
}