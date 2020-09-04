import TodoController from "./controllers/TodoController.js";
import WeatherController from "./controllers/WeatherController.js";
import ImageController from "./Controllers/ImageController.js";


//TODO Dont forget to register all your controllers	
class App {
  constructor() {
    this.imageController = new ImageController
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
  }
}


window["app"] = new App();