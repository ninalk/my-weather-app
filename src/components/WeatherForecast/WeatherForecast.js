import './WeatherForecast.css';
import React, { useState } from 'react';
import WeatherIcon from './../WeatherIcon/WeatherIcon';

const WeatherForecast = ({ minTemp, maxTemp, dateText, temp, description, iconCode }) => {
    const [today, setToday] = useState('');

    // function that converts date text to day of week
    const getDay = (date) => {
        const dayOfWeek = new Date(date).getDay();
        return isNaN(dayOfWeek) ? null : 
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] [dayOfWeek];
    }

    dateText = dateText.slice(0, 10);
    
    // check todays date
    let currentDate = new Date();
    
    // function to covert kelvin to fahrenheit
    const kelvinToFahrenheit = (kelvin) => {
        const fahrenheit = (kelvin - 273.15)*1.8000 + 32.00;
        return fahrenheit.toFixed();
    }

    return (
        <div 
            className="weather" 
            style={dateText === currentDate.toISOString().slice(0, 10) ? {backgroundColor: 'grey'} : {}}
        >
            <p className="day">{getDay(dateText)}</p>
            <p className="current-temp">{kelvinToFahrenheit(temp)} &deg;F</p>
            <WeatherIcon iconCode={iconCode}/>
            <p className="description">{description}</p>
            <div className="temps">
                <p className="high">H: {kelvinToFahrenheit(maxTemp)} &deg;F</p>
                <p className="low">L: {kelvinToFahrenheit(minTemp)} &deg;F</p>
            </div>
        </div>
    )
}

export default WeatherForecast;