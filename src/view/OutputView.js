const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('../constant/Messages');
const DAY_INDEX = {
  0: 'Mon',
  1: 'Tue',
  2: 'Wed',
  3: 'Thu',
  4: 'Fri',
};

const OutputView = {
  printRecommendationResult(categories, menus, coaches) {
    Console.print(MESSAGES.result);
    Console.print(MESSAGES.days);
    this.printCategoryResult(categories);
    coaches.forEach((coach, index) => {
      this.printMenuResultForEachCoach(coach, menus[index]);
    });
    Console.print(MESSAGES.serviceEnd);
  },

  printCategoryResult(categories) {
    let categoryResult = ['[ 카테고리 '];

    for (let dayIndex = 0; dayIndex < 5; dayIndex += 1) {
      categoryResult += `| ${categories[DAY_INDEX[dayIndex]]} `;
    }
    categoryResult += ']';

    Console.print(categoryResult);
  },

  printMenuResultForEachCoach(name, menus) {
    let menuResult = [`[ ${name} `];
    menus.forEach((menu) => {
      menuResult += `| ${menu} `;
    });
    menuResult += ']';
    Console.print(menuResult);
  },
};

module.exports = OutputView;
