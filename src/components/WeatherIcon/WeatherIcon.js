import './WeatherIcon.css';

const WeatherIcon = ({ iconCode }) => {
    const weatherIconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    return (<img src={weatherIconUrl} alt='' />)
}

export default WeatherIcon;