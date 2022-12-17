const { SAMPLE } = require('../constants/Constant');
const MenuGame = require('../model/MenuGame');
const OutputView = require('../view/OutputView');

class menuGameController {
  #menuGame;

  constructor() {
    this.#menuGame = new MenuGame(SAMPLE);
  }

  start() {
    OutputView.printOpening();
  }
}

module.exports = menuGameController;
