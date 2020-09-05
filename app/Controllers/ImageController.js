//TODO Create methods for constructor, and rendering the image to the page

import imageService from "../Services/ImageService.js";
import { ProxyState } from "../AppState.js";

//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
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
