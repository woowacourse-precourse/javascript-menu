const Menu = require('./Menu');
const Coach = require('./Coach');
const OutputView = require('./Views/OutputView');
const InputView = require('./Views/InputView');
const RandomMaker = require('./RandomMaker');
const { MESSAGE, DAYS } = require('./Constants');

class MenuController {
  constructor(sampleMenu) {
    this.setMenu(sampleMenu);
  }

  setMenu(sampleMenu) {
    this.menuCategory = ['일식', '한식', '중식', '아시안', '양식'].map((category) => new Menu(category));
    this.menuCategory.forEach((menu) => {
      menu.setList(sampleMenu[menu.name]);
    });
    // console.log('Menu list : \n', this.menuCategory);
  }

  start() {
    OutputView.printMessage(MESSAGE.START);
    InputView.readCoachName(this.setCoaches.bind(this));
  }

  setCoaches(coaches) {
    this.coachList = coaches.split(',').map((coach) => new Coach(coach));
    this.coachCount = 0;
    this.setAvoids();
  }

  setAvoids(avoidMenu) {
    if (this.coachCount !== 0) {
      this.coachList[this.coachCount - 1].setAvoidMenu(avoidMenu);
    }
    if (this.coachCount === this.coachList.length) return this.recommandMenu();
    InputView.readAvoidMenu(this.coachList[this.coachCount++].name, this.setAvoids.bind(this));
  }

  recommandMenu() {
    // console.log('Coach list : \n', this.coachList);
    DAYS.forEach(() => {
      const category = RandomMaker.category();
      this.pickMenu(this.menuCategory[category].list);
    });
  }

  pickMenu(menuList) {
    // this.coachList.forEach();
  }
}

module.exports = MenuController;
