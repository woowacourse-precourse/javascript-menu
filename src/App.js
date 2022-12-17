const MenuController = require('./controller/MenuController');

class App {
  #menuCtrl;

  constructor() {
    this.#menuCtrl = new MenuController();
  }

  play() {
    this.#menuCtrl.startRecommend();
  }
}

const app = new App();
app.play();

module.exports = App;
