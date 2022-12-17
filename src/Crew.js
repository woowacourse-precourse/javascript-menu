const Utils = require('./Utils');
const { CATEGORY, SAMPLE } = require('./Sample');
const MissionUtils = require('@woowacourse/mission-utils');

class Crew {
  name;
  menu = {
    category: [],
    dayMenu: [],
  };
  canNotEat = [];

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setCanNotEat(list) {
    const notEatList = Utils.stringConvertor(list);
    this.canNotEat = notEatList;
  }

  getMenu() {
    return this.menu;
  }

  setMenu(category) {
    const sameCategory = this.menu.category.filter(menu => menu === category);
    if (sameCategory.length === 2) {
      category = CATEGORY[MissionUtils.Random.pickNumberInRange(1, 5)];
      return this.setMenu(category);
    } else this.menu.category.push(category);
  }

  setDetailMenu() {
    const categorys = this.menu.category;
    categorys.forEach(category => {
      let menus = SAMPLE[category].replace(/ /g, '').split(',');
      let numberMenu = this.getMenuIndex(menus);
      let selectedNumber = MissionUtils.Random.shuffle(numberMenu)[0];
      let recomendedMenu = menus[selectedNumber];
      while (this.canNotEat.includes(recomendedMenu)) {
        selectedNumber = MissionUtils.Random.shuffle(numberMenu)[0];
        recomendedMenu = menus[selectedNumber];
      }
      this.menu.dayMenu.push(recomendedMenu);
    });
  }

  getMenuIndex(menus) {
    const temp = [];
    menus.forEach((menu, idx) => temp.push(+idx));
    return temp;
  }
}

module.exports = Crew;
