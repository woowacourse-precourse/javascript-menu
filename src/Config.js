const MenuConfig = {
  CATEGORIES: 5,
  일식: 1,
  한식: 2,
  중식: 3,
  아시안: 4,
  양식: 5,

  1: '일식',
  2: '한식',
  3: '중식',
  4: '아시안',
  5: '양식',

  DUPLICATE_CATECORY_LIMIT: 2,
};

const ValidConfig = {
  SEPARATOR: ',',

  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 4,

  MIN_COACH_NUMBER: 2,
  MAX_COACH_NUMBER: 5,

  MIN_CANNOTEAT_LENGTH: 0,
  MAX_CANNOTEAT_LENGTH: 2,
};

const Message = {
  START: '점심 메뉴 추천을 시작합니다.',
  RESULT: '메뉴 추천 결과입니다.',
  FINISHED: '추천을 완료했습니다.',

  ENTER_NAME: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  enter_cannotEat(name) {
    return `${name}(이)가 못 먹는 메뉴를 입력해 주세요.`;
  },

  RESULT_DAY: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
  result_category(categories) {
    return `[ 카테고리 | ${categories.join(' | ')} ]`;
  },
  result_coach(name, menu) {
    return `[ ${name} | ${menu.join(' | ')} ]`;
  },

  ERROR: '[ERROR]',
};

module.exports = { MenuConfig, ValidConfig, Message };
