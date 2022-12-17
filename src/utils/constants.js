const REGEX = Object.freeze({
  // divideTenNum: /^\d*0$/,
  // item: /^\[[가-힣a-z]*,(\d*0),(\d*)\]$/,
  // OneToFourtyFive: /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/,
  // bridgeLength: /^[3-9]{1}$ |^1{1}[0-9]{1}$|^20$/,
  // upDownKey: /^U$|^D$/,
  // restartExitKey: /^Q$|^R$/,
  coach: /[가-힣a-z]*/,
});

// 그 외 replace 사용법
// string.replace(/[\\[\]]/g, '').trim();

const ERROR_MESSAGE = Object.freeze({
  singleton: '[ERROR] 이 생성자 함수는 하나의 인스턴스만 생성 가능합니다.',
  coach: '[ERROR] 코치의 이름형식이 잘못되었습니다.',
});

const MODEL_KEY = Object.freeze({
  // change: 'VENDING_CHANGE',
});

const GAME_TEXT = Object.freeze({
  start: '점심 메뉴 추천을 시작합니다.\n',
  coach: '코치의 이름을 입력해 주세요. (, 로 구분)',
});

module.exports = {
  REGEX,
  ERROR_MESSAGE,
  MODEL_KEY,
  GAME_TEXT,
};
