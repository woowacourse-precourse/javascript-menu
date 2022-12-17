const RecommendController = require('./RecommendController.js');

class App {
  play() {
    new RecommendController().play();
  }
}

new App().play();

module.exports = App;
