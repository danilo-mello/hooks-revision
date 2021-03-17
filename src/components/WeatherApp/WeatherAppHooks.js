import React, { useState } from "react";
import CityWeatherHooks from "./CityWeatherHooks";

const WeatherAppHooks = (props) => {
  const [enteredCity, setEnteredCity] = useState("Vancouver");
  const [enteredCityWeather, setEnteredCityWeather] = useState("Vancouver");

  const changeHandler = (e) => {
    setEnteredCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setEnteredCityWeather(enteredCity);
  };

  return (
    <div className="container">
      
      <div className="row justify-content-center">
        <form onSubmit={submitHandler}>
          <input type="text" value={enteredCity} onChange={changeHandler} />
          <input type="submit" className="btn btn-primary" value="Search!" />
        </form>
      </div>

      <CityWeatherHooks cityName={enteredCityWeather} />

    </div>
  );
};

export default WeatherAppHooks;

