const MenuController = require('../src/controller/MenuController');
const Members = require('../src/domain/Members');
const Io = require('../src/view/Io');
const MenuRecommender = require('./domain/MenuRecommender');

class App {
  play() {
    this.Members = new Members();
    this.io = new Io();
    this.menuRecommender = new MenuRecommender();
    this.menuController = new MenuController(
      this.Members,
      this.io,
      this.menuRecommender
    );

    this.menuController.start();
  }
}

const a = new App();
a.play();
module.exports = App;
