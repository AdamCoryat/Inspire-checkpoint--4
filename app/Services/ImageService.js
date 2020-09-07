import { api } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";

class ImageService {
  async getBgImage() {
    let res = await api.get("images");
    ProxyState.image = res.data.large_url;
  }
}

const imageService = new ImageService();
export default imageService;
