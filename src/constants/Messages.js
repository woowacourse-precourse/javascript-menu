const COACH_NAME = Object.freeze({
  OPENING: "점심 메뉴 추천을 시작합니다.\n",
  INPUT: "코치의 이름을 입력해 주세요. (, 로 구분)\n",
  ERROR_NUMBER:
    "[ERROR] 콤마(,) 로 구분된 최소 2명, 최대 5명의 코치의 이름만 입력 가능합니다.",
  ERROR_LENGTH: "[ERROR] 코치 한명의 이름은 최소 2글자, 최대 4글자만 입력 가능합니다.",
});

const HATE_FOOD = Object.freeze({
  INPUT: "(이)가 못 먹는 메뉴를 입력해 주세요.\n",
  ERROR: "[ERROR] 콤마(,) 로 구분된 최소 0개, 최대 2개의 메뉴만 입력 가능합니다.",
});

const RECOMMENDATION = Object.freeze({
  OPENING: "\n메뉴 추천 결과입니다.",
  DIVIDE_DASH: " | ",
  DAYS: "[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]",
  CLOSING: "\n추천을 완료했습니다.",
});

module.exports = { COACH_NAME, HATE_FOOD, RECOMMENDATION };
