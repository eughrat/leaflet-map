import React, { Component } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from "./../Data/countries.json";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";

class MyMap extends Component {
    state = {}

    componentDidMount(){
        const countryName = country.properties.ADMIN;
        console.log(countryName);
    }

    countryStyle = {
        fillColor : "red",
        fillOpacity : 0.1,
        color : "black",
        weight : 2,
    };

    onEachCountry = (country, layer) => {
        console.log(country.properties.ADMIN);
    };

    render() {
        return (
        <div>
            <h1 style = {{textAlign: "center"}}>
                My Map
            </h1>
            <MapContainer style = {{height: "80vh"}} zoom = {5} center = {[20,100]}>
                <GeoJSON style = { this.countryStyle } data = {mapData.features} onEachFeature = {this.OnEachCountry}></GeoJSON>
            </MapContainer>
        </div>
        );
    }
}

export default MyMap;