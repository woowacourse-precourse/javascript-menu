const Menu = require('./Menu');
const Coach = require('./Coach');
const OutputView = require('./Views/OutputView');
const InputView = require('./Views/InputView');
const { MESSAGE } = require('./Constants');

class MenuController {
  constructor(sampleMenu) {
    this.menu = ['일식', '한식', '중식', '아시안', '양식'].map((category) => new Menu(category));
    console.log('Menu list : \n', this.menu);
  }

  start() {
    OutputView.printMessage(MESSAGE.START);
    InputView.readCoachName(this.setCoaches.bind(this));
  }

  setCoaches(coaches) {
    this.coachList = coaches.split(',').map((coach) => new Coach(coach));
  }
}

module.exports = MenuController;
