const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../utils/constants/message');

const print = (text) => {
  Console.print(text);
};

const printBlank = () => {
  Console.print('');
};

const closeConsole = () => {
  Console.close();
};

const printCategories = (categories) => {
  print(MESSAGE.OUTPUT.RECOMMENDATION_TABLE.CATEGORIES(categories));
};

const printRecommendations = (recommendationResult) => {
  for (const [coach, menus] of Object.entries(recommendationResult)) {
    print(MESSAGE.OUTPUT.RECOMMENDATION_TABLE.MENUS(coach, menus));
  }
};

const OutputView = {
  print(text) {
    print(text);
  },

  printStartMenuRecommadationMessage() {
    print(MESSAGE.OUTPUT.PROGRAM_START);
    printBlank();
  },

  printMenuRecommendationResult(categories, recommendationResult) {
    printBlank();
    print(MESSAGE.OUTPUT.RECOMMENDATION_RESULT);
    printBlank();
    print(MESSAGE.OUTPUT.RECOMMENDATION_TABLE.DAYS);
    printCategories(categories);
    printRecommendations(recommendationResult);
    printBlank();
    print(MESSAGE.OUTPUT.RECOMMENDATION_COMPLETE);
    closeConsole();
  },
};

module.exports = OutputView;
