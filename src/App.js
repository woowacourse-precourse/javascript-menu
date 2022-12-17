const MenuController = require('./MenuController');

class App {
  play() {
    const menuController = new MenuController();
    menuController.start();
  }
}



module.exports = App;
