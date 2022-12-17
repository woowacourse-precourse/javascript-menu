const { SAMPLE } = require('../constants/Constant');
const MenuGame = require('../model/MenuGame');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class menuGameController {
  #menuGame;

  constructor() {
    this.#menuGame = new MenuGame(SAMPLE);
  }

  start() {
    OutputView.printOpening();
    InputView.readCoachNames(names => {
      this.#menuGame.setCoaches(names);
    });
  }
}

module.exports = menuGameController;
