class NotEatValidator {
  constructor(foods) {
    this.validate(foods);
  }

  validate(foods) {
    const notEatFood = foods.split(',').map((food) => food.trim());
    if (this.isFoodsRange(notEatFood)) throw new Error('[ERROR] 최소 0개, 최대 2개의 메뉴를 입력하세요.');
    notEatFood.forEach((food) => {
      if (!this.isString(food)) throw new Error('[ERROR] 한글로 입력해야 합니다.');
    });
    return notEatFood;
  }

  isFoodsRange(foods) {
    return foods.length < 0 || foods.length > 2;
  }

  isString(foods) {
    const typeTest = /^[가-힣]+$/;
    return typeTest.test(foods);
  }
}
module.exports = NotEatValidator;
