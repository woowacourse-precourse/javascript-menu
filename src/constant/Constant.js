const ANNOUNCE = {
  START: '점심 메뉴 추천을 시작합니다.\n',
  END: '추천을 완료했습니다.\n',
};

const QUESTION = {
  ENTER_NAMES: '코치의 이름을 입력해 주세요. (,로 구분)\n',
  BAN_MENU: (coachName) => `\n${coachName}가 못 먹는 메뉴를 입력해 주세요.\n`,
};

const REGEX = {
  IS_NAME_VALID: /^([^,]{2,4},){1,4}[^,]{2,4}$/,
  IS_BAN_MENU_VALID: /^(([^,]+,)?[^,]+|)$/,
};

module.exports = {
  ANNOUNCE,
  QUESTION,
  REGEX,
};
