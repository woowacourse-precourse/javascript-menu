const GameModel = require('./GameModel');
const { GAME_MESSAGE } = require('../constants');

class MenuModel extends GameModel {
  #coachesList = [];

  setCoachesName(coachesList) {
    this.#coachesList = coachesList;
  }
}

module.exports = MenuModel;
