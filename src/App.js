const { Console, Random } = require("@woowacourse/mission-utils");

const categories = {
	일식: ['규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼'],
	한식: ['김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음'],
	중식: ['깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채'],
	아시안:
		['팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜'],
	양식: ['라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니'],
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
	Console.readLine("\n코치의 이름을 입력해 주세요. (, 로 구분).\n", (names) => {
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

  /**5. 못 먹는 음식 코치마다 받기 */
  inputNoFoods() {
	Console.readLine(`\n${this.coachs[this.indexCount]}(이)가 못 먹는 메뉴를 입력해 주세요.\n`, (noFoods) => {
	  this.validNoFood(noFoods);
	  this.noFoodArr.push(noFoods);
	  this.indexCount += 1;
	  this.replay();
	});
	}

  /**4. 코치 인원 만큼 입력값 반복하는 기능 */
  replay() {
	if(this.indexCount !== this.coachs.length) {
		this.inputNoFoods();
	} else{
	  this.menuRecomend();
	}

  }

  /** 6. 못 먹는 음식 유효성 검토  */
  validNoFood(noFoods) {
	let noFoodArr = noFoods.split(",");
    if(noFoodArr.length > 2) {
	  throw new Error("[ERROR] 못 먹는 음식은 최대 2개까지만 가능합니다.");
	}    
  }

  /** 7. 메뉴 추천 */
  menuRecomend() {

	for (let key in categories) {
		const foodArr = categories[key];
		console.log(foodArr);
		console.log("###: ", typeof foodArr);

		// console.log(key)
		// console.log(value)
	  }
  }

  print() {
	let coachCount = 0;

	Console.print("[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]");
	Console.print("[ 카테고리 | 한식 | 한식 | 일식 | 중식 | 아시안 ]");
	Console.print(`${this.coachs[indexCount]}`);
	Console.print("추천을 완료했습니다.");

  }






}

const app = new App();
app.play();

module.exports = App;
