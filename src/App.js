// THIS COMPONENT ONLY DEALS WITH ROUTING OF COMPONENTS

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Today from './pages/Today';
import Tomorrow from './pages/Tomorrow';
import Yesterday from './pages/Yesterday';
import Weekly from './pages/Weekly';
import Map from './pages/Map';
import Aqi from './pages/Aqi';

export default function Routes({
  weather,
  daily,
  hourly,
  past,
  aqi,
  alerts,
  cityName,
}) {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Today />} />
          <Route path="/tomorrow" element={<Tomorrow />} />
          <Route path="/yesterday" element={<Yesterday />} />
          <Route path="/weekly" element={<Weekly />} />
          <Route path="/aqi" element={<Aqi />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Router>
    </>
  );
}
