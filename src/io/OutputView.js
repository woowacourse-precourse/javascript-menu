const { Console } = require('@woowacourse/mission-utils');
const { RESULT_MSG, GAME_MSG, COMMON_MSG, CATEGORY } = require('../Constants');

const { leftBracket, pipeSeperator, rightBracket, tableHead, title, complete } =
  RESULT_MSG;

const printRecommendResultTitle = () => {
  Console.print(title);
};

const printRecommendResultTableHead = () => {
  Console.print(tableHead);
};

const printRecommendResultTableRow = (infos) => {
  Console.print(leftBracket + infos.join(pipeSeperator) + rightBracket);
};

const printResultComplete = () => {
  Console.print(complete);
};

const printRecommendResultTable = (categories, coachs) => {
  printRecommendResultTableHead();
  printRecommendResultTableRow([CATEGORY.name, ...categories]);
  coachs.forEach((coach) => coach.printInfo(printRecommendResultTableRow));
  printResultComplete();
};

const OutputView = {
  printStartMessage() {
    Console.print(GAME_MSG.start + COMMON_MSG.newLine);
  },

  printRecommendResult(categories, coachs) {
    printRecommendResultTitle();
    printRecommendResultTable(categories, coachs);
  },
};

module.exports = OutputView;
