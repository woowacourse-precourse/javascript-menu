const ANNOUNCEMENT_MESSAGE = Object.freeze({
  START: "점심 메뉴 추천을 시작합니다.",
  GET_COACH_NAMES: "코치의 이름을 입력해 주세요.",
  GET_CANT_EAT: "(이)가 못 먹는 메뉴를 입력해 주세요.",
  RESULT: "메뉴 추천 결과입니다.",
  FINISH: "추천을 완료했습니다.",
});

const ERROR_MESSAGE = Object.freeze({
  IS_COACH_LENGTH: "[ERROR] 코치는 2~5명 입력해야 합니다.",
  IS_COACH_NAME_LENGTH: "[ERROR] 코치이름은 2~4글자로 입력해야 합니다.",
});

module.exports = { ANNOUNCEMENT_MESSAGE, ERROR_MESSAGE };
