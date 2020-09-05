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
    return `<div class="card weather-card m-2 border border-dark tran-bg">
    <p>${this.city}</p>
    <a onclick="app.weatherController.switchTemp()"><img src="http://openweathermap.org/img/wn/${this.icon}.png"><span id="temp">${this.f}</span></a>
</div>`;
  }

  switchingTemp(str) {}
}
