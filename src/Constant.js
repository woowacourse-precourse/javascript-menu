const NEW_LINE = "\n";
const ERROR = "[ERROR]";

const MESSAGE = Object.freeze({
  start: `점심 메뉴 추천을 시작합니다.`,
  askName: `코치의 이름을 입력해 주세요. (, 로 구분)${NEW_LINE}`,
  askPickyFood: (name) =>
    `${name} (이)가 못 먹는 메뉴를 입력해 주세요.${NEW_LINE}`,
  result: `메뉴 추천 결과입니다.`,
  end: "추천을 완료했습니다.",
});

const RESULT = Object.freeze({
  days: `[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]`,
  category: `[ 카테고리 | 한식 | 한식 | 일식 | 중식 | 아시안 ]`,
  divider: " | ",
});

const ERROR_MESSAGE = Object.freeze({
  notValidNameLength: `${ERROR} 코치의 이름은 최소 2글자, 최대 4글자이여야 합니다.`,
  notValidCoachNumber: `${ERROR} 코치는 최소 2명 이상, 최대 5명이여야 합니다.`,
  notValidPickyFoodNumber: `${ERROR} 못 먹는 음식은 최대 2개여야 합니다.`,
  notExistingFood: `${ERROR} 메뉴에 없는 음식은 작성할 수 없습니다.`,
});

const NUMBER = Object.freeze({
  minNameLength: 2,
  maxNameLength: 4,
  minCoachNumber: 2,
  maxCoachNumber: 5,
  maxPickFood: 2,
});

module.exports = { MESSAGE, RESULT, NEW_LINE, ERROR_MESSAGE, NUMBER };
