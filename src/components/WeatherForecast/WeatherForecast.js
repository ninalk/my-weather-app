import './WeatherForecast.css';
import WeatherIcon from './../WeatherIcon/WeatherIcon';

const WeatherForecast = ({ minTemp, maxTemp, temp, description, location, iconCode }) => {
    
    const kelvinToFahrenheit = (kelvin) => {
        const fahrenheit = (kelvin - 273.15)*1.8000 + 32.00;
        return fahrenheit.toFixed();
    }

    return (
        <div className="weather">
            <h3 className="location">{location}</h3>
            <p className="current-temp">{kelvinToFahrenheit(temp)} &deg;F</p>
            <WeatherIcon iconCode={iconCode}/>
            <p className="description">{description}</p>
            <div className="temps">
                <p>H: {kelvinToFahrenheit(maxTemp)} &deg;F</p>
                <p>L: {kelvinToFahrenheit(minTemp)} &deg;F</p>
            </div>
        </div>
    )
}

export default WeatherForecast;