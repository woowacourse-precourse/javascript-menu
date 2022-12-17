const { Random } = require('@woowacourse/mission-utils');
const { CATEGORY, MENUS } = require('../constant/Constant');

class MenuChooser {
  #chosenMenus;
  #shuffler = [];

  #setShuffler() {
    for (let index = 0; index < MENUS.SIZE; index += 1) {
      this.#shuffler.push(index);
    }
  }
}

module.exports = MenuChooser;
