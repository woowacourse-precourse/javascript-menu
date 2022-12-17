const MESSAGE = {
  START: '점심 메뉴 추천을 시작합니다.\n',
  ASK_COACH_NAME: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  ASK_COACH_IMPOSSIBLE: (name) => `\n${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
};

module.exports = { MESSAGE };
