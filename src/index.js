import "./style.css";
import getWeather from "./weather.js";
import displayWeather from "./display-weather.js";

document.querySelector("#weather-search").addEventListener("submit", (e) => {
  e.preventDefault();
  const location = e.target.location.value;
  e.target.reset();
  getWeather(location).then(displayWeather);
});
