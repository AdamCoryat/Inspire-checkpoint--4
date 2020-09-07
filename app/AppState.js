import Todo from "./models/Todo.js";
import Weather from "./models/Weather.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";

class AppState extends EventEmitter {
  /** @type {Todo[]} */
  todos = [];
  /** @type {Weather} */
  weather = null;
  /** @type {Image} */
  image = null;
  /** @type {Quote} */
  quote = null;
  /** @type {Number} */
  time = Number;
  /** @type {Number} */
  taskAmount = 0;
  /** @type {String} */
  user = "";

  saveLocal() {
    localStorage.setItem("user", JSON.stringify(ProxyState.user));
  }

  loadLocal() {
    let data = JSON.parse(localStorage.getItem("user"));
    ProxyState.user = data;
  }
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
