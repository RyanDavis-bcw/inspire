import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  console.log("THE WEATHER MAN SAYS:", ProxyState.weather);
  document.getElementById('weather').innerHTML = ProxyState.weather.Template
}
export default class WeatherController {
  constructor() {
    ProxyState.on("weather", drawWeather);
    this.getWeather()
    setInterval(this.getWeather, 60000);
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }
  toggle() {
    weatherService.toggle()
  }

}
