const MESSAGE = Object.freeze({
  START: '점심 메뉴 추천을 시작합니다.\n',
  COACH_NAME: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  AVOID_MENU: '(이)가 못 먹는 메뉴를 입력해 주세요.\n',
  RESULT: '메뉴 추천 결과입니다.\n',
  FINISH: '추천을 완료했습니다.',
});

const DAYS = Object.freeze(['월요일', '화요일', '수요일', '목요일', '금요일']);

module.exports = {
  MESSAGE,
  DAYS,
};
