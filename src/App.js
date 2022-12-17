const MenuSelectorController = require('./controller/MenuSelectorController');

class App {
  play() {
    new MenuSelectorController().start();
  }
}

const app = new App();
app.play();

module.exports = App;
