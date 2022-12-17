const { Console } = require('@woowacourse/mission-utils');
const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const NameCheck = require('../Models/NameCheck');

class MenuController {
  constructor() {
    this.NameCheck = new NameCheck();
  };

  inputSize() {
    InputView.inputNames(name => {
      this.NameCheck.validate(name);
    });
  };

  
};

module.exports = MenuController;