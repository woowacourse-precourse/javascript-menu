const { SERVICE_SETTINGS } = require('./ServiceSettings');

const MESSAGES = Object.freeze({
  serviceStart: '점심 메뉴 추천을 시작합니다.',
  coachName: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
});

const ERROR_MESSAGES = Object.freeze({
  lessNumberOfCoaches: `${SERVICE_SETTINGS.error} 코치는 최소 ${SERVICE_SETTINGS.minNumberOfCoaches}명 이상 입력해야 합니다.`,
  moreNumberOfCoaches: `${SERVICE_SETTINGS.error} 코치는 최대 ${SERVICE_SETTINGS.maxNumberOfCoaches}명까지 입력됩니다.`,
  lengtOfCoachName: `${SERVICE_SETTINGS.error} 코치의 이름은 최소 ${SERVICE_SETTINGS.minLengthOfCoachesName}글자, 최대 ${SERVICE_SETTINGS.maxLengthOfCoachesName}글자입니다.`,
});

module.exports = { MESSAGES, ERROR_MESSAGES };
