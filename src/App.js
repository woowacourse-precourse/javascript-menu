const { Console, Random } = require("@woowacourse/mission-utils");

const SAMPLE = {
	일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
	한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
	중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
	아시안:
		'팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
	양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

function nameIsValid(name) {
  if(name.length < 2 || name.length > 4) return false
}

function namesAreValid(answer) {
  const names = answer.split(',')
  if(names.length < 2 || names.length > 5) {
    throw new Error('[ERROR] 코치 숫자가 안맞음')
  }
  for(let i=0; i<names.length; i++) {
    if(nameIsValid(names[i]) === false) {
      throw new Error('[ERROR] 코치 이름이 유효하지 않음');
    }
  }
  return names
}

function inputCoachNames() {
  Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)\n', (answer => {
    try {
      names = namesAreValid(answer)
    } catch(error) {
      Console.print(error.message)
      return inputCoachNames()
    }
  }))
}

function startService() {
  Console.print('점심 메뉴를 추천합니다.\n')
  return inputCoachNames()
}

class App {
  play() {
    startService()
  }
}

module.exports = App;

const a = new App()
a.play();