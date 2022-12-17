const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE, GAME_STRING } = require('../Constant');
const WrapperString = require('../utils/StringWrapper');

const OutputView = {
  printStart() {
    Console.print(GAME_MESSAGE.start);
  },
  printResult(days, result) {
    Console.print(`${GAME_MESSAGE.result}\n`);
    const coachesName = Object.keys(result);
    OutputView.printDays();
    OutputView.printCategory(days);
    coachesName.forEach((coach) => {
      OutputView.printCoachMenu(coach, result[coach]);
    });
    OutputView.printFinish();
  },
  printDays() {
    Console.print(GAME_STRING.resultWrapper(GAME_MESSAGE.days));
  },
  printCategory(category) {
    Console.print(WrapperString([GAME_MESSAGE.category, ...category]));
  },
  printCoachMenu(name, menu) {
    Console.print(WrapperString([name, ...menu]));
  },
  printFinish() {
    Console.print(GAME_MESSAGE.finish);
  },
};

module.exports = OutputView;
