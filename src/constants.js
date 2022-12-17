const SYMBOL = Object.freeze({
  COMMA: ",",
  RESULT_OPEN: "[ ",
  RESULT_CLOSE: " ]",
  SEPARATOR: " | ",
  NEW_LINE: "\n",
  ERROR: "[ERROR] ",
});

const MESSAGE = Object.freeze({
  START: `점심 메뉴 추천을 시작합니다.${SYMBOL.NEW_LINE}`,
  ASK_NAME: `코치의 이름을 입력해 주세요. (${SYMBOL.COMMA} 로 구분)${SYMBOL.NEW_LINE}`,
  ASK_MENU: `(이)가 못 먹는 메뉴를 입력해 주세요.${SYMBOL.NEW_LINE}`,
  RESULT_START: "메뉴 추천 결과입니다.",
  RESULT_END: "추천을 완료했습니다.",
});

const ERROR_MESSAGE = Object.freeze({
  NAME_LENGTH: `${SYMBOL.ERROR}코치의 이름은 최소 2글자, 최대 4글자 입니다.`,
});

const DAY = Object.freeze({
  TITLE: "구분",
  MON: "월요일",
  TUE: "화요일",
  WED: "수요일",
  THU: "목요일",
  FRI: "금요일",
});

const CATEGORY = Object.freeze({
  TITLE: "카테고리",
  KOR: "한식",
  JAP: "일식",
  CHI: "중식",
  ASI: "아시안",
  WES: "양식",
});

const NAME_VALIDITY = Object.freeze({
  MAX_NAME_LENGTH: 4,
  MIN_NAME_LENGTH: 2,
  MAX_NAMES_COUNT: 5,
  MIN_NAMES_COUNT: 2,
});

module.exports = {
  MESSAGE,
  ERROR_MESSAGE,
  SYMBOL,
  DAY,
  CATEGORY,
  NAME_VALIDITY,
};
