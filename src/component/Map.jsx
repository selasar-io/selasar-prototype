import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet/dist/leaflet';
import icon from '../asset/marker.png';
import './Map.css'
function Map() {
    useEffect(() => {
        const GSP_coordinate = [-7.770121424862446, 110.37784742786181];

        const m_mono = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');

        const map = L.map('mapid', {
            center: GSP_coordinate,
            zoom: 19,
            zoomControl: false,
            layers: [m_mono]
        });
        const Icon = L.divIcon({
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            popupAnchor: [10, 0],
            shadowSize: [0, 0],
            className:'my-icon',
            keepIconCenter:true
        });
        const marker = L.marker(GSP_coordinate, {
            icon: Icon,
            title: 'You',
            bubblingMouseEvents: true
        }).bindTooltip("You").openTooltip().addTo(map);

        return () => {
            map.remove()
        }
    }
        , [])
    return (
        <div id='mapid' style={{ height: "100vh", width: "100vw" }}></div>
    )
}
export default Map;