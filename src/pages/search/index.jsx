import { useState } from 'react'
import { events, categories, tags } from 'src/data'
import arrowLeftIcon from 'src/asset/arrow-left.svg'
import searchIcon from 'src/asset/search-alt.svg'

function TagLabel ({ name, isActive = false, onClick = () => {} }) {
  return (
    <div className={`px-6 rounded-[22px] cursor-pointer 
      ${isActive ? 'bg-selasar-primary text-white' : 'bg-[#D9D9D9] text-selasar-content'}`} onClick={onClick}>
      {name}
    </div>
  )
}

function Event ({ id, details }) {
  const isClosed = details.registration === 'Registration Closed'

  return (
    <div className='basis-[220px] shrink-0'>
      <div className='mb-2'>
        <img 
          className='rounded-[10px]' 
          src={`/src/asset/events-img/${id}.png`} 
          alt={details.title}
        />
      </div>
      <div className='font-semibold mb-1'>{details.title}</div>
      <div className='text-selasar-content text-sm mb-1'>{details.date}</div>
      <div className={`${isClosed ? 'text-selasar-primary' : 'text-selasar-content'} text-sm`}>
        {details.registration}
      </div>
    </div>
  )
}

function Search() {
  const [activeTag, setActiveTag] = useState('Terdekat')

  function focusToSearchInput () {
    document.getElementById('search').focus()
  }

	return (
		<div className='max-w-2xl mx-auto'>
      <div className='mt-10 mb-16 mx-6'>
        <div className='flex justify-center text-selasar-primary mb-8'>
          <a className='inline-flex flex-col items-center' href='/'>
            <div className='mb-2'>
              <svg width="40" viewBox="0 0 51 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.962891" y="22.1494" width="21.8505" height="21.8505" rx="10.9252" />
                <rect x="28.385" y="0.29895" width="21.8505" height="21.8505" rx="10.9252" />
                <rect x="28.385" y="32.0928" width="11.9073" height="11.9073" rx="5.95363" />
              </svg>
            </div>
            <div className="text-2xl font-medium">Selasar.io</div>
          </a>
        </div>
        <div className='space-y-5 mb-9'>
          <div className='flex items-center'>
            <div className='mr-5'>
              <a href="/">
                <img src={arrowLeftIcon} alt="Back" width={22} height={22} />
              </a>
            </div>
            <div className='grow flex px-5 py-3 text-[#B4B4B4] border-2 border-[#B4B4B4] rounded-[12px]' onClick={focusToSearchInput}>
              <div className='mr-4'>
                <img src={searchIcon} alt="Search" width={22} height={22} />
              </div>
              <input id='search' className='w-full focus:outline-none' type='text' placeholder='Cari event di dekatmu'></input>
            </div>
          </div>
          <div className='flex space-x-3 overflow-auto [&::-webkit-scrollbar]:hidden'>
            {tags.map((tagName, i) => (
              <TagLabel name={tagName} isActive={tagName === activeTag} key={i} onClick={() => setActiveTag(tagName)} />
            ))}
          </div>
        </div>
        <div className='flex flex-col space-y-8'>
          {categories.map((cat, i) => (
            <div key={i}>
              <h2 className='text-xl font-semibold mb-1'>{cat.title}</h2>
              <h3 className='text-selasar-content mb-4'>{cat.desc}</h3>
              <div className='flex space-x-3 flex-nowrap overflow-auto [&::-webkit-scrollbar]:hidden'>
                {cat.events.map((eventId, i) => (
                  <Event id={eventId} details={events[eventId]} key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
		</div>
	);
}

export default Search;
