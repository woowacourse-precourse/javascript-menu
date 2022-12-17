const PARAMETERS = {
  dayCount: 5,
  coachNumberRange: [2, 5],
  coachNameLengthRange: [2, 4],
  inedibleMenuRange: [0, 2],
  category: ['일식', '한식', '중식', '아시안', '양식'],
  menu: {
    일식: ['규동', '우동', '미소시루', '스시', '가츠동', '오니기리', '하이라이스', '라멘', '오코노미야끼'],
    한식: ['김밥', '김치찌개', '쌈밥', '된장찌개', '비빔밥', '칼국수', '불고기', '떡볶이', '제육볶음'],
    중식: ['깐풍기', '볶음면', '동파육', '짜장면', '짬뽕', '마파두부', '탕수육', '토마토 달걀볶음', '고추잡채'],
    아시안: ['팟타이', '카오 팟', '나시고렝', '파인애플 볶음밥', '쌀국수', '똠얌꿍', '반미', '월남쌈', '분짜'],
    양식: ['라자냐', '그라탱', '뇨끼', '끼슈', '프렌치 토스트', '바게트', '스파게티', '피자', '파니니'],
  },
  checkBlackSpace: /^\S+$/g,
};

const CONSOLE_MESSAGE = {
  start: '점심 메뉴 추천을 시작합니다.\n',
  coachInput: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  inedibleMenuInput(name) {
    return `${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`;
  },
};

const RESULT_MESSAGE = {
  result: '메뉴 추천 결과입니다.',
  days: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
  categories(selectedCategories) {
    return `[ 카테고리 | ${selectedCategories.join(' | ')} ]`;
  },
  coachMenus(coach, menus) {
    return `[ ${coach} | ${menus.join(' | ')} ]`;
  },
  end: '추천을 완료했습니다.',
};

const ERROR_MESSAGE = {
  invalidCoachNameLength: '[ERROR] 코치의 이름은 최소 2글자, 최대 4글자를 입력해 주세요',
  invalidCoachLength: '[ERROR] 코치는 최소 2명, 최대 5명까지 입력하고 쉼표(,)를 사용해서 구분해 주세요',
  invalidInedibleMenuLength: '[ERROR] 못 먹는 메뉴는 최소 0개, 최대 2개를 입력하고 쉼표(,)를 사용해서 구분해 주세요',
};

module.exports = {
  PARAMETERS,
  CONSOLE_MESSAGE,
  RESULT_MESSAGE,
  ERROR_MESSAGE,
};
