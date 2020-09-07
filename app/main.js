import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js";
import ImageController from "./Controllers/ImageController.js";
import QuoteController from "./Controllers/QuoteController.js";
import SettingsController from "./Controllers/SettingsController.js";

class App {
  imageController = new ImageController();
  weatherController = new WeatherController();
  todoController = new TodoController();
  quoteController = new QuoteController();
  settingsController = new SettingsController();
}

window["app"] = new App();
