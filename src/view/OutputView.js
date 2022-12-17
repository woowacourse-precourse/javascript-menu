const { Console } = require('@woowacourse/mission-utils');
const { DAYS } = require('../settings');

const OutputView = {
  MESSAGE: {
    start: '점심 메뉴 추천을 시작합니다.',
    result: '\n메뉴 추천 결과입니다.\n',
    end: '\n추천을 완료했습니다.',
    classification: '구분',
    categoryTitle: '카테고리',

    connection: {
      start: '[ ',
      middle: ' | ',
      end: ' ]\n',
    },
  },

  printStart() {
    Console.print(OutputView.MESSAGE.start);
  },

  printResult(categories, recommendedResult) {
    const { result, end } = OutputView.MESSAGE;
    const dayResult = OutputView.getDays();
    const categoryResult = OutputView.getCategories(categories);
    const menuResult = OutputView.getMenus(recommendedResult);

    Console.print(`${result}${dayResult}${categoryResult}${menuResult}${end}`);
  },

  getDays() {
    const {
      classification,
      connection: { start, middle, end },
    } = OutputView.MESSAGE;

    return `${start}${classification}${middle}${DAYS.join(middle)}${end}`;
  },

  getCategories(categories) {
    const {
      categoryTitle,
      connection: { start, middle, end },
    } = OutputView.MESSAGE;

    return `${start}${categoryTitle}${middle}${categories.join(middle)}${end}`;
  },

  getMenus(recommendedResult) {
    const {
      connection: { start, middle, end },
    } = OutputView.MESSAGE;

    return recommendedResult
      .map(
        ({ name, recommendedMenu }) =>
          `${start}${name}${middle}${recommendedMenu.join(middle)}${end}`,
      )
      .join('');
  },
};

module.exports = OutputView;
