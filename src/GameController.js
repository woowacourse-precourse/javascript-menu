const GameService = require('./GameService');

const { ERROR_MESSAGE } = require('./utils/constants');

let instance = null;

class GameController {
  #service;

  constructor() {
    if (instance) {
      throw new Error(ERROR_MESSAGE.singleton);
    }

    instance = this;
    this.#service = new GameService();
  }
}

module.exports = Object.freeze(new GameController());
