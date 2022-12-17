const MESSAGE_SYSTEM = Object.freeze({
  START: '점심 메뉴 추천을 시작합니다.\n',
});

const MESSAGE_QUERY = Object.freeze({
  NAMES: '코치의 이름을 입력해 주세요. (,로 구분\n',
  MENUS: '(이)가 못 먹는 메뉴를 입력해 주세요.\n',
});

const MESSAGE_ERROR = Object.freeze({
  VALUE: '[ERROR] 잘못된 값의 입력입니다.',
});

module.exports = {
  MESSAGE_SYSTEM,
  MESSAGE_QUERY,
  MESSAGE_ERROR,
};
