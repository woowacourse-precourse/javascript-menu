const { Console } = require('@woowacourse/mission-utils');
const { MENUS, DAYS } = require('../constants');

const MESSAGE = {
  START_RECOMMEND: '점심 메뉴 추천을 시작합니다.',
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
    // console.log(categoriesOfDays);
    // console.log(coachesName);
    // console.log(menus);
    Console.print(`메뉴 추천 결과입니다.
[ 구분 | ${DAYS.join(' | ')} ]
[ 카테고리 | ${categoriesOfDays.join(' | ')} ]`);

    coachesName.map((name, index) => {
      Console.print(`[ ${name} | ${menus[index].join(' | ')} ]`);
    });

    Console.print('\n추천을 완료했습니다.');
  },
};

module.exports = OutputView;
