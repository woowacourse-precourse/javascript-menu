const { Console } = require("@woowacourse/mission-utils");
const { GuideString } = require("../static/Static");

const OutputView = {
  printStart() {
    Console.print(GuideString.START_MENU_RECOMMEND);
  },

  printResult() {
    Console.print(GuideString.RESULT);
    Console.print(GuideString.DAYS);
  },

  printCategory(category) {
    category.unshift("카테고리");
    Console.print(`[ ${category.join(" | ")} ]`);
  },

  printMenu(name, menu) {
    menu.unshift(name);
    Console.print(`[ ${menu.join(" | ")} ]`);
  },

  printEnd() {
    Console.print(GuideString.END);
    Console.close();
  },
};

module.exports = OutputView;
