import React, { useState, useEffect } from 'react';
import Map from "src/component/Map"
import MenuButton from "src/component/MenuButton"
import SearchButton from "src/component/SearchButton"
import MapControl from "src/component/MapControl"
import menuButton from 'src/asset/menu-button.svg'
import { events } from 'src/data'

function EventDetails () {
  const [isShow, setIsShow] = useState(false)
  const [eventId, setEventId] = useState('jogjaNow')

  let udahBang = false
  useEffect(() => {
    if (udahBang) return

    setTimeout(() => {
      window.leafletMarker1.on('click', () => {
        setEventId('jogjaNow')
        setIsShow(true)
      })
      window.leafletMarker2.on('click', () => {
        setEventId('wayangKulit')
        setIsShow(true)
      })
    }, 2000) // agak menghacking

    udahBang = false
  }, [])

  const event = events[eventId]

  return (
    <div className={`flex flex-col w-[30rem] mt-5 -mb-5 bg-selasar-primary rounded-t-[10px] ${!isShow && 'hidden'}`}>
      <div className='self-center flex justify-center py-2 px-6 cursor-pointer w-full' onClick={() => setIsShow(false)}>
        <svg className='transform rotate-180' width="16" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.46967 0.46967C5.76256 0.176777 6.23744 0.176777 6.53033 0.46967L11.7803 5.71967C12.0732 6.01256 12.0732 6.48744 11.7803 6.78033C11.4874 7.07322 11.0126 7.07322 10.7197 6.78033L6 2.06066L1.28033 6.78033C0.987437 7.07322 0.512563 7.07322 0.21967 6.78033C-0.0732233 6.48744 -0.0732233 6.01256 0.21967 5.71967L5.46967 0.46967ZM6 8.06066L1.28033 12.7803C0.987437 13.0732 0.512563 13.0732 0.21967 12.7803C-0.0732233 12.4874 -0.0732233 12.0126 0.21967 11.7197L5.46967 6.46967C5.76256 6.17678 6.23744 6.17678 6.53033 6.46967L11.7803 11.7197C12.0732 12.0126 12.0732 12.4874 11.7803 12.7803C11.4874 13.0732 11.0126 13.0732 10.7197 12.7803L6 8.06066Z" fill="white"/>
        </svg>
      </div>
      <div className='flex flex-col items-center bg-white pt-5 pb-6 px-6 rounded-t-[10px]'>
        <div className='flex space-x-4 mb-5'>
          <div className='px-6 py-1 bg-selasar-primary text-white inline-flex divide-x rounded-full cursor-pointer'>
            Arah
          </div>
          <div className='px-6 py-1 bg-white border border-selasar-primary text-selasar-primary inline-flex divide-x rounded-full cursor-pointer'>
            Berangkat
          </div>
          <div className='px-6 py-1 bg-[#F8F2F2] text-selasar-content rounded-full cursor-pointer'>
            Daftar
          </div>
        </div>
        <div className='mb-4'>
          <img 
            className='h-[100px] rounded-[10px]' 
            src={`/src/asset/events-img/${eventId}.png`} 
            alt={event.title}
          />
        </div>
        <div className='font-semibold mb-1'>{event.title}</div>
        <div className='text-selasar-content text-sm'>{event.date}</div>
      </div>
    </div>
  )
}

function Main() {
  return (
    <>
      <div className='h-screen'>
        <div className="h-full">
          <MenuButton />
          <div className='flex flex-col items-center justify-center fixed bottom-5 right-0 left-0 z-1000'>
            <a href="/search">
              <SearchButton />
            </a>
            <EventDetails />
          </div>
          <MapControl />
          <Map />
        </div>
      </div>
    </>
  )
}

export default Main
