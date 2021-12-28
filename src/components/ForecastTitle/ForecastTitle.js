import './ForecastTitle.css';

const ForecastTitle = ({ location }) => {
    return (<h2 className="location">5-Day Weather - {location}</h2>)
}

export default ForecastTitle;