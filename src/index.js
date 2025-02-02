import "./style.css";
import getWeather from "./weather.js";

document.querySelector("#weather-search").addEventListener("submit", (e) => {
  e.preventDefault();
  const location = e.target.location.value;
  getWeather(location);
});
