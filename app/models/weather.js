export default class Weather {
  constructor(data) {
    this.city = data.name;
    this.kelvin = data.main.temp;
    this.icon = data.weather[0].icon;
    this.f = Math.floor(this.kelvin * (9 / 5) - 459.67) + "&deg;F";
    this.c = Math.floor(this.kelvin - 273) + "&deg;C";
    this.temp = true;
  }

  get Template() {
    return `<div class="text-light text-shadow m-2 p-2 ">
    <p onclick="app.weatherController.switchTemp()">${this.city}<br><img src="http://openweathermap.org/img/wn/${this.icon}.png"><span class="pointer" id="temp">${this.f}</span></p>`;
  }

  switchingTemp(str) {}
}
