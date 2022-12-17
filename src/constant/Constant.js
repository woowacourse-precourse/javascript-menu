const ANNOUNCE = {
  START: '점심 메뉴 추천을 시작합니다.\n',
  END: '추천을 완료했습니다.\n',
};

const QUESTION = {
  ENTER_NAMES: '코치의 이름을 입력해 주세요. (,로 구분)\n',
  BAN_MENU: (coachName) => `\n${coachName}가 못 먹는 메뉴를 입력해 주세요.\n`,
};

const REGEX = {
  IS_NAME_VALID: /^([^,]{2,4},){1,4}[^,]{2,4}$/,
  IS_BAN_MENU_VALID: /^(([^,]+,)?[^,]+|)$/,
};

const ERROR = {
  NAME_INVALID: `[ERROR] 코치의 이름을 입력하실 때는 아래 사항을 준수해 주세요.
- 코치의 이름은 2 글자 이상 4 글자 이하여야 합니다.
- 코치는 2 명 이상 5 명 이하여야 합니다.
- 각 코치의 이름은 콤마(,) 로 구분되어야 합니다.`,
  BAN_MENU_INVALID: `[ERROR] 먹을 수 없는 메뉴 이름을 입력하실 때는 아래 사항을 준수해 주세요.
- 먹을 수 없는 메뉴의 개수는 0개 이상 2개 이하여야 합니다.
- 각 먹을 수 없는 메뉴들은 콤마(,) 로 구분되어야 합니다.`,
};

const CATEGORY = {
  DUPLICATE_LIMIT: 2,
  MAX_LIMIT: 5,
};

const MENUS = {
  SIZE: 9,
  1: [
    '규동',
    '우동',
    '미소시루',
    '스시',
    '가츠동',
    '오니기리',
    '하이라이스',
    '라멘',
    '오코노미야끼',
  ],
  2: ['김밥', '김치찌개', '쌈밥', '된장찌개', '비빔밥', '칼국수', '불고기', '떡볶이', '제육볶음'],
  3: [
    '깐풍기',
    '볶음면',
    '동파육',
    '짜장면',
    '짬뽕',
    '마파두부',
    '탕수육',
    '토마토 달걀볶음',
    '고추잡채',
  ],
  4: [
    '팟타이',
    '카오 팟',
    '나시고렝',
    '파인애플 볶음밥',
    '쌀국수',
    '똠얌꿍',
    '반미',
    '월남쌈',
    '분짜',
  ],
  5: ['라자냐', '그라탱', '뇨끼', '끼슈', '프렌치 토스트', '바게트', '스파게티', '피자', '파니니'],
};

module.exports = {
  ANNOUNCE,
  QUESTION,
  REGEX,
  ERROR,
  CATEGORY,
  MENUS,
};
