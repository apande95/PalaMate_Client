import React, {useState, useEffect} from "react";


const Weather = () => {
const [weather, setWeather] = useState(null);

useEffect(() => {

    const getWeather = async () => {
        const response = await fetch("http://localhost:5200/WeatherForecast");
        const data = await response.json();
        setWeather(data);
    }
    getWeather();
}, []);

return (
    <div>
        <h1>Weather</h1>
        {weather && (
            <div>
                <h2>{weather.map(w => <li>{w.date}</li>)}</h2>
            </div>
        )}
    </div>
);
};

export default Weather;