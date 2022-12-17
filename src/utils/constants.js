const INPUT_MESSAGE = Object.freeze({
  enterCoachNames: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  enterHateFoods: (coachName) => `${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
});

const OUTPUT_MESSAGE = Object.freeze({
  start: '점심 메뉴 추천을 시작합니다.\n',
  result: '메뉴 추천 결과입니다.',
  day: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
  category: '[ 카테고리 | 한식 | 한식 | 일식 | 중식 | 아시안 ]',
  end: '\n추천을 완료했습니다.\n',
});

const COACH = Object.freeze({
  min: 2,
  max: 5,
  nameLengthMin: 2,
  nameLengthMax: 4,
});

const HATE_FOOD = Object.freeze({
  min: 0,
  max: 2,
});

const CATEGORY = Object.freeze({
  min: 1,
  max: 5,
  1: '일식',
  2: '한식',
  3: '중식',
  4: '아시안',
  5: '양식',
});

const MENUS = {
  일식: [
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
  한식: [
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
  중식: [
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
  아시안: [
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
  양식: [
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
};

const ERROR_MESSAGE = Object.freeze({
  coachNamesInput: '\n[ERROR] 코치는 이름,이름,이름 형식으로 입력해야 합니다.\n',
  coachNamesDuplication: '\n[ERROR] 코치 이름은 한 번씩만 입력해야 합니다.\n',
  coachNameLength: `\n[ERROR] 코치이름은 ${COACH.nameLengthMin} 이상 ${COACH.nameLengthMax} 이하의 글자로 입력해야 합니다.\n`,
  coachNum: `\n[ERROR] 코치는 ${COACH.min}명 이상 ${COACH.max}명 이하로 입력해야 합니다.\n`,
  hateFoodsInput: '\n[ERROR] 못 먹는 메뉴는 메뉴,메뉴,메뉴 형식으로 입력해야 합니다.\n',
  hateFoodsDuplication: '\n[ERROR] 코치 이름은 한 번씩만 입력해야 합니다.\n',
  hateFoodNum: `\n[ERROR] 못 먹는 메뉴는 ${HATE_FOOD.min}명 이상 ${HATE_FOOD.max}개 이하로 입력해야 합니다.\n`,
  invalidHateFood: '\n[ERROR] 카테고리 목록에 포함되지 않은 메뉴입니다.\n',
});

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  COACH,
  HATE_FOOD,
  CATEGORY,
  MENUS,
  ERROR_MESSAGE,
};
