const OUTPUT = {
  START: "점심 메뉴 추천을 시작합니다.",
  RESULT_MESSAGE: "메뉴 추천 결과입니다.",
  RESULT_END: "추천을 완료했습니다."
};
  
const INPUT = {
  NAME: "코치의 이름을 입력해 주세요. (, 로 구분)",
  HATE_MENU: (name) => `${name}(이)가 못 먹는 메뉴를 입력해 주세요.`,
};
  
const ERROR = {
  INPUT_NAME: "[ERROR] 코치의 이름은 최소 2글자, 최대 4글자입니다.",
  INPUT_MEMBERS: "[ERROR] 코치는 최소 2명 이상 입력해야 합니다.",
  INPUT_MENU: "[ERROR] 못 먹는 메뉴는 최대 2개입니다.",
};

module.exports = { OUTPUT, INPUT, ERROR };