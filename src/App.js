import React, { useRef, useState } from 'react';
import './App.css';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';

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
        }]
    }]
  });

  // use useRef to access DOM nodes or react elements
  const inputRef = useRef();
  const apiKey = 'caba6cf4fd21b43e2d81bdebadc75c85';

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let inputValue = inputRef.current.value;
    let locationSearchUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=${apiKey}`;
    
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
            <WeatherForecast
              location={weatherData.city.name} 
              temp={weatherData.list[0].main.temp}
              minTemp={weatherData.list[0].main.temp_min}
              maxTemp={weatherData.list[0].main.temp_max}
              description={weatherData.list[0].weather[0].description}
              iconCode={weatherData.list[0].weather[0].icon}
            />
            :
            <h4>No weather data available</h4>
          }
      </header>
    </div>
  );
}

export default App;
