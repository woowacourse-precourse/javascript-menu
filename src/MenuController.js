const { Console } = require('@woowacourse/mission-utils');
const Coach = require('./Coach');
const OutputView = require('./Views/OutputView');
const InputView = require('./Views/InputView');
const RandomMaker = require('./RandomMaker');
const { MESSAGE, DAYS } = require('./Constants');
const Category = require('./Category');
const { validateCoaches, validateAvoidMenu } = require('./Validate');

class MenuController {
  constructor(sampleMenu) {
    this.setMenu(sampleMenu);
    this.saveCategory = [];
  }

  setMenu(sampleMenu) {
    this.category = new Category(sampleMenu);
  }

  start() {
    OutputView.printMessage(MESSAGE.START);
    InputView.readCoachName(this.setCoaches.bind(this));
  }

  setCoaches(coaches) {
    validateCoaches(coaches);
    this.coachList = coaches.split(',').map((coach) => new Coach(coach));
    this.setCoachCount = 0;
    this.setAvoids();
  }

  setAvoids(avoidMenu) {
    if (this.setCoachCount !== 0) {
      validateAvoidMenu(avoidMenu);
      this.coachList[this.setCoachCount - 1].setAvoidMenu(avoidMenu);
    }
    if (this.setCoachCount === this.coachList.length - 1) return this.recommandMenu();
    InputView.readAvoidMenu(this.coachList[this.setCoachCount++].name, this.setAvoids.bind(this));
  }

  recommandMenu() {
    DAYS.forEach(() => {
      const menuList = this.category.getMenuList();
      const randomCategory = this.category.pickValidCategory(RandomMaker.category);
      this.saveCategory.push(menuList[randomCategory].name);
      this.pickMenu(menuList[randomCategory].list);
    });
    this.result();
  }

  pickMenu(menuList) {
    this.coachList.forEach((coach) => {
      coach.setDailyMenu(menuList, RandomMaker.menu);
    });
  }

  result() {
    OutputView.printResult(this.coachList, this.saveCategory);
    Console.close();
  }
}

module.exports = MenuController;
