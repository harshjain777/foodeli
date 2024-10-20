import React from 'react';
import img1 from '../assets/img1.avif';
import Navbar from './Navbar';

function Herosection() {
  return (
    <div 
      className='w-full h-[50rem] bg-cover bg-center relative' 
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="z-10">
        <Navbar />
      </div>
    </div>
  );
}

export default Herosection;
