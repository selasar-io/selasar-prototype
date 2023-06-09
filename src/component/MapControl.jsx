import React from 'react';
import compass from './../asset/Compass.svg'
import plus from './../asset/plus.svg'
import minus from './../asset/minus.svg'

const MapControl = () => {    
    function zoomOut () {
        const map = window.leafletMap
        if (map.getZoom() > map.getMinZoom()) {
            map.setZoom(map.getZoom() - 1)
        }
    }

    function zoomIn () {
        const map = window.leafletMap
        if (map.getZoom() < map.getMaxZoom()) {
            map.setZoom(map.getZoom() + 1)
        }
    }

    return (
        <div className='fixed flex flex-col h-screen justify-center z-1000 right-0'>
            <button className="z-1000 right-0 w-11 h-11 rounded-[10px] bg-selasar-primary flex justify-center items-center mx-5 my-2">
                <div className='w-[24px] h-[24px]' style={{ backgroundImage: `url(${compass})` }}></div>
            </button>
            <button className="z-1000 right-0 w-11 h-11 rounded-[10px] bg-white flex justify-center items-center mx-5 my-2" onClick={zoomIn}>
                <div className='w-[24px] h-[24px]' style={{ backgroundImage: `url(${plus})` }}></div>
            </button>
            <button className="z-1000 right-0 w-11 h-11 rounded-[10px] bg-white flex justify-center items-center mx-5 my-2" onClick={zoomOut}>
                <div className='w-[24px] h-[24px]' style={{ backgroundImage: `url(${minus})` }}></div>
            </button>
        </div>
    );
};

export default MapControl;
