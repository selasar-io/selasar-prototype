import React from 'react';
import searchbutton from './../asset/search.svg'
const SearchButton = () => {
  return (
    <div className='flex w-full justify-center'>
      <div className="fixed bottom-5 w-11 h-11 rounded-full bg-red-600 flex flex-col justify-center items-center z-1000" >
        <div className='w-25 h-27' style={{ backgroundImage: `url(${searchbutton})` }}></div>
      </div>
    </div>
  );
};

export default SearchButton;
