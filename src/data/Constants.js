const MESSAGE = Object.freeze({
  START: '점심 메뉴 추천을 시작합니다.',
  INPUT_COACH: '코치의 이름을 입력해 주세요. (, 로 구분)',
  INPUT_CANT_EAT: '(이)가 못 먹는 메뉴를 입력해 주세요.\n',
  RESULT: '메뉴 추천 결과입니다.',
  DIVISION: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
  MENU_START: '[ ',
  MENU_END: ' ]',
  MENU_DIVIDE: ' | ',
  CATEGORY: '카테고리',
  END: '추천을 완료했습니다.',
});

const ERROR = Object.freeze({
  COACH_NUMBER: '[ERROR] 코치는 최소 2명, 최대 5명 입력해야 합니다.',
  COACH_NAME: '[ERROR] 코치의 이름은 최소 2글자, 최대 4글자 이어야 합니다.',
  COACH_CANT_EAT: '[ERROR] 먹지 못하는 메뉴는 최대 2개 이어야 합니다.',
});

module.exports = { MESSAGE, ERROR };
