import { ProxyState } from "../AppState.js";

class SettingsService {
  addUser(user) {
    ProxyState.user = user;
  }
}
const SETTTINGSERVICE = new SettingsService();
export default SETTTINGSERVICE;
