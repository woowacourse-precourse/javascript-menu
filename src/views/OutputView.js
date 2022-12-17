const { Console } = require('@woowacourse/mission-utils');
const { DAYS } = require('../constants');

const MESSAGE = {
  START_RECOMMEND: '점심 메뉴 추천을 시작합니다.',
  // result: (categoriesOfDays, coachesName, menus) => `\n메뉴 추천 결과입니다.
  // [ 구분 | ${DAYS.join(' | ')} ]
  // [ 카테고리 | ${categoriesOfDays.join(' | ')} ]`,
};

const ERROR_FORM = '[ERROR] ';

const OutputView = {
  printErrorMessage(message) {
    Console.print(`${ERROR_FORM}${message}`);
  },

  printStartRecommend() {
    Console.print(MESSAGE.START_RECOMMEND);
  },

  printRecommendResult(categoriesOfDays, coachesName, menus) {
    Console.print(`\n메뉴 추천 결과입니다.
[ 구분 | ${DAYS.join(' | ')} ]
[ 카테고리 | ${categoriesOfDays.join(' | ')} ]`);

    coachesName.map((name, index) => {
      Console.print(`[ ${name} | ${menus[index].join(' | ')} ]`);
    });

    Console.print('\n추천을 완료했습니다.');
  },
};

module.exports = OutputView;
