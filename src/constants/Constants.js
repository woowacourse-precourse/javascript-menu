const MARK = Object.freeze({
  divider: '|',
  openBracket: '[',
  closeBracket: ']',
  rest: ',',
});

const MESSAGE = Object.freeze({
  opening: '점심 메뉴 추천을 시작합니다.',
  getName: `코치의 이름을 입력해 주세요. (${MARK.rest} 로 구분)`,
  cantEat: (name) => `${name}(이)가 못 먹는 메뉴를 입력해 주세요.`,
  result: '메뉴 추천 결과입니다.',
  finish: '추천을 완료했습니다.',
});

const ERROR = Object.freeze({
  prefix: '[ERROR]',
});

const MENU = Object.freeze({
  japanese: [
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

  korean: [
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

  chinese: [
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
});

module.exports = {
  MARK,
  MESSAGE,
  ERROR,
  MENU,
};
