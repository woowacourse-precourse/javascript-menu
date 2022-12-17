const { Random } = require("@woowacourse/mission-utils");
const { MENU_OBJ } = require("../Constant");

class Menu {
  constructor() {
    this.userCategory = {};
    this.categoryName = Object.keys(MENU_OBJ);
  }

  getCategory(generate) {
    if (generate() === 1) return this.categoryName[0];
    if (generate() === 2) return this.categoryName[1];
    if (generate() === 3) return this.categoryName[2];
    if (generate() === 4) return this.categoryName[3];
    if (generate() === 5) return this.categoryName[4];
  }

  getUserMenuCategory(category) {
    const menuStr = MENU_OBJ[category].split(",") ;
    return Random.shuffle(menuStr)[0];
  }
}

module.exports = Menu;
