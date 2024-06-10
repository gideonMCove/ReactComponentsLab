import './WeatherForcast.css'
const WeatherForcast = (props) => {
    return (
        <div className="weather">
            <h2>{props.weather.day}</h2>
            <img src={props.weather.img} alt={props.weather.imgAlt} />
            <p><span>conditions: {props.weather.conditions} </span></p>
            <p><span>time: </span>{props.weather.time}</p>
        </div>

    )

}

export default WeatherForcast