const reduceFuncInCategory = (counter, number) => {
  counter[number] = (counter[number] ?? 0) + 1;
  return counter;
};

const Checker = {
  /**
   * 새 카테고리 번호가 2번 이상 선택 되었는지 확인한다.
   * @param {number[]} history 카테고리 이력
   * @param {number} category 새 카테고리 번호
   * @returns {boolean}
   */
  checkCategoryTwice(history, category) {
    return history.reduce(reduceFuncInCategory, {})[category] >= 2;
  },

  checkDuplicateFood() {},
};

module.exports = Checker;
