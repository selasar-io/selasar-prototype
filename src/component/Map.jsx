import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet/dist/leaflet';
import icon from '../asset/marker.svg';
import { bingTileLayer } from '../../lib/helpers/basemaphelpers';
function Map() {
    useEffect(() => {
        const GSP_coordinate = [-7.770121424862446, 110.37784742786181];

        const osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',{maxZoom:18});
        const bing = bingTileLayer('https://ecn.{s}.tiles.virtualearth.net/tiles/h{q}.jpeg?g=12825');

        const map = L.map('mapid', {
            center: GSP_coordinate,
            zoom: 19,
            zoomControl: false,
            layers: [osm],
            attributionControl:false
        });
        const Icon = L.icon({
            iconUrl:icon,
            iconSize: [70, 70]
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