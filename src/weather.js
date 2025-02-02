const KEY = process.env.VISUAL_CROSSING_KEY;

export default async function getWeather(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${KEY}&contentType=json`;
  try {
    const response = await fetch(url);
    const json = await response.json();

    return filterJson(json);
  } catch (error) {
    console.error(error);
    return {
      temp: "##",
      conditions: "",
      address: `Error retrieving location "${location}"!`,
      icon: "",
    };
  }
}

function filterJson({
  resolvedAddress,
  currentConditions: { temp, conditions, icon },
}) {
  return {
    address: resolvedAddress,
    temp,
    conditions,
    icon,
  };
}
