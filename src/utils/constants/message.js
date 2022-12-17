const { deepFreeze } = require('../common');

const MESSAGE = deepFreeze({
  INPUT: {
    REQUEST_COACH_NAMES: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
    REQUEST_UNLIKE_MENUS(coachName) {
      return `\n${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n`;
    },
  },
  OUTPUT: {
    PROGRAM_START: `점심 메뉴 추천을 시작합니다.`,
    RECOMMENDATION_RESULT: `메뉴 추천 결과입니다.`,
    RECOMMENDATION_COMPLETE: `추천을 완료했습니다.`,
    RECOMMENDATION_TABLE: {
      DAYS: `[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]`,
      CATEGORIES(categories) {
        return `[ 카테고리 | ${categories[0]} | ${categories[1]} | ${categories[2]} | ${categories[3]} | ${categories[4]} ]`;
      },
      MENUS(coach, menus) {
        return `[ ${coach} | ${menus[0]} | ${menus[1]} | ${menus[2]} | ${menus[3]} | ${menus[4]} ]`;
      },
    },
  },
  ERROR: {
    COACHINPUT: {
      NAME_LENGTH_IS_BETWEEN_TWO_AND_FOUR: '[ERROR] 코치의 이름은 최소 2글자, 최대 4글자이어야 합니다.',
      NUMBER_IS_BETWEEN_TWO_AND_FIVE: '[ERROR] 코치의 인원이 최소 2명, 최대 5명 사이여야 합니다.',
      DUPLICATED: '[ERROR] 중복되지 않은 코치의 이름을 입력해주세요.',
    },
    MENUINPUT: {
      LENGTH_IS_BETWEEN_ZERO_AND_TWO: '[ERROR] 못 먹는 메뉴의 개수는 최소 0개, 최대 2개 사이여야 합니다.',
      DUPLICATED: '[ERROR] 중복되지 않은 메뉴를 입력해주세요.',
    },
  },
});

module.exports = MESSAGE;
