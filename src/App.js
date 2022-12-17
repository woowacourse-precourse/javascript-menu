const MenuController = require('./MenuController');

class App {
  play() {
    const menuController = new MenuController();
    menuController.start();
  }
}

const app = new App();
app.play();

module.exports = App;
