import { api } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";



//TODO add a button so that you can change the background image without having to hit refresh.
class ImageService {
  async getBgImage() {
    let res = await api.get('images')
    ProxyState.image = res.data.large_url
  }
}

const imageService = new ImageService();
export default imageService;