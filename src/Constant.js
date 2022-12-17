const INPUT_MESSAGE = {
  inputCoachesMessage : '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
  inputCoachHateMenuMessage : (coach) => `${coach}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,  
}
const OUTPUT_MESSAGE = {
  gameStartMessage : '점심 메뉴 추천을 시작합니다.\n',
  gameOverMessage : `\n추천을 완료했습니다.`
}

const ERROR_MESSAGE = {}

// 매개변수 사용하기

const RESULT = {
  resultMap : (user,count) => `${user} ${count}`
}

module.exports = {INPUT_MESSAGE,OUTPUT_MESSAGE,ERROR_MESSAGE}
