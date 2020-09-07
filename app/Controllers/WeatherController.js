import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//NOTE add more css to the clock
function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerHTML = `${hour}: ${min}: ${sec}`;
  var t = setTimeout(function () {
    currentTime();
  }, 1000);
  ProxyState.time = hour;
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}

function _drawGreeting() {
  let elem = document.getElementById("greeting");
  let hour = ProxyState.time;
  let user = ProxyState.user;
  if (hour >= 5 && hour <= 11) {
    elem.innerHTML = `<h1>Good Morning, ${user}</h1>`;
  } else if (hour >= 12 && hour <= 17) {
    elem.innerHTML = `<h1>Good Afternoon, ${user}</h1>`;
  } else {
    elem.innerHTML = `<h1>Good Evening, ${user}</h1>`;
  }
}

//NOTE add a icon to click between C and F
function _drawWeather() {
  let template = ProxyState.weather.Template;
  document.getElementById("weather").innerHTML = template;
}

export default class WeatherController {
  constructor() {
    ProxyState.on("weather", _drawWeather);
    ProxyState.on("time", _drawGreeting);
    currentTime();
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
