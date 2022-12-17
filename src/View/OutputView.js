const { Console } = require("@woowacourse/mission-utils");
const { categoryKey } = require("../utils/constant");
const { OUTPUT, DEFAULT } = require("../utils/constant");

const OutputView = {
  startRecommend() {
    Console.print(OUTPUT.START);
  },

  printRecommendMenuResult() {
    Console.print(OUTPUT.RESULT);
  },

  printDayRow() {
    Console.print(OUTPUT.DAYROW);
  },

  printCategoryRow(categories) {
    const randomCategories = getCategoryString(categories);
    Console.print(
      `${OUTPUT.OPEN_BRACKET} ${OUTPUT.CATEGORY} ${randomCategories}${OUTPUT.CLOSE_BRACKET}`,
    );
  },

  printCoachRecommendMenus(name, menus) {
    const recommendMenus = getMenuString(menus);
    Console.print(
      `${OUTPUT.OPEN_BRACKET} ${name} ${recommendMenus}${OUTPUT.CLOSE_BRACKET}`,
    );
  },

  printRecommendEnd() {
    Console.print(OUTPUT.END);
    Console.close();
  },
};

const getCategoryString = (categories) =>
  categories.reduce(
    (acc, cur) => acc + `${OUTPUT.BAR} ${categoryKey[cur]} `,
    DEFAULT.EMPTYS_STRING,
  );

const getMenuString = (menus) =>
  menus.reduce(
    (acc, cur) => acc + `${OUTPUT.BAR} ${cur} `,
    DEFAULT.EMPTYS_STRING,
  );

module.exports = { OutputView };
