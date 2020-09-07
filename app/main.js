import TodoController from "./controllers/TodoController.js";
import WeatherController from "./controllers/WeatherController.js";
import ImageController from "./Controllers/ImageController.js";
import QuoteController from "./Controllers/QuoteController.js";
import SettingsController from "./Controllers/SettingsController.js";

class App {
  constructor() {
    this.imageController = new ImageController();
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
    this.quoteController = new QuoteController();
    this.settingsController = new SettingsController();
  }
}

window["app"] = new App();
