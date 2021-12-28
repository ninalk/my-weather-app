import React, { useRef, useState } from 'react';
import './App.css';
import ForecastContainer from './components/ForecastContainer/ForecastContainer';
import ForecastTitle from './components/ForecastTitle/ForecastTitle';

function App() {
  const [weatherData, setWeatherData] = useState({
    city: {
      name: ''
    },
    list: [{
      main: {
        temp: '',
        temp_min: '',
        temp_max: ''
      },
      weather: [{
          description: '',
          icon: ''
        }],
      dt_txt: ''
    }]
  });

  // use useRef to access DOM nodes or react elements
  const inputRef = useRef();

  // api key
  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let inputValue = inputRef.current.value;
    let locationSearchUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=${REACT_APP_API_KEY}`;
    
    // make api call to weatherAPI
    const makeApiCall = () => {
      fetch(locationSearchUrl)
        .then(res => {
          if (!res.ok) {
            throw new Error('Invalid location')
          }
          return res.json()
        })
        .then(data => {
          setWeatherData(data)
        })
        .catch(err => console.log(err))
    };
    makeApiCall();
  }

  return (
    <div className="App">
      <header className="App-header">
          <h1>My Weather App</h1>
          <form>
            <input type="text" placeholder="location" ref={inputRef} />
            <input type="submit" value="submit" onClick={handleFormSubmit}/>
          </form>
          {weatherData.city.name ?
            <>
              <ForecastTitle location={weatherData.city.name} />
              <ForecastContainer weatherData={weatherData} />
            </>
            :
            <h3>No Weather Data Available</h3>
          }
      </header>
    </div>
  );
}

export default App;
