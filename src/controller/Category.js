const { Random } = require('@woowacourse/mission-utils');

const Category = {
  setCategory() {
    const categoreis = new Map();
    categoreis.set(1, '일식');
    categoreis.set(2, '한식');
    categoreis.set(3, '중식');
    categoreis.set(4, '아시안');
    categoreis.set(5, '양식');
    return categoreis;
  },

  // 예시 코드. 사용하는 자료 구조에 따라 난수를 적절하게 가공해도 된다.
  recommend(categoreis) {
    const category = categoreis.get(Random.pickNumberInRange(1, 5));
    return category;
  },

  checkDuplicate(category, array) {
    const same = array.filter(element => element === category);
    if (same.length <= 2) {
      array.push(category);
    }
  },
};

module.exports = Category;
