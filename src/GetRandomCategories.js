const { Random } = require("@woowacourse/mission-utils");
const {
  DEFAULT: { ZERO, DAY_WEEKS, TRUE, ONE },
} = require("./utils/constant");

const randomCategory = function getRandomCategories(category) {
  for (let i = ZERO; i < DAY_WEEKS; i++) {
    const curNum = getCategories(category);
    category.push(curNum);
  }

  return category;
};

const countSameElement = (array, element) =>
  array.filter((ele) => ele === element).length;

const getCategories = (categories) => {
  while (TRUE) {
    const curCategory = Random.pickNumberInRange(ONE, DAY_WEEKS);
    const count = countSameElement(categories, curCategory);

    if (count > ONE) continue;

    return curCategory;
  }
};

module.exports = { randomCategory };
