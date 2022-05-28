import React, { useEffect } from 'react';
import Hour_1 from './Hour_1';

export default function Weather({ weather, hourly }) {
  // console.log(hourly);
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <h1>Mumbai,IND</h1>
        <div className="flex items-center">
          <div>30<sup>o</sup>C</div>
          <div>icon</div>
        </div>
      </div>
    </>
  );
}
