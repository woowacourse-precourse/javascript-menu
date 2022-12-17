const MenuRecommenderController = require('./controller/MenuRecommenderController');

class App {
  play() {
    new MenuRecommenderController();
  }
}

module.exports = App;
