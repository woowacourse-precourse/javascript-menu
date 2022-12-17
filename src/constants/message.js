const INPUT_MESSAGE = {
  coachNames: "코치의 이름을 입력해 주세요. (, 로 구분)\n",
  notEatMenu: (coachName) =>
    `${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
};

const OUTPUT_MESSAGE = {
  serviceStart: "점심 메뉴 추천을 시작합니다.",
  resultRecommandMenuAlert: "메뉴 추천 결과입니다.",
  recommandFinishAlert: "추천을 완료했습니다.",
  weekdaysClassification:
    "[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]",
  category: "카테고리",
  divisionLine: " | ",
};

const ERROR_MESSAGE = {};

module.exports = {
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
};
