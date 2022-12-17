const MESSAGE = Object.freeze({
  GAME_START: '점심 메뉴 추천을 시작합니다.',
  DAYS: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
  RESULT: '메뉴 추천 결과입니다.',
  CATREGORIES: (data) =>
    `[ 카테고리 | ${CATEGORY[data[0]]} | ${CATEGORY[data[1]]} | ${CATEGORY[data[2]]} | ${
      CATEGORY[data[3]]
    } | ${CATEGORY[data[4]]} ]`,

  GAME_END: '추천을 완료했습니다.',
});

const CATEGORY = Object.freeze(['일식', '한식', '중식', '아시안', '양식']);

const ERROR = Object.freeze({
  COACHCOUNT: '[ERROR] 코치는 최소 2명 이상 최대 5명 이하로 입력해야 합니다.',
  COACHNAME: '[ERROR] 코치의 이름은 최소 2글자 최대 4글자 입니다.',
  NO_MENU: '[ERROR] 존재하지 않는 메뉴입니다.',
  NO_MENU_LENGTH: '[ERROR] 먹지 못하는 메뉴는 2개까지만 지정 가능합니다.',
});

const INPUT = Object.freeze({
  NAMES: '코치의 이름을 입력해 주세요. (, 로 구분)',
  NO_EAT: (name) => `${name}(이)가 못 먹는 메뉴를 입력해 주세요.`,
});

module.exports = { MESSAGE, ERROR, INPUT, CATEGORY };
