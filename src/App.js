const RecommendMenuSystem = require('./controller/RecommendMenuSystem');
const Coach = require('./domain/Coach');
const RecommendMenu = require('./domain/RecommendMenu');

class App {
  constructor() {
    this.recommendMenuModel = new RecommendMenu();
    this.coach = new Coach();
    this.recommendMenuController = new RecommendMenuSystem(this.RecommendMenuModel, this.coach);
  }

  play() {
    this.recommendMenuController.start();
  }
}

const app = new App();
app.play();

module.exports = App;
