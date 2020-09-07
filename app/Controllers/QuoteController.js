import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";

function _drawQuote() {
  let quote = ProxyState.quote.Template;
  document.getElementById("quote").innerHTML = quote;
}

export default class QuoteController {
  constructor() {
    ProxyState.on("quote", _drawQuote);
    this.getQuote();
  }

  getQuote() {
    try {
      quoteService.getQuote();
    } catch (error) {
      console.error(error);
    }
  }
}
