export default class Quote {
  constructor(data) {
    this.author = data.author;
    this.body = data.body;
  }

  get Template() {
    return `<div class="card tran-bg text-light border border-dark m-1 p-1 contents quote-size text-center">
                    <p>${this.body}</p>
                    <div class="overlay">
                    <p class="text">-${this.author}</p>
                    </div>
                </div>`;
  }
}
