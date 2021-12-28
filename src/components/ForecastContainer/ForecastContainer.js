import './ForecastContainer.css';
import WeatherForecast from './../WeatherForecast/WeatherForecast';

const ForecastContainer = ({weatherData}) => {
    return (
        <div className="forecast-container">
        {weatherData.list.map((d, i) => {
            if (i % 8 === 0) {
                return (
                    <WeatherForecast
                        dateText={d.dt_txt} 
                        temp={d.main.temp}
                        minTemp={d.main.temp_min}
                        maxTemp={d.main.temp_max}
                        description={d.weather[0].description}
                        iconCode={d.weather[0].icon}
                        key={i}
                    />
                )
            }
        })}
        </div>
    )
}

export default ForecastContainer;