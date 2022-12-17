const ErrorMsg = Object.freeze({
  COACH_NAME: "[ERROR] 코치의 이름은 2글자에서 4글자 사이입니다.",
  COACH_COUNT: "[ERROR] 함께 밥을 먹는 코치의 수는 2명에서 5명 사이입니다.",
  UNLIKE_MENU_COUNT: "[ERROR] 못 먹는 메뉴는 0개에서 2개만 가능합니다.",
  MENU_NOT_EXIST: "[ERROR] 존재하지 않는 메뉴입니다.",
  CATEGORY_NOT_EXIST: "[ERROR] 존재하지 않는 카테고리입니다.",
  CATEGORY_COUNT: "[ERROR] 카테고리의 수가 유효하지 않습니다.",
  MENU_COUNT: "[ERROR] 메뉴의 수가 유효하지 않습니다.",
});

const AllMenu = Object.freeze({
  일식: [
    "규동",
    "우동",
    "미소시루",
    "스시",
    "가츠동",
    "오니기리",
    "하이라이스",
    "라멘",
    "오코노미야끼",
  ],
  한식: [
    "김밥",
    "김치찌개",
    "쌈밥",
    "된장찌개",
    "비빔밥",
    "칼국수",
    "불고기",
    "떡볶이",
    "제육볶음",
  ],
  중식: [
    "깐풍기",
    "볶음면",
    "동파육",
    "짜장면",
    "짬뽕",
    "마파두부",
    "탕수육",
    "토마토 달걀볶음",
    "고추잡채",
  ],
  아시안: [
    "팟타이",
    "카오 팟",
    "나시고렝",
    "파인애플 볶음밥",
    "쌀국수",
    "똠얌꿍",
    "반미",
    "월남쌈",
    "분짜",
  ],
  양식: [
    "라자냐",
    "그라탱",
    "뇨끼",
    "끼슈",
    "프렌치 토스트",
    "바게트",
    "스파게티",
    "피자",
    "파니니",
  ],
});

const AllCategory = ["일식", "한식", "중식", "아시안", "양식"];

const StaticValues = Object.freeze({
  EAT_TOGETHER_COUNT_MIN: 2,
  EAT_TOGETHER_COUNT_MAX: 5,
  EAT_TOGHTHER_DAYS: 5,
  CAN_DUPLICATE_CATEGORIE_COUNT: 2,
  CAN_INPUT_UNLIKE_MENU_COUNT: 2,
  COACH_NAME_LENGTH_MIN: 2,
  COACH_NAME_LENGTH_MAX: 4,
  CATEGORY_RANGE_START: 1,
  CATEGORY_RANGE_END: 5,
});

const GuideString = Object.freeze({
  READ_COACH_NAME: "\n코치의 이름을 입력해 주세요. (, 로 구분)\n",
  READ_UNLIKE_MENU: `(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
  START_MENU_RECOMMEND: "점심 메뉴 추천을 시작합니다.\n",
  RESULT: "메뉴 추천 결과입니다.",
  DAYS: "[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]",
  END: "\n추천을 완료했습니다.",
});

module.exports = { AllCategory, AllMenu, ErrorMsg, StaticValues, GuideString };
