const GAME_MESSAGE = Object.freeze({
  start: '점심 메뉴 추천을 시작합니다.',
  inputCoachesName: '코치의 이름을 입력해 주세요. (, 로 구분)',
  showDontLikeMenu: (name) => `${name}(이)가 못 먹는 메뉴를 입력해 주세요.`,
  result: '메뉴 추천 결과입니다.',
  days: '구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일',
  finish: '추천을 완료했습니다.',
  category: '카테고리',
});

const GAME_STRING = Object.freeze({
  resultWrapper: (result) => `[ ${result} ]`,
  dividingLine: ' | ',
  splitString: ',',
});

const GAME_NUMBER = Object.freeze({
  minCoach: 2,
  maxCoach: 5,
  minName: 2,
  maxName: 4,
  minMenu: 0,
  maxMenu: 2,
});

module.exports = {
  GAME_MESSAGE,
  GAME_NUMBER,
  GAME_STRING,
};
