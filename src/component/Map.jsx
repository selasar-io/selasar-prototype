import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet/dist/leaflet';
function Map() {
    useEffect(() => {
        const GSP_coordinate = [-7.770121424862446, 110.37784742786181];

        const m_mono = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
        
        const map = L.map('mapid', {
            center: GSP_coordinate,
            zoom: 11,
            zoomControl: true,
            layers: [m_mono]
        });
        
        return () => {
            map.remove()
        }
    }
, [])
return(
    <div id='mapid' style={{ height: "100vh", width:"100vw" }}></div>
)
}
export default Map;