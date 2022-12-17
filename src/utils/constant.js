const SAMPLE = {
  일식: "규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼",
  한식: "김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음",
  중식: "깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채",
  아시안:
    "팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜",
  양식: "라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니",
};

const categoryKey = {
  1: "일식",
  2: "한식",
  3: "중식",
  4: "아시안",
  5: "양식",
};

const DEFAULT = Object.freeze({
  COMMA: ",",
  ZERO: 0,
  EMPTYS_STRING: "",
  EMPTY_ARRAY: [],
  DAY_WEEKS: 5,
  ONE: 1,
  FALSE: false,
  TRUE: true,
  MAX_COACH: 5,
  MIN_COACH: 2,
  MAX_FOOD: 2,
  MAX_CHAR: 4,
  MIN_CHAR: 2,
});

const ERROR = Object.freeze({
  COACH_CHAR_LENGTH: "[ERROR]: 코치의 이름은 2~4글자 사이여야 합니다.",
  COACH_COUNT: "[ERROR]: 점심을 같이 먹을 코치의 수는 2 ~ 5명이어야 합니다.",
  FOOD_RANGE: "[ERROR]: 못먹는 메뉴의 개수는 0 ~ 2개 입니다.",
});

const INPUT = Object.freeze({
  COACHES_NAME: "코치의 이름을 입력해 주세요. (, 로 구분)\n",
  ASK_MENUS: "(이)가 못 먹는 메뉴를 입력해 주세요.\n",
});

const OUTPUT = Object.freeze({
  START: "점심 메뉴 추천을 시작합니다.",
  RESULT: "메뉴 추천 결과입니다.",
  DAYROW: "[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]",
  END: "추천을 완료했습니다.",
  OPEN_BRACKET: "[",
  CLOSE_BRACKET: "]",
  CATEGORY: "카테고리",
  BAR: "|",
});

module.exports = {
  SAMPLE,
  categoryKey,
  DEFAULT,
  ERROR,
  INPUT,
  OUTPUT,
};
