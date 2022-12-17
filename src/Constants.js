const Constants = Object.freeze({
  CATEGORY: Object.freeze({
    name: '카테고리',
    jp: '일식',
    kr: '한식',
    ch: '중식',
    asian: '아시안',
    western: '양식',
  }),

  FOOD_NAMES: Object.freeze({
    jp: [
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
    kr: [
      '김밥',
      '김치찌개',
      '쌈밥',
      '된장찌개',
      '비빔밥',
      '칼국수',
      '불고기',
      '떡볶이',
      '제육볶음',
    ],
    ch: [
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
    asian: [
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
    western: [
      '라자냐',
      '그라탱',
      '뇨끼',
      '끼슈',
      '프렌치 토스트',
      '바게트',
      '스파게티',
      '피자',
      '파니니',
    ],
  }),

  RESULT_MSG: Object.freeze({
    title: '메뉴 추천 결과입니다.',
    tableHead: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
    pipeSeperator: ' | ',
    leftBracket: '[ ',
    rightBracket: ' ]',
  }),

  GAME_MSG: Object.freeze({
    start: '점심 메뉴 추천을 시작합니다.',
    enterCoachNames: '코치의 이름을 입력해 주세요. (, 로 구분)',
    enterCantEat: '(이)가 못 먹는 메뉴를 입력해 주세요.',
  }),

  COMMON_MSG: Object.freeze({
    newLine: '\n',
  }),
});

module.exports = Constants;
