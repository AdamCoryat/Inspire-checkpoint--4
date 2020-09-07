import Todo from "./Models/Todo.js";
import Weather from "./Models/Weather.js";
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
  time = Number;
  taskAmount = 0;
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
