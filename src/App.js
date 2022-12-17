const MainController = require("./controller/MainController");

class App {
  play() {
    new MainController().initializeRecommendation();
  }
}

module.exports = App;
