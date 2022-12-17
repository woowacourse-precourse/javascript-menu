const InputView = require("../View/InputView");
const OutputView = require("../View/Outputview");
const { Console } = require("@woowacourse/mission-utils");
const Menu = require("../Model/Menu");
const { generate } = require("../util/RandomGenerator");

class Controller {
  constructor() {
    this.coachesName = {};
    this.coachHateMenu = {};
    this.startCount = 0;
    this.count = this.coachesName.length - 1;
    this.menu = new Menu();
    this.days = ["월요일", "화요일", "수요일", "목요일", "금요일"];
    this.recommendMenu = [];
  }
  showgameStartGuide() {
    OutputView.printGameStartMessage();
    this.askCoachesName();
  }
  askCoachesName() {
    InputView.readCoachesName(this.saveCoachesName.bind(this));
  }
  saveCoachesName(coachesName) {
    this.coachesName = Object.values(coachesName); // [ 'a', 'b', 'c' ]
    this.askCoachesHateMenu();
  }

  askCoachesHateMenu() {
    if (this.coachesName[this.startCount]) {
      InputView.readCoachHateMenu(
        this.coachesName[this.startCount],
        this.saveCoachHateMenu.bind(this)
      );
    } else this.ShowResultMessage();
  }
  saveCoachHateMenu(coachHateMenu) {
    this.coachHateMenu[this.coachesName[this.startCount]] = coachHateMenu;
    this.startCount++;
    this.askCoachesHateMenu();
  }
  ShowResultMessage() {
    OutputView.printResultStartMessage();
    this.showResultCategory();
  }
  userCategory() {
    this.categoryOfday = this.days.reduce((acc, curr) => {
      return { ...acc, [curr]: this.menu.getCategory(generate) };
    }, {});
      return Object.values(this.categoryOfday).join(" | ");
  }

  showResultCategory() {
    OutputView.printResult(this.userCategory());
    this.showResultMenu();
  }

  showResultMenu() {
    Object.values(this.categoryOfday).forEach((catagory) =>{
      this.recommendMenu.push(this.menu.getUserMenuCategory(catagory))
    });
    Console.print(this.recommendMenu);
  }
}

module.exports = Controller;
