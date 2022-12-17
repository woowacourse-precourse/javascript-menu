const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class MenuController {
  startRecommend() {
    OutputView.printStartRecommend();

    this.#inputCoachesName();
  }

  #inputCoachesName() {
    InputView.askCoachesName(this.#validateCoachesName.bind(this));
  }

  #validateCoachesName(names) {}
}

module.exports = MenuController;
