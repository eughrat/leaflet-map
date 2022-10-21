import React, { Component } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import countries from "./../Data/countries.json";
import "leaflet/dist/leaflet.css";

class MyMap extends Component {
    state = {}

    componentDidMount(){
        console.log(countries);
    }

    render() {
        return (
        <div>
            <h1 style = {{textAlign: "center"}}>
                My Map
            </h1>
            <MapContainer style = {{height: "80vh"}} zoom = {2} center = {[20,100]}>
            </MapContainer>
        </div>
        );
    }
}

export default MyMap;