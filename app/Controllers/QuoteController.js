//TODO Create methods for constructor, and rendering the quote to the page

import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";

//NOTE add an on hover to show the authors name
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
