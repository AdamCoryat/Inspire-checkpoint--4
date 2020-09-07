import { ProxyState } from "../AppState.js";
import setttingsService from "../Services/SettingsService.js";

function _drawUser() {
  document.getElementById("user").innerHTML = ProxyState.user;
}

export default class SettingsController {
  constructor() {
    ProxyState.loadLocal();
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
