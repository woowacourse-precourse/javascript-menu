const { NUMBER } = require('./number');

const MESSAGE = {
  start: '점심 메뉴 추천을 시작합니다.\n',
  readCoachNames: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  readInedible: '(이)가 못 먹는 메뉴를 입력해 주세요.\n',
  recommendResult: '메뉴 추천 결과입니다.\n',
  recommendComplete: '\n추천을 완료했습니다.',
};

const ERROR = {
  invalidName: `[ERROR] 코치의 이름은 최소 ${NUMBER.minName}글자, 최대 ${NUMBER.maxName}글자로 입력해야 하며, 인원은 최소 ${NUMBER.minMember}명, 최대 ${NUMBER.maxMember}명 입니다.`,
  invalidInedible: `[ERROR] 먹지 못하는 메뉴는 최소 ${NUMBER.minInedible}개, 최대 ${NUMBER.maxInedible}개의 메뉴여야 합니다.`,
};
module.exports = { MESSAGE, ERROR };
