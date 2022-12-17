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

const RESULT = (result) => {
  `메뉴 추천 결과입니다.
    [ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]
    [ 카테고리 | 한식 | 한식 | 일식 | 중식 | 아시안 ]
    [ 토미 | 쌈밥 | 김치찌개 | 미소시루 | 짜장면 | 팟타이 ]
    [ 제임스 | 된장찌개 | 비빔밥 | 가츠동 | 토마토 달걀볶음 | 파인애플 볶음밥 ]
    [ 포코 | 된장찌개 | 불고기 | 하이라이스 | 탕수육 | 나시고렝 ]`;
};

module.exports = {
  MSG,
  ERR_MSG,
  HATE,
};
