const MSG = {
  INIT: "점심 메뉴 추천을 시작합니다.\n",
  INPUT_COACH: "코치의 이름을 입력해 주세요. (, 로 구분)\n",
  END_RECOMMEND: "\n추천을 완료했습니다.",
};

const ERR_MSG = {
  C_NAME_ERR: "[ERROR] 코치 이름은 최소 2글자에서 최대 4글자입니다.",
  C_LEN_ERR: "[ERROR] 코치는 최소 2명에서 최대 5명입니다.",
  C_DUP_ERR: "[ERROR] 코치 이름은 중복될 수 없습니다.",
  HATE_ERR: "[ERROR] 싫어하는 음식은 0개에서 2개입니다.",
  HATE_NUM_ERR: "[ERROR] 음식 이름이나 빈칸을 입력하세요.",
};

const HATE = (coach) => {
  return `\n${coach}(이)가 못 먹는 메뉴를 입력해 주세요.\n`;
};

const RESULT = (categories) => {
  return `\n메뉴 추천 결과입니다.\n[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]\n[ 카테고리 | ${categories
    .slice(1)
    .join(" | ")} ]`;
};

const DAYS = 5;
const MIN = 1;
const MAX = 5;

const INFO = {
  C_NAME_MIN: 2,
  C_NAME_MAX: 4,
  C_MIN: 2,
  C_MAX: 5,
  HATE_MAX: 2,
};

module.exports = {
  MSG,
  ERR_MSG,
  HATE,
  RESULT,
  DAYS,
  MIN,
  MAX,
  INFO,
};
