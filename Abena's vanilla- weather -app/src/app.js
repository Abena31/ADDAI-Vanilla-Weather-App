function displayWeatherCondition(response) {
  let temperatureElement = document.querySelector("#forecast");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}
let apiKey = "79e8e44340f805883833d9a47487d24b";
let apiEndpoint =
  "http://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric";

axios.get(apiEndpoint).then(displayWeatherCondition);
