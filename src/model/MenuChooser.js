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

  #chooseOnce(category, banMenus) {
    let pickedMenu;

    while (true) {
      pickedMenu = this.#getRandomMenuOnce(category);
      if (!this.#chosenMenus.includes(pickedMenu) && !banMenus.includes(pickedMenu)) {
        break;
      }
    }
    this.#chosenMenus.push(pickedMenu);
  }

  #getRandomMenuOnce(category) {
    return MENUS[category][Random.shuffle(this.#shuffler)[0]];
  }
}

module.exports = MenuChooser;
