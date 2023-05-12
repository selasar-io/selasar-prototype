import React from 'react';
import searchbutton from './../asset/search.svg'
const SearchButton = () => {
  return (
    <div className='flex w-full justify-center'>
      <div className="w-11 h-11 rounded-full bg-selasar-primary flex flex-col justify-center items-center" >
        <div className='w-25 h-27' style={{ backgroundImage: `url(${searchbutton})` }}></div>
      </div>
    </div>
  );
};

export default SearchButton;
