const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, WEEK, CATEGORY, MARK } = require('../../constants/Constants');
const IOutputView = require('./IOutputView');

const OutputView = class extends IOutputView {
  printError(message) {
    Console.print(message);
  }

  printOpening() {
    Console.print(MESSAGE.opening);
  }

  printRecommendMenu(category) {
    const week = this.#generateArr(WEEK);
    const menu = this.#generateArr(CATEGORY);
    Console.print(this.#generateTable(week));
    Console.print(this.#generateTable(menu));
  }

  #generateTable(arr) {
    const { openBracket, closeBracket, divider } = MARK;
    return `${openBracket} ${arr.join(` ${divider} `)} ${closeBracket}`;
  }

  #generateArr(obj) {
    const title = obj.name;
    const objArr = Object.entries(obj)
      .slice(-5)
      .map(([_, value]) => value);

    objArr.unshift(title);

    return objArr;
  }

  printClosing() {
    Console.print(MESSAGE.finish);
  }

  close() {
    Console.close();
  }
};

const a = new OutputView();
a.printRecommendMenu();

module.exports = OutputView;
