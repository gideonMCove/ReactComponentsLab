import './WeatherForcast.css'
const WeatherForcast = (props) => {
    return (
        <div className="weather">
            <h2>{props.weatherForcasts[i].day}</h2>
            <img src={props.weatherForcasts[i].img} alt={props.weatherForcasts[i].img} />
            <p><span>conditions: {props.weatherForcasts[i].conditions} </span></p>
            <p><span>time: </span>{props.weatherForcasts[i].time}</p>
        </div>

    )

}

export default WeatherForcast