const INPUT = {
  NAME: "\n코치의 이름을 입력해 주세요. (, 로 구분)\n",
  FOOD: "(이)가 못 먹는 메뉴를 입력해 주세요.\n",
};

const OUTPUT = {
  START: "점심 메뉴 추천을 시작합니다.\n",
  END: "메뉴 추천 결과입니다.\n",
  DAY: "[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]\n",
  DONE: "\n추천을 완료했습니다.",
};

const ERROR = {
  LENGTH:
    "[ERROR] 코치의 이름은 최소 2글자 이상 최대 4글자 이하로 입력해야 합니다.\n",
  COUNT: "[ERROR] 코치는 최소 2명 이상 최대 5명 이하로 입력해야 합니다.\n",
  FOOD: "[ERROR] 못 먹는 메뉴는 최소 0개 이상 최대 2개 이하로 입력해야 합니다.\n",
};

const VALUE = {
  NUMBER: [0, 1, 2, 3, 4, 5, 6, 7, 8],
};

module.exports = { INPUT, OUTPUT, ERROR, VALUE };
