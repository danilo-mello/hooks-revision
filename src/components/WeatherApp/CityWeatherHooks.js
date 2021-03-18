import React, { useState, useEffect } from "react";
import axios from "axios";

const CityWeatherHooks = (props) => {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [tempMin, setTempMin] = useState("");
  const [tempMax, setTempMax] = useState("");


  useEffect(() => {
    const getWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      const resp = await axios.get(url);
      setCity(resp.data.name)
      setTemp(resp.data.main.temp)
      setTempMin(resp.data.main.temp_min)
      setTempMax(resp.data.main.temp_max)


      console.log(resp.data)
    };

    getWeather();
  }, [props.cityName]);



  return (
    <>
      <h1>{city}</h1>
      <h1>Temp: {temp}</h1>
      <h1>Temp Min: {tempMin}</h1>
      <h1>Temp Max: {tempMax}</h1>



    </>
  );
};

export default CityWeatherHooks;
