import { ProxyState } from "../AppState.js";
import setttingsService from "../Services/SettingsService.js";

window.onload = function startClocks() {
  var h, m, s;
  getTwelveHrs();
  getTwentyFourHrs();

  function getTwelveHrs() {
    var tag = "AM";
    checkTime();
    if (h > 12) {
      h -= 12;
      tag = "PM";
    }
    document.getElementById("twelveHrs").innerHTML =
      h + ":" + m + ":" + s + " " + tag;
    let t = setTimeout(function () {
      getTwelveHrs();
    }, 1000);
  }

  function getTwentyFourHrs() {
    checkTime();
    document.getElementById("twentyFourHrs").innerHTML = h + ":" + m + ":" + s;
    let t = setTimeout(function () {
      getTwentyFourHrs();
    }, 1000);
  }

  function checkTime() {
    var today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;
    ProxyState.time = h;
    return h, m, s;
  }
};

function _drawUser() {
  document.getElementById("user").innerHTML = ProxyState.user;
}

function _drawGreeting() {
  let elem = document.getElementById("greeting");
  let hour = ProxyState.time;
  let user = ProxyState.user;
  if (hour >= 5 && hour <= 11) {
    elem.innerHTML = `<h1 class="greeting-f-s">Good Morning, ${user}</h1>`;
  } else if (hour >= 12 && hour <= 17) {
    elem.innerHTML = `<h1 class="greeting-f-s">Good Afternoon, ${user}</h1>`;
  } else {
    elem.innerHTML = `<h1 class="greeting-f-s">Good Evening, ${user}</h1>`;
  }
}

export default class SettingsController {
  constructor() {
    ProxyState.loadLocal();
    ProxyState.on("time", _drawGreeting);
    ProxyState.on("user", ProxyState.saveLocal);
    ProxyState.on("user", _drawUser);
  }

  addUser(e) {
    e.preventDefault();
    let form = e.target;
    let user = [form.name.value];
    form.reset();
    setttingsService.addUser(user);
  }

  toggleClocks() {
    let elem24 = document.getElementById("twentyFourHrs");
    let elem12 = document.getElementById("twelveHrs");
    let res24 = elem24.classList.contains("d-none");

    if (res24 == true) {
      elem24.classList.remove("d-none");
      elem12.classList.add("d-none");
    } else if (res24 == false) {
      elem12.classList.remove("d-none");
      elem24.classList.add("d-none");
    }
  }

  toggleSettings() {
    let elem = document.getElementById("settings");
    let res = elem.classList.contains("invisible");

    if (res == true) {
      elem.classList.remove("invisible");
    } else if (res == false) {
      elem.classList.add("invisible");
    }
  }
}
