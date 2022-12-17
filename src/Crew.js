const Utils = require('./Utils');
const { CATEGORY, SAMPLE } = require('./Sample');
const Constant = require('./Constant');
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
  getCategory() {
    return this.menu.category.join(' | ');
  }

  getName() {
    return this.name;
  }

  setCanNotEat(list) {
    const notEatList = Utils.stringConvertor(list);
    this.canNotEat = notEatList;
  }

  setMenu(category) {
    const menu = category;
    const random = MissionUtils.Random;
    const sameCategory = this.menu.category.filter(menu => menu === category);

    if (sameCategory.length === Constant.NOT_EAT_MAX) {
      menu = CATEGORY[random.pickNumberInRange(Constant.ONE, Constant.FIVE)];
      return this.setMenu(menu);
    } else this.menu.category.push(menu);
  }

  setDetailMenu() {
    const categorys = this.menu.category;
    categorys.forEach(category => {
      let menus = SAMPLE[category].split(', ');
      const numberMenu = this.getMenuIndex(menus);
      let selectedNumber = MissionUtils.Random.shuffle(numberMenu)[0] - 1;
      let recomendedMenu = menus[selectedNumber];
      while (this.canNotEat.includes(recomendedMenu)) {
        selectedNumber = MissionUtils.Random.shuffle(numberMenu)[0] - 1;
        recomendedMenu = menus[selectedNumber];
      }
      this.menu.dayMenu.push(recomendedMenu);
    });
  }

  getMenuIndex(menus) {
    const temp = [];
    menus.forEach((menu, idx) => temp.push(idx));
    return temp;
  }

  printMenu(printer) {
    const menu = this.menu.dayMenu.join(` | `);
    printer(`[ ${this.name} | ${menu} ]`);
  }
}

module.exports = Crew;
