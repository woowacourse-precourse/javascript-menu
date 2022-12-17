const { SERVICE_SETTINGS } = require('./ServiceSettings');

const MESSAGES = Object.freeze({
  serviceStart: '점심 메뉴 추천을 시작합니다.',
  coachName: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  excludeMenu: (name) => `${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
  result: '메뉴 추천 결과입니다.\n',
  days: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
  serviceEnd: '추천을 완료했습니다.',
});

const ERROR_MESSAGES = Object.freeze({
  lessNumberOfCoaches: `${SERVICE_SETTINGS.error} 코치는 최소 ${SERVICE_SETTINGS.minNumberOfCoaches}명 이상 입력해야 합니다.`,
  moreNumberOfCoaches: `${SERVICE_SETTINGS.error} 코치는 최대 ${SERVICE_SETTINGS.maxNumberOfCoaches}명까지 입력됩니다.`,
  lengtOfCoachName: `${SERVICE_SETTINGS.error} 코치의 이름은 최소 ${SERVICE_SETTINGS.minLengthOfCoachesName}글자, 최대 ${SERVICE_SETTINGS.maxLengthOfCoachesName}글자입니다.`,
  numberOfMenus: `메뉴는 최대 ${SERVICE_SETTINGS.maxNumberOfMenus}개를 입력해주세요.`,
});

module.exports = { MESSAGES, ERROR_MESSAGES };
