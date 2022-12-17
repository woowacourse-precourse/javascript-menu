const COACH = Object.freeze({
  minNameSize: 2,
  maxNameSize: 4,
  minPerson: 2,
  maxPerson: 5,
  minHateMenu: 0,
  maxHateMenu: 2,
});

const MARK = Object.freeze({
  divider: '|',
  openBracket: '[',
  closeBracket: ']',
  rest: ',',
});

const MESSAGE = Object.freeze({
  opening: '점심 메뉴 추천을 시작합니다.',
  getNames: `코치의 이름을 입력해 주세요. (${MARK.rest} 로 구분)`,
  cantEat: (name) => `${name}(이)가 못 먹는 메뉴를 입력해 주세요.`,
  result: '메뉴 추천 결과입니다.',
  category: '카테고리',
  finish: '추천을 완료했습니다.',
});

const WEEK = Object.freeze({
  name: '구분',
  size: 5,
  mon: '월요일',
  tues: '화요일',
  wed: '수요일',
  thur: '목요일',
  fri: '금요일',
});

const CATEGORY = Object.freeze({
  name: '카테고리',
  size: 5,
  max: 2,
  korean: '한식',
  japanese: '일식',
  chinese: '중식',
  asian: '아시안',
  western: '양식',
});

const ERROR = Object.freeze({
  prefix: '[ERROR]',
  nameLength: `코치의 이름은 최소 ${COACH.minNameSize}자에서 ${COACH.maxNameSize}자 사이여야 합니다.`,
  personCount: `코치는 최소 ${COACH.minPerson}명에서 ${COACH.maxPerson}명까지여야 합니다.`,
  hateMenusLength: `못먹는 메뉴는 ${COACH.maxHateMenu}개 까지만 입력할 수 있습니다.`,
});

const MENU = Object.freeze({
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안:
    '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
});

module.exports = {
  COACH,
  MARK,
  MESSAGE,
  WEEK,
  CATEGORY,
  ERROR,
  MENU,
};
