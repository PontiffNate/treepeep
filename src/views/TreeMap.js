import React, {Component} from "react";
import "./TreeMap.css";
import MapContainer from "./GoogleAPIWrapper";

export default class TreeMap extends Component {
    render() {
        return(
            <React.Fragment>
                <div id="map">
                    <MapContainer/>
                </div>
            </React.Fragment>
        );
    }
}