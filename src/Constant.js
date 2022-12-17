const MENU_OBJ = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
	한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
	중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
	아시안:
		'팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
	양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
}
const INPUT_MESSAGE = {
  inputCoachesMessage : '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  inputCoachHateMenuMessage : (coach) => `${coach}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,  
}
const OUTPUT_MESSAGE = {
  gameStartMessage : '점심 메뉴 추천을 시작합니다.\n',
  gemeResultMessage : '\n메뉴 추천 결과입니다.',
  gameOverMessage : `\n추천을 완료했습니다.`
}
const RANDOM_RANGE_NUMBER = {
  RANDOM_LOWER_INCLUSIVE: 1,
  RANDOM_UPPER_INCLUSIVE: 5,
}
const RESULT = {
  resultTitle : '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
}

const ERROR_MESSAGE = {}


module.exports = {MENU_OBJ,RANDOM_RANGE_NUMBER,INPUT_MESSAGE,OUTPUT_MESSAGE,ERROR_MESSAGE,RESULT}
