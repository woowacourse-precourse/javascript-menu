const deepFreeze = require('../utils/deepFreeze');
const { PROCESS_CONSTANTS } = require('./Setting');

const MESSAGE = {
  process: {
    startNotice: '점심 메뉴 추천를 시작합니다.',
    inputCoachName: '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
    quitNotice: '추천을 완료했습니다.',
  },

  error: {
  },
};

module.exports = MESSAGE;
