const MenuRecommendController = require('./controller/MenuRecommendController');

class App {
  #menuRecommendController = new MenuRecommendController();
  play() {
    this.#menuRecommendController.run();
  }
}

module.exports = App;
