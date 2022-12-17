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

const ERROR = {
  NAME_INVALID: `[ERROR] 코치의 이름을 입력하실 때는 아래 사항을 준수해 주세요.
- 코치의 이름은 2 글자 이상 4 글자 이하여야 합니다.
- 코치는 2 명 이상 5 명 이하여야 합니다.
- 각 코치의 이름은 콤마(,) 로 구분되어야 합니다.`,
  BAN_MENU_INVALID: `[ERROR] 먹을 수 없는 메뉴 이름을 입력하실 때는 아래 사항을 준수해 주세요.
- 먹을 수 없는 메뉴의 개수는 0개 이상 2개 이하여야 합니다.
- 각 먹을 수 없는 메뉴들은 콤마(,) 로 구분되어야 합니다.`,
};
module.exports = {
  ANNOUNCE,
  QUESTION,
  REGEX,
  ERROR,
};
