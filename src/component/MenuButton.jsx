import React from 'react';
import { useHistory } from 'react-router-dom'
import menubutton from './../asset/menu-button.svg'

const MenuButton = () => {
  const history = useHistory()

  function signOutNow () {
    const yakinNgga = confirm('Apakah anda ingin logout?')
    if (yakinNgga) {
      localStorage.removeItem('selasar:isLoggedIn')
      history.push('/signin')
    }
  }

  return (
    <button className="fixed top-0 left-0 m-5 w-11 h-11 rounded-[10px] bg-selasar-primary flex flex-col justify-center items-center z-1000" onClick={signOutNow}>
      <div className='w-19 h-18' style={{ backgroundImage: `url(${menubutton})` }}></div>
    </button>
  );
};

export default MenuButton;
