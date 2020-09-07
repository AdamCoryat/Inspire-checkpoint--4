import imageService from "../Services/ImageService.js";
import { ProxyState } from "../AppState.js";

//Private

function _drawBgImage() {
  let image = ProxyState.image;
  document.getElementById("bg-img").style.backgroundImage = `url(${image})`;
}

//Public
export default class ImageController {
  constructor() {
    ProxyState.on("image", _drawBgImage);
    this.getBgImage();
  }

  getBgImage() {
    try {
      imageService.getBgImage();
    } catch (error) {
      console.error(error);
    }
  }
}
