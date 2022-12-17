const GAME_STRING = Object.freeze({
  resultWrapper: (result) => `[ ${result} ]`,
  dividingLine: ' | ',
  splitString: ',',
});

const MENU_CATEGORY = Object.freeze({
  japen: '일식',
  korean: '한식',
  china: '중식',
  asian: '아시안',
  western: '양식',
});

const MENU_NAME = Object.freeze({
  japen:
    '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  korean:
    '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  china:
    '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  asian:
    '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  western:
    '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
});

const GAME_NUMBER = Object.freeze({
  minCoach: 2,
  maxCoach: 5,
  minName: 2,
  maxName: 4,
  minMenu: 0,
  maxMenu: 2,
  maxMenuLength: 10,
});

const GAME_MESSAGE = Object.freeze({
  start: '점심 메뉴 추천을 시작합니다.',
  inputCoachesName: `코치의 이름을 입력해 주세요. (${GAME_STRING.splitString} 로 구분)`,
  showDontLikeMenu: (name) => `${name}(이)가 못 먹는 메뉴를 입력해 주세요.`,
  result: '메뉴 추천 결과입니다.',
  days: '구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일',
  finish: '추천을 완료했습니다.',
  category: '카테고리',
});

const ERROR_SUBJECT = '[ERROR]';

const ERROR_MESSAGE = Object.freeze({
  nameRange: `${ERROR_SUBJECT} 코치의 이름은 ${GAME_NUMBER.minName} 글자 이상 ${GAME_NUMBER.maxName} 글자 이하만 입력이 가능합니다.`,
  nameOverlap: `${ERROR_SUBJECT} 코치들의 이름 중 중복된 이름이 있습니다.`,
  coachRange: `${ERROR_SUBJECT} 코치는 ${GAME_NUMBER.minCoach} 명 이상 ${GAME_NUMBER.maxCoach} 명 이하만 입력이 가능합니다.`,
  menuRange: `${ERROR_SUBJECT} 못 먹는 메뉴는 ${GAME_NUMBER.minMenu} 개 이상 ${GAME_NUMBER.maxMenu} 개 이하만 입력이 가능합니다.`,
  menuNotKorean: `${ERROR_SUBJECT} 못 먹는 메뉴는 한글만 입력이 가능합니다.`,
  menuLength: `${ERROR_SUBJECT} 못 먹는 메뉴는 ${GAME_NUMBER.maxMenuLength} 글자 이하만 입력이 가능합니다.`,
});

module.exports = {
  ERROR_MESSAGE,
  ERROR_SUBJECT,
  GAME_MESSAGE,
  GAME_NUMBER,
  GAME_STRING,
  MENU_CATEGORY,
  MENU_NAME,
};
