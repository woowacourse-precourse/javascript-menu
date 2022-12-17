const Presenter = require('./presenter/Presenter');

class App {
  #presenter = new Presenter();

  play() {
    this.#presenter.run();
  }
}

module.exports = App;

const app = new App();
app.play();
