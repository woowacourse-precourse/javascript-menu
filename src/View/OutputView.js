const { Console } = require("@woowacourse/mission-utils");
const { categoryKey } = require("../utils/constant");

const OutputView = {
  startRecommend() {
    Console.print("점심 메뉴 추천을 시작합니다.");
  },

  printRecommendMenuResult() {
    Console.print("메뉴 추천 결과입니다.");
  },

  printDayRow() {
    Console.print("[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]");
  },

  printCategoryRow(categories) {
    const randomCategories = getCategoryString(categories);
    Console.print(`[ 카테고리 ${randomCategories}]`);
  },

  printCoachRecommendMenus(name, menus) {
    const recommendMenus = getMenuString(menus);
    Console.print(`[ ${name} ${recommendMenus}]`);
  },

  printRecommendEnd() {
    Console.print("추천을 완료했습니다.");
    Console.close();
  },
};

const getCategoryString = (categories) =>
  categories.reduce((acc, cur) => acc + `| ${categoryKey[cur]} `, "");

const getMenuString = (menus) =>
  menus.reduce((acc, cur) => acc + `| ${cur} `, "");

module.exports = { OutputView };
