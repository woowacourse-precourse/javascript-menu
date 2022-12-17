const { Console, Random } = require("@woowacourse/mission-utils");

const SAMPLE = {
	일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
	한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
	중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
	아시안:
		'팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
	양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

class App {
  coachs;
  noFoodArr;

  constructor() {
	this.coachs = [];
	this.noFoodArr = [];
	this.indexCount = 0;

  }

  play() {
	Console.print("점심 메뉴 추천을 시작합니다.");
	this.inputCreatCoach();

	
  }

  /** 2. 코치 이름 생성 */
  inputCreatCoach() {
	Console.readLine("코치의 이름을 입력해 주세요. (, 로 구분).\n", (names) => {
	  this.coachs = names.split(",");
	  this.validName();
	  this.replay();
	  });
  }

  /** 3. 코치 이름 생성 값 유효성 검토  */
  validName() {
	if(this.coachs.length < 2 || this.coachs.length > 5) {
	  throw new Error("[ERROR] 코치는 최소 2명 이상, 최대 5명 이하로 입력해야 합니다.");
	}    
	this.coachs.forEach(coach => {
	  if(coach.length > 4 || coach.length < 2) {
		throw new Error("[ERROR] 코치의 이름은 최소 2글자, 최대 4글자 입니다.");
	  }
	});
  }


	/**4. 코치 인원 만큼 입력값 반복하는 기능 */
  replay() {
	if(this.indexCount !== this.coachs.length) {
		this.inputNoFoods();
	}
  }




}

const app = new App();
app.play();

module.exports = App;
