const { Console } = require('@woowacourse/mission-utils');
const { WEEK } = require('../constants/Constant');

const OutputView = Object.freeze({
  printOpening() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },

  printResult(coaches, categoryPlan) {
    let result = '메뉴 추천 결과입니다.\n';
    result += `[ ${['구분'].concat(WEEK).join(' | ')} ]\n`;
    result += `[ ${['카테고리'].concat(categoryPlan).join(' | ')} ]\n`;

    Object.keys(coaches).forEach(name => {
      result += `[ ${[name].concat(coaches[name].weeklyMenu).join(' | ')} ]\n`;
    });

    result += '\n추천을 완료했습니다.';
    Console.print(result);
  },
});

module.exports = OutputView;
