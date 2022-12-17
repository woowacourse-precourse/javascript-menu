const { MenuController } = require('./MenuController');

class App {
  play() {
    new MenuController().start();
  }
}

const app = new App();
app.play();

module.exports = App;
