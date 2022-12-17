const CategoryMaker = require('./CategoryMaker');
const MenuMaker = require('./MenuMaker');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { validateCoachName, validateDislikeMenu } = require('./utils/validate');
const { convertCategory, combineCoachMenu } = require('./utils/menuUtil');

class App {
  constructor() {
    this.coach = null;
    this.category = null;
    this.dislikeMenu = {};
    this.recommendMenu = [];
  }

  play() {
    OutputView.printStart();
    InputView.readCoachName(this.getCoachNameInput.bind(this));
  }

  getCoachNameInput(name) {
    this.coach = name.split(',');
    validateCoachName(this.coach);
    this.category = CategoryMaker.createCategory();
    InputView.readDislikeMenu(this.coach[0], 0, this.getDislikeMenuInput.bind(this));
  }

  getDislikeMenuInput(menu, idx) {
    const dislikeMenu = menu.split(',');
    validateDislikeMenu(dislikeMenu);
    this.getMenuRecommendation(dislikeMenu);

    idx++;
    if (idx === this.coach.length) {
      const convertedCategory = convertCategory(this.category);
      const combinedCoachMenu = combineCoachMenu(this.coach, this.recommendMenu);
      OutputView.printResult(convertedCategory, combinedCoachMenu);
      return;
    }
    InputView.readDislikeMenu(this.coach[idx], idx, this.getDislikeMenuInput.bind(this));
  }

  getMenuRecommendation(dislikeMenu) {
    const menuMaker = new MenuMaker(this.category, dislikeMenu);
    const weekMenu = menuMaker.createMenu();
    this.recommendMenu.push(weekMenu);
  }
}

const app = new App();
app.play();

module.exports = App;
