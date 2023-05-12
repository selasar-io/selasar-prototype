import { useState } from 'react'
import LandingLogo from 'src/component/LandingLogo'
import arrowLeftIcon from 'src/asset/arrow-left.svg'
import searchIcon from 'src/asset/search-alt.svg'

const events = {
  jogjaNow: {
    title: 'Jogja Now 2022',
    date: '18 November 2022',
    registration: 'Registration Open'
  },
  wayangKulit: {
    title: 'Pagelaran Wayang Kulit',
    date: 'Sedang Berlangsung',
    registration: 'Free Registration'
  },
  jogjaUpcoming: {
    title: 'Jogja Upcoming Event 2023',
    date: '2 Januari 2023',
    registration: 'Free Registration'
  },
  gkTourism: {
    title: 'Gunungkidul Tourism Fest 2022',
    date: 'Sedang Berlangsung',
    registration: 'Registration Closed'
  }
}
const categories = [
  {
    title: 'Terdekat di kotamu!',
    desc: 'Temukan keseruan tidak jauh dari lokasimu',
    events: ['jogjaNow', 'wayangKulit', 'jogjaUpcoming']
  },
  {
    title: 'Sedang berlangsung',
    desc: 'Datangi dan nikmati event yang sedang berlangsung',
    events: ['gkTourism', 'wayangKulit', 'jogjaUpcoming']
  }
]
const tags = ['Terdekat', 'Konser', 'Budaya', 'Kuliner', 'Keagamaan', 'Pendidikan', 'Olahraga']

function TagLabel ({ name, isActive = false }) {
  return (
    <div className={`px-6 rounded-[22px] cursor-pointer 
      ${isActive ? 'bg-selasar-primary text-white' : 'bg-[#D9D9D9] text-selasar-content'}`}>
      {name}
    </div>
  )
}

function Event ({ id, details }) {
  const isClosed = details.registration === 'Registration Closed'

  return (
    <div>
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

	return (
		<div className='max-w-2xl mx-auto'>
      <div className='mt-10 mb-16 mx-8'>
        <div className='text-selasar-primary mb-9'>
          <LandingLogo />
        </div>
        <div className='space-y-5 mb-9'>
          <div className='flex items-center'>
            <div className='mr-5'>
              <a href="/">
                <img src={arrowLeftIcon} alt="Back" width={22} height={22} />
              </a>
            </div>
            <div className='grow flex px-5 py-3 text-[#B4B4B4] border-2 border-[#B4B4B4] rounded-[12px]'>
              <div className='mr-4'>
                <img src={searchIcon} alt="Search" width={22} height={22} />
              </div>
              <div>Cari event di dekatmu</div>
            </div>
          </div>
          <div className='flex space-x-3 overflow-auto [&::-webkit-scrollbar]:hidden'>
            {tags.map((tagName, i) => (
              <TagLabel name={tagName} isActive={tagName === activeTag} key={i} />
            ))}
          </div>
        </div>
        <div className='flex flex-col space-y-8'>
          {categories.map((cat, i) => (
            <div key={i}>
              <h2 className='text-xl font-semibold mb-1'>{cat.title}</h2>
              <h3 className='text-selasar-content mb-4'>{cat.desc}</h3>
              <div className='flex space-x-3'>
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
