import React, { Component } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from "./../Data/countries.json";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";

class MyMap extends Component {
    state = {}

    componentDidMount(){
        console.log(mapData);
    }

    countryStyle = {
        fillColor : "red",
        fillOpacity : 0.1,
        color : "black",
        weight : 2,
    };


    onCountryClick = (event) => {
        console.log('Clicked')
    };

    onCoutryMouseOver = (event) => {
        event.target.setStyle(
            {
                color: "green",
                fillColor: "yellow",
                fillOpacity: 0.1,
            }
        )
    };

    onEachCountry = (country, layer) => {
        const countryName = country.properties.ADMIN;
        console.log(countryName);
        layer.bindPopup(countryName);

        layer.options.fillOpacity = Math.random();


        layer.on({
            click: this.onCountryClick,
            mouseover: this.onCoutryMouseOver,
        });
    };

    render() {
        return (
        <div>
            <h1 style = {{textAlign: "center"}}>
                My Map
            </h1>
            <MapContainer style = {{height: "80vh"}} zoom = {5} center = {[20,100]}>
                <GeoJSON style = { this.countryStyle } data = {mapData.features} onEachFeature = {this.onEachCountry}></GeoJSON>
            </MapContainer>
        </div>
        );
    }
}

export default MyMap;