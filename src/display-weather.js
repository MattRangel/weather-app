export default function displayWeather(data) {
  const container = document.querySelector("#weather");

  container.children.location.innerText = data.address;
  container.children.temperature.innerText = `${data.temp} °F`;
  container.children.conditions.innerText = data.conditions;

  container.classList = data.icon;
}
