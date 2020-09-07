import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//NOTE add more css to the clock

function _drawWeather() {
  let template = ProxyState.weather.Template;
  document.getElementById("weather").innerHTML = template;
}

export default class WeatherController {
  constructor() {
    ProxyState.on("weather", _drawWeather);
    this.getWeather();
  }

  switchTemp() {
    let temp = ProxyState.weather.temp;
    if (temp == true) {
      document.getElementById("temp").innerHTML = ProxyState.weather.c;
      ProxyState.weather.temp = false;
    } else {
      document.getElementById("temp").innerHTML = ProxyState.weather.f;
      ProxyState.weather.temp = true;
    }
  }

  getWeather() {
    try {
      weatherService.getWeather();
    } catch (e) {
      console.error(e);
    }
  }
}
