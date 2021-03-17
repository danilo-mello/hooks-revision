import React, { useState, useEffect } from "react";
import axios from "axios";

const CityWeatherHooks = (props) => {
  const [city, setCity] = useState("");

  useEffect(() => {
    const getWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&units=metric&appid=44690f1d736d6c66baf34ce576ab330e`;
      const resp = await axios.get(url);
      setCity(resp.data)
      console.log(resp.data)
    };

    getWeather();
  }, [props.cityName]);


  const iconUrl =
    city && `http://openweathermap.org/img/w/${city.weather[0].icon}.png`;


  return (
    <>
      <h1>{city.name}</h1>

    </>
  );
};

export default CityWeatherHooks;