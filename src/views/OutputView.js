const { Console } = require('@woowacourse/mission-utils');
const resultTemplateMaker = require('../utils/resultTemplateMaker.js');

const OutputView = {
  printRecommendStartMsg() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  },

  printRecommendResult(categories, coachNames, menus) {
    const templates = resultTemplateMaker.getRecommendResultTemplate(categories, coachNames, menus);

    templates.forEach((template) => Console.print(template));
  },
};

module.exports = OutputView;
