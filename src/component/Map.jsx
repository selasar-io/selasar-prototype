import React, { useState, useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet/dist/leaflet';
import icon1 from '../asset/marker1.svg';
import icon2 from '../asset/marker2.svg';
import { bingTileLayer } from '../../lib/helpers/basemaphelpers';
function Map() {
    useEffect(() => {
        const event1 = [-7.770121424862446, 110.37784742786181];
        const event2 = [-7.771021424862446, 110.37684742786181];

        const osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { maxZoom: 18 });
        const bing = bingTileLayer('https://ecn.{s}.tiles.virtualearth.net/tiles/h{q}.jpeg?g=12825');

        const map = L.map('mapid', {
            center: event1,
            zoom: 19,
            zoomControl: false,
            layers: [osm],
            attributionControl: false
        });

        const Icon1 = L.icon({
            iconUrl: icon1,
            iconSize: [70, 70]
        });
        const marker1 = L.marker(event1, {
            icon: Icon1,
            title: 'event1',
            bubblingMouseEvents: true
        }).bindTooltip("event1").openTooltip().addTo(map);


        const Icon2 = L.icon({
            iconUrl: icon2,
            iconSize: [70, 70]
        });
        const marker2 = L.marker(event2, {
            icon: Icon2,
            title: 'event2',
            bubblingMouseEvents: true
        }).bindTooltip("event2").openTooltip().addTo(map);

        window.leafletMap = map
        window.leafletMarker1 = marker1
        window.leafletMarker2 = marker2

        return () => {
            map.remove()
        }
    }
        , [])
    return (
        <div id='mapid' style={{ height: "100%", width: "100%" }}></div>
    )
}
export default Map;