const { MenuController } = require('./MenuController');
const { RecommendMachine } = require('./RecommendMachine');

class App {
  play() {
    new MenuController({ machine: new RecommendMachine() }).start();
  }
}

const app = new App();
app.play();

module.exports = App;
