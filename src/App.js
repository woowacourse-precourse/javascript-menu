const MenuController = require('./controllers/MenuController');

class App {
  #menuController = new MenuController();

  play() {
    this.#menuController.startService();
  }
}

const app = new App();
app.play();

module.exports = App;
