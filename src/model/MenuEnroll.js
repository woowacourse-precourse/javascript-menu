const SAMPLE = require('../constant/Menu');

class MenuEnroll {
  constructor(pickFood) {
    this.pickFood = pickFood;
    this.pickType = [];
    this.validateResult();
  }

  getNotWantMenu() {
    return this.pickType;
  }

  canEatAll() {
    console.log(!this.pickFood[0], !this.pickFood[0] ? true : false, !this.pickFood[0]);
    return !this.pickFood[0] ? true : false;
  }

  validateResult() {
    if (this.canEatAll()) {
      return true;
    }
    this.checkMenu();
    return this.pickType.length !== this.pickFood.length && this.makeError();
  }

  makeError() {
    throw new Error('[ERROR] 메뉴에 없는 음식입니다.');
  }

  checkMenu() {
    const food = Object.keys(SAMPLE).map((type) => SAMPLE[type].split(', '));
    this.pickFood.map((pick) => {
      food.map((typeFood, foodIndex) => {
        if (typeFood.includes(pick)) {
          const idx = food[foodIndex].indexOf(pick);
          this.pickType.push([foodIndex, idx]);
        }
      });
    });
  }
}

module.exports = MenuEnroll;
