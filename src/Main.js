// THIS COMPONENT ONLY DEALS WITH DATA FETCHING AND TRANSFERING

import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import App from './App';
import Navbar from './Components/Navbar';
// import { Link } from 'react-router-dom';

import { AiOutlineArrowRight } from 'react-icons/ai';
export default function Main() {
  // INITIALIZING THE STATES
  const [searchedLocation, setSearchedLocation] = useState();
  const [weather, setWeather] = useState('home weather');
  const [hourly, sethourly] = useState('hourly weather');
  const [daily, setDaily] = useState('daily weather');
  const [past, setPast] = useState();
  const [alerts, setAlerts] = useState('alerts !');
  const [aqi, setAqi] = useState('aqi !');
  const [cityName, setCityName] = useState();
  const [KEY, setKEY] = useState('c2a63fec710d5b3c8746be0631294546')


  // console.log(cityName);
  // console.log(weather);

  //INITIALIZING "useRef" HOOK FOR SEARCH BAR AND QUICK SEARCH
  const location = useRef(null);
  const new_york = useRef(null);
  const london = useRef(null);
  const mumbai = useRef(null);
  const tokyo = useRef(null);
  const sydney = useRef(null);

  // GETTING THE SEARCHED RESULTS
  function handleSubmit(e) {
    const value = location.current.value;
    setSearchedLocation(value);
    e.preventDefault();
  }

  //GETTING PAST DATES
  const dates = [];
  for (let i = 1; i < 6; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    dates.push(Math.round(date.getTime() / 1000));
    // console.log(date.toString());
  }

  useEffect(() => {
    // FUNCTION WHICH GETS WEATHER DATA RESPECTIVELY
    function weatherData(latitude, longitude) {
      // OPEN WEATHER MAP API KEY
      const API_KEY = 'c2a63fec710d5b3c8746be0631294546';

      // OPEN WEATHER MAP URL ONECALL
      const url_1 = `https://api.openweathermap.org/data/2.5/onecall?lat=28.7041&lon=77.1025&exclude=minutely&units=metric&appid=${API_KEY}`;

      //OPEN WEATHER MAP URL AIR POLLUTION
      const url_2 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

      axios
        .get(url_1)
        .then((res) => {
          // console.log(res);
          // UPDATING THE INDIVIDUAL STATES
          setWeather(res.data.current);
          setDaily(res.data.daily);
          sethourly(res.data.hourly);
          setAlerts(res.data.alerts);
        })
        .catch((err) => {
          console.log(err);
        });
      //GETING AQI DATA
      axios
        .get(url_2)
        .then((res) => {
          // console.log(res);
          setAqi(res);
        })
        .catch((err) => {
          console.log(err);
        });

      //ARRAY STORING ENDPOINTS OF PAST DATES URL
      const past_urls = [];
      //MAKING WORK EASY BY AUTOMATING STUFF
      for (let i = 0; i < dates.length; i++) {
        past_urls.push(
          `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${dates[i]}&appid=${API_KEY}`
        );
      }
      //SEGARAGATING INDIVIDUAL URL AND FETCHING ENDPOINTS
      const past_data_1 = axios.get(past_urls[0]);
      const past_data_2 = axios.get(past_urls[1]);
      const past_data_3 = axios.get(past_urls[2]);
      const past_data_4 = axios.get(past_urls[3]);
      const past_data_5 = axios.get(past_urls[4]);
      //FETCHING PAST WEATHER DATA
      axios
        .all([past_data_1, past_data_2, past_data_3, past_data_4, past_data_5])
        .then(
          axios.spread((...res) => {
            const res_1 = res[0];
            const res_2 = res[1];
            const res_3 = res[2];
            const res_4 = res[3];
            const res_5 = res[4];
            setPast([res_1, res_2, res_3, res_4, res_5]);
          })
        )
        .catch((err) => {
          console.log(err);
        });
    }

    // FUNCTION FOR GETTING WEATHER ACCORDING TO USER'S CURRENT LOCATION
    function CurrentLocation() {
      navigator.geolocation.getCurrentPosition((x) => {
        weatherData(x.coords.latitude, x.coords.longitude);
        CityName(x.coords.latitude, x.coords.longitude);
      });
    }

    // FUNCTION FOR GETTING WEATHER ACCORDING TO SEARCHED LOCATION
    function SearchedLocation() {
      const API_KEY = '26c2b7a6ca287d0766bcc12bb4169d8b';

      // DIRECT GEOCODING URL
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${searchedLocation}&limit=1&appid=${API_KEY}`;
      axios
        .get(url)
        .then((res) => {
          // console.log(res)
          weatherData(res.data[0].lat, res.data[0].lon);
          setCityName([
            res.data[0].country,
            res.data[0].name,
            res.data[0].state,
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    function QuickSearch() {
      const API_KEY = '26c2b7a6ca287d0766bcc12bb4169d8b';

      // DIRECT GEOCODING URL
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${searchedLocation}&limit=1&appid=${API_KEY}`;
      axios
        .get(url)
        .then((res) => {
          // console.log(res)
          weatherData(res.data[0].lat, res.data[0].lon);
          setCityName([
            res.data[0].country,
            res.data[0].name,
            res.data[0].state,
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //FUNCTION FOR GETTING CITY NAME FROM CO-ORDINATES
    function CityName(lat, lon) {
      const API_KEY = '26c2b7a6ca287d0766bcc12bb4169d8b';
      //REVERSER GEOCODING URL
      const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${API_KEY}`;

      axios
        .get(url)
        .then((res) => {
          // console.log(res)
          setCityName([
            res.data[0].country,
            res.data[0].name,
            res.data[0].state,
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // TOGGLE BETWEEN SEARCHED LOCATION AND CURRENT LOCATION
    if (searchedLocation) {
      SearchedLocation();
    } else {
      CurrentLocation();
    }
  }, [searchedLocation]);

  //MENU TOGGLE
  const [display, setDisplay] = useState('none');

  function toggleMenu() {
    if (display == 'none') {
      setDisplay('block');
    } else {
      setDisplay('none');
    }
  }

  return (
    <>
      <header className="w-screen h-auto flex items-center justify-between px-2.5">
        <Navbar />
        {/* SEARCH BAR */}
        <form onSubmit={handleSubmit}>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="search any city"
              ref={location}
              className="w-32"
            />
            <button type="submit">
              <AiOutlineArrowRight />
            </button>

            {/* <input
            type="submit"
            placeholder=''
            className="rounded-lg"
          ></input> */}
          </div>
        </form>
      </header>

      {/* PASSING WEATHER DATA TO ROUTES COMPONENTS */}
      <App
        weather={weather}
        daily={daily}
        hourly={hourly}
        past={past}
        alerts={alerts}
        aqi={aqi}
        cityName={cityName}
      />
    </>
  );
}
