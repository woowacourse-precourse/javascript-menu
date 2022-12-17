const INPUT_MESSAGE = Object.freeze({
  enterCoachNames: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  start: '점심 메뉴 추천을 시작합니다.\n',
});

const COACH = Object.freeze({
  min: 2,
  max: 5,
  nameLengthMin: 2,
  nameLengthMax: 4,
});

const ERROR_MESSAGE = Object.freeze({
  coachNamesInput: '[ERROR] 코치는 이름,이름,이름 형식으로 입력해야 합니다.\n',
  coachNamesDuplication: '[ERROR] 코치 이름은 한 번씩만 입력해야 합니다.\n',
  coachNameLength: `[ERROR] 코치이름은 ${COACH.nameLengthMin} 이상 ${COACH.nameLengthMax} 이하의 글자로 입력해야 합니다.\n`,
  coachNum: `[ERROR] 코치는 ${COACH.min}명 이상 ${COACH.max}명 이하로 입력해야 합니다.\n`,
});

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  COACH,
  ERROR_MESSAGE,
};
