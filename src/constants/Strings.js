const QUERY = Object.freeze({
  COACH_NAME: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  HATE_MENU: '(이)가 못 먹는 메뉴를 입력해 주세요.\n',
});

const ERROR_MSG = Object.freeze({
  COACHES_SIZE: '[ERROR] 코치는 2명에서 5명만 가능합니다.',
  COACH_NAME_LENGTH: '[ERROR] 코치의 이름은 2글자에서 4글자여야 합니다.',
  COACHES_DUPLICATE: '[ERROR] 코치의 이름은 중복될 수 없습니다.',
  HATE_MENUS_SIZE: '[ERROR] 못 먹는 음식은 0개에서 2개여야 합니다.',
  INVALID_MENU: '[ERROR] 없는 메뉴입니다.',
});

module.exports = { QUERY, ERROR_MSG };
