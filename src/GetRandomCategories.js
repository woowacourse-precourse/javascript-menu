const { Random } = require("@woowacourse/mission-utils");

const randomCategory = function getRandomCategories(category) {
  for (let i = 0; i < 5; i++) {
    const curNum = getCategories(category);
    category.push(curNum);
  }

  return category;
};

const countSameElement = (array, element) =>
  array.filter((ele) => ele === element).length;

const getCategories = (categories) => {
  while (true) {
    const curCategory = Random.pickNumberInRange(1, 5);
    const count = countSameElement(categories, curCategory);

    if (count > 1) continue;

    return curCategory;
  }
};

module.exports = { randomCategory };
