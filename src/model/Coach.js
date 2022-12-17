const Category = require('./Category');
const Menu = require('./Menu');

class Coach {
  /**
   * @type {Menu[]} recommended
   */
  recommended = [];
  hates = [];
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  /** 이미 추천 받은 메뉴에 추가
   * @param {Menu} menu;
  */
  eat(menu) {
    this.recommended.push(menu);
  }

  /**
   * 해당 카테고리를 먹었는지 확인
   * @param {Category} cateogy

   */

  howManyAte(categoryName) {
    return this.recommended.filter((menu) => menu.getCategory() === categoryName).length;
  }

  isHate(menuName) {
    return this.hates.some((menu) => menu.getName() === menuName);
  }
  /**
   * 싫어하는 메뉴 추가
   * @param {Menu} menu
   */
  addHate(menu) {
    this.hates.push(menu);
  }

  isAteToday(menuName) {
    const lastAteMenu = this.recommended[this.recommended.length - 1];
    lastAteMenu.getName() === menuName;
  }

  getLastAte() {
    return this.recommended[this.recommended.length - 1].getName();
  }
  abortRecommend() {
    this.recommended = this.recommended.slice(0, -1);
  }
}

module.exports = Coach;
