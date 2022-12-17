const MSG = {
  INIT: "점심 메뉴 추천을 시작합니다.\n",
  INPUT_COACH: "코치의 이름을 입력해 주세요. (, 로 구분)\n",
  END_RECOMMEND: "추천을 완료했습니다.",
};

const ERR_MSG = {
  NAME_ERR: "[ERROR] 코치 이름은 최소 2글자에서 최대 4글자입니다.",
  C_LEN_ERR: "[ERROR] 코치는 최소 2명에서 최대 5명입니다.",
  C_DUP_ERR: "[ERROR] 코치 이름은 중복될 수 없습니다.",
};

const HATE = (coach) => {
  return `${coach}(이)가 못 먹는 메뉴를 입력해 주세요.`;
};

module.exports = {
  MSG,
  ERR_MSG,
  HATE,
};
