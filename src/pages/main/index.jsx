import React, { useState, useEffect } from 'react';
import Map from "src/component/Map"
import MenuButton from "src/component/MenuButton"
import SearchButton from "src/component/SearchButton"
import MapControl from "src/component/MapControl"

function Main() {

  return (
    <>
      <div className='h-screen'>
        <div className="h-full">
          <MenuButton />
          <a href="/search"><SearchButton /></a>
          <MapControl />
          <Map />
        </div>
      </div>
    </>
  )
}

export default Main
