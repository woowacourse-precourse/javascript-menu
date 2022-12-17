const ERROR_PREFIX = "[ERROR]";

const ERROR_MESSAGES = {
  NOT_OVER_TWO: `${ERROR_PREFIX} 코치는 최소 2명 이상 입력해야 합니다.`,
  NOT_TWO_AND_FOUR_LENGTH: `${ERROR_PREFIX} 코치 이름은 최소 2글자, 최대 4글자여야 합니다.`,
  TWO_FOOD: `${ERROR_PREFIX} 못 먹는 메뉴는 최대 2개까지 입력할 수 있습니다.`,
  NOT_EXIST_FOOD: `${ERROR_PREFIX} 해당 메뉴는 메뉴 추천 서비스에 없는 메뉴 입니다.`,
};

const GAME_MESSAGES = {
  START: "점심 메뉴 추천을 시작합니다.\n\n",
  NAME: "코치의 이름을 입력해 주세요. (, 로 구분)\n",
  CAN_NOT_EAT: "(이)가 못 먹는 메뉴를 입력해 주세요.\n",
  RESULT:
    "메뉴 추천 결과입니다.\n[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]",
  END: "추천을 완료했습니다.",
};

const FOOD_CATEGORY = {
  CATEGORY: "카테고리",
  1: "일식",
  2: "한식",
  3: "중식",
  4: "아시안",
  5: "양식",
};

const MENU = {
  KOREAN: [
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
  JAPANESE: [
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
  CHINESE: [
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
  ASIAN: [
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
  WESTERN: [
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
};

module.exports = {
  ERROR_MESSAGES,
  GAME_MESSAGES,
  FOOD_CATEGORY,
  MENU,
};
