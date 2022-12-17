const { Random } = require('@woowacourse/mission-utils');

class Category {
  #categoreis;

  #category;

  #noMenus;

  constructor() {
    this.#categoreis = new Map();
    this.#category = [];
    this.#noMenus = [];
    this.setCategory();
  }

  setCategory() {
    this.#categoreis.set(1, '일식');
    this.#categoreis.set(2, '한식');
    this.#categoreis.set(3, '중식');
    this.#categoreis.set(4, '아시안');
    this.#categoreis.set(5, '양식');
  }

  // 예시 코드. 사용하는 자료 구조에 따라 난수를 적절하게 가공해도 된다.
  recommend() {
    while (this.#category.length < 5) {
      const category = this.#categoreis.get(Random.pickNumberInRange(1, 5));
      this.checkDuplicate(category, this.#category);
    }
    return this.#category;
  }

  checkDuplicate(category, array) {
    const same = array.filter(element => element === category);
    if (same.length <= 2) {
      array.push(category);
    }
  }
}

module.exports = Category;
