// this component will render only city name, icon, temp

import React, { useEffect } from 'react';
import Hourly from './Hourly';
import CurrentDetails from './CurrentDetails';

export default function Weather({ weather }) {
  return (
    <>
      <div className="bg-gray-200 rounded-md mx-3 p-2 grid">

        <div className="flex flex-col justify-center items-center">
          <h1>Mumbai,IND</h1>
          <div className="flex items-center">
            <div>
              30<sup>o</sup>C
            </div>
            <div>icon</div>
          </div>
        </div>

        <Hourly />

        <CurrentDetails />

      </div>
    </>
  );
}
