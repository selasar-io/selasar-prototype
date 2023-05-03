import React from 'react';
import menubutton from './../asset/menu-button.svg'
const MenuButton = () => {
  return (
    <button className="fixed top-5 left-5 w-11 h-11 rounded-full bg-red-600 flex flex-col justify-center items-center z-1000">
      <div className='w-19 h-18' style={{ backgroundImage: `url(${menubutton})` }}></div>
    </button>
  );
};

export default MenuButton;
