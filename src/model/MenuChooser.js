const { Random } = require('@woowacourse/mission-utils');
const { CATEGORY, MENUS } = require('../constant/Constant');

class MenuChooser {
  #chosenMenus;
  #shuffler = [];

  choose(categories, banMenus) {
    this.#setShuffler();
    this.#chosenMenus = [];
    console.log('basecamp', { cat: categories, ban: banMenus });

    for (let index = 0; index < CATEGORY.MAX_LIMIT; index += 1) {
      this.#chooseOnce(categories[index], banMenus);
    }

    return this.#chosenMenus;
  }

  #setShuffler() {
    for (let index = 0; index < MENUS.SIZE; index += 1) {
      this.#shuffler.push(index);
    }
  }

  #chooseOnce(category, banMenus) {
    let pickedMenu;

    while (true) {
      pickedMenu = this.#getRandomMenuOnce(category);
      console.log('픽:', pickedMenu);
      if (!this.#chosenMenus.includes(pickedMenu) && !banMenus.includes(pickedMenu)) {
        break;
      }
    }
    this.#chosenMenus.push(pickedMenu);
    console.log('선택: ', pickedMenu);
  }

  #getRandomMenuOnce(category) {
    const chosenNumber = Random.shuffle(this.#shuffler)[0] - 1;
    console.log('셔플 결과: ', chosenNumber);
    return MENUS[category][chosenNumber];
  }
}

module.exports = MenuChooser;
