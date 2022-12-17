const { Console } = require('@woowacourse/mission-utils');
const { RESULT_MSG, GAME_MSG, COMMON_MSG } = require('../Constants');

const { leftBracket, pipeSeperator, rightBracket, tableHead, title, complete } =
  RESULT_MSG;

const print = Console.print;

const printRecommendResultTitle = () => {
  print(title);
};

const printRecommendResultTableHead = () => {
  print(tableHead);
};

const printRecommendResultTableRow = (infos) => {
  print(leftBracket + infos.join(pipeSeperator) + rightBracket);
};

const printResultComplete = () => {
  print(complete);
};

const printRecommendResultTable = (categories, coachs) => {
  printRecommendResultTableHead();
  printRecommendResultTableRow(categories);
  coachs.forEach((coach) => coach.printInfo(printRecommendResultTableRow));
  printResultComplete();
};

const OutputView = {
  printStartMessage() {
    print(GAME_MSG.start + COMMON_MSG.newLine);
  },

  printRecommendResult(categories, coachs) {
    printRecommendResultTitle();
    printRecommendResultTable(categories, coachs);
  },
};

module.exports = OutputView;
