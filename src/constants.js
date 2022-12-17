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
  NAME_COUNT: `${SYMBOL.ERROR}코치는 최소 2명, 최대 5명까지 식사를 함께 합니다.`,
  NAME_DUPLICATION: `${SYMBOL.ERROR}코치의 이름이 중복되어 작성되었습니다.`,
  NAME_SPECIAL_CHARS: `${SYMBOL.ERROR}코치의 이름에 특수문자가 들어갈 수 없습니다.`,
  MENU_NOT_INCLUDED: `${SYMBOL.ERROR}유효하지 않은 메뉴가 포함되었습니다.`,
  MENU_COUNT: `${SYMBOL.ERROR}못 먹는 메뉴는 최소 0개, 최대 2개 입력 가능합니다.`,
});

const DAYS = ["구분", "월요일", "화요일", "수요일", "목요일", "금요일"];

const SAMPLE = {
  일식: "규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼",
  한식: "김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음",
  중식: "깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채",
  아시안:
    "팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜",
  양식: "라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니",
};

const CATEGORY = Object.freeze({
  TITLE: "카테고리",
  1: "일식",
  2: "한식",
  3: "중식",
  4: "아시안",
  5: "양식",
});

const NAME_VALIDITY = Object.freeze({
  MAX_NAME_LENGTH: 4,
  MIN_NAME_LENGTH: 2,
  MAX_NAMES_COUNT: 5,
  MIN_NAMES_COUNT: 2,
});

const MENU_VALIDITY = Object.freeze({
  MAX_MENU_COUNT: 2,
  MIN_MENU_COUNT: 0,
});

const REG_EXP = Object.freeze({
  SPECIAL_CHARS_CHECK: /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g,
});

module.exports = {
  MESSAGE,
  ERROR_MESSAGE,
  SYMBOL,
  DAY,
  CATEGORY,
  NAME_VALIDITY,
  MENU_VALIDITY,
  REG_EXP,
  SAMPLE,
};
