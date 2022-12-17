const GameModel = require('./GameModel');
const { GAME_MESSAGE } = require('../constants');

class MenuModel extends GameModel {
  #coachesList = [];
  #menusCoachesCantEat = [];

  getCoachesName() {
    return this.#coachesList;
  }

  setCoachesName(coachesList) {
    this.#coachesList = coachesList;
  }

  getMenusCoachesCantEat() {
    return this.#menusCoachesCantEat;
  }

  setMenusCoachesCantEat(menusCoachCantEat) {
    this.#menusCoachesCantEat.push(menusCoachCantEat);
  }
}

module.exports = MenuModel;
