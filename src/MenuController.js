const Menu = require('./Menu');
const OutputView = require('./Views/OutputView');
const InputView = require('./Views/InputView');
const { MESSAGE } = require('./Constants');

class MenuController {
  constructor(sampleMenu) {
    this.menu = ['일식', '한식', '중식', '아시안', '양식'].map((category) => new Menu(category));
    console.log(this.menu);
  }

  start() {
    OutputView.printMessage(MESSAGE.START);
  }
}

module.exports = MenuController;
