const MESSAGE = Object.freeze({
  START: '점심 메뉴 추천을 시작합니다.\n',
  COACH_NAME: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  AVOID_MENU: '(이)가 못 먹는 메뉴를 입력해 주세요.\n',
  RESULT: '\n메뉴 추천 결과입니다.',
  FINISH: '\n추천을 완료했습니다.',
});

const ERROR = Object.freeze({
  NUM_OF_COACH: '[ERROR] 코치는 최소 2명 이상 5명 이하로 입력해야 합니다.',
});

const COACH = Object.freeze({
  MIN: 2,
  MAX: 5,
});

const DAYS = Object.freeze(['월요일', '화요일', '수요일', '목요일', '금요일']);

const CATEGORY = Object.freeze(['일식', '한식', '중식', '아시안', '양식']);

module.exports = {
  MESSAGE,
  ERROR,
  COACH,
  DAYS,
  CATEGORY,
};
