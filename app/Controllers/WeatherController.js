import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function _drawWeather() {
let template = ProxyState.weather.Template
document.getElementById('weather').innerHTML = template
}


export default class WeatherController {
  constructor() {
    ProxyState.on("weather", _drawWeather);
    this.currentTime()
    this.getWeather()
  }

  switchTemp(){
  let temp = ProxyState.weather.temp
  if(temp == true){ 
    document.getElementById('temp').innerHTML = ProxyState.weather.c
    ProxyState.weather.temp = false
  } else {
    document.getElementById('temp').innerHTML = ProxyState.weather.f
    ProxyState.weather.temp = true
  }
  }


  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }
   currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = this.updateTime(hour);
    min = this.updateTime(min);
    sec = this.updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
    setTimeout(function(){ this.currentTime() }, 1000); /* setting timer */
  }
  updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }

}


