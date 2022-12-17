const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');
const { Console } = require('@woowacourse/mission-utils');
const CotchNameValidator = require('./validator/CotchNameValidator');
class Menu {
  constructor() {}
  startRecommend() {
    OutputView.printStartRecommend();
    this.inputCotchName();
  }
  inputCotchName() {
    InputView.readCotchName(this.validateCotchName.bind(this));
  }
  validateCotchName(names) {
    try {
      new CotchNameValidator(names);
    } catch (error) {
      Console.print(error);
      this.inputCotchName();
    }
  }
  play() {
    this.startRecommend();
  }
}

module.exports = Menu;
