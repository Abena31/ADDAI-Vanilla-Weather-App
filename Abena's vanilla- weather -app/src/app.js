function displayWeatherCondition(response) {
  let temperatureElement = document.querySelector("#forecast");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}
let apiKey = "e7846e44c0bd21b19tc86a51o0fef236";
let apiEndpoint =
  "https://api.shecodes.io/weather/v1/forecast?query={query}&key={key}";

axios.get(apiEndpoint).then(displayWeatherCondition);
