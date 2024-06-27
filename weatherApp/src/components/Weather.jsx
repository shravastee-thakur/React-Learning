import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import search from "../assets/search.png";
import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import humidity from "../assets/humidity.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";

const Weather = () => {

    const inputRef = useRef()
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "010d": rain,
    "010n": rain,
    "013d": snow,
    "013n": snow,
  };

  const search1 = async (city) => {
    if(city === "") {
        alert("Enter city name");
        return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1cda490e2f1e0a0f8b65377ce9c075dd`;

      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      const icon = allIcons[data.weather[0].icon] || clear;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
        
    }
  };

  useEffect(() => {
    search1("Mumbai");
  }, []);

  return (
    <div className="weather">
      <div className="search">
        <input 
        ref={inputRef}
        type="text" 
        placeholder="Search" 
        />
        <img src={search} alt="" onClick={() => search1(inputRef.current.value)} />
      </div>

      <img src={weatherData.icon} alt="" className="weather-icon" />
      <p className="temperature">{weatherData.temperature}&deg;C</p>
      <p className="location">{weatherData.location}</p>

      <div className="weather-data">
        <div className="col">
          <img src={humidity} alt="" />
          <div>
            <p>{weatherData.humidity} %</p>
            <span>Humidity</span>
          </div>
        </div>

        <div className="col">
          <img src={wind} alt="" />
          <div>
            <p>{weatherData.windSpeed} Km/hr</p>
            <span>Wind speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
