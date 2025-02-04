const container = document.querySelector("#weather");

export function displayWeather(data) {
  container.children.location.innerText = data.address;
  container.children.temperature.innerText = `${data.temp} °F`;
  container.children.conditions.innerText = data.conditions;

  toggleWeatherLoading();
  document.body.classList = data.icon;
}

export function toggleWeatherLoading() {
  container.classList.toggle("loading");
  if (container.classList.contains("loading")) {
    document
      .querySelectorAll("#weather > *")
      .forEach((elm) => (elm.innerText = ""));
  }
  container.ariaBusy = container.ariaBusy !== "true";
}
