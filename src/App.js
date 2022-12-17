const MissionUtils = require("@woowacourse/mission-utils");

const SAMPLE = {
	일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
	한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
	중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
	아시안:
		'팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
	양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

const {
	MENU_RECOMMEND_START,
  COACH_NAME_INPUT,
  UNABLE_TO_EAT,
  RECOMMEND_COMPLETE,
  RESULT_MENU_RECOMMEND,
  DIVISION_DAY,
  CATEGORY,
	KOREAN_FOOD,
  JAPANESE_FOOD,
  CHINESE_FOOD,
  ASIAN_FOOD,
  AMERICA_FOOD,
  START_BRACKET,
  CLOSE_BRACKET} = require("./utils/constant")
class App {
	#coachNames;
	#eachCoachUnableToEat;
	#coachNumber;
	#dayCategory;
	#categoryRepeatCheck;
	#menusNumber;
	#result;

	constructor(){
		this.#coachNames=[]
		this.#eachCoachUnableToEat={}
		this.#coachNumber=0
		this.#dayCategory = []
		this.#categoryRepeatCheck = []
		this.#menusNumber=[]
		this.#result=[]
	}
  play() {
		MissionUtils.Console.print(MENU_RECOMMEND_START)
		this.insertCoachName()
	}

	insertCoachName(){
		MissionUtils.Console.readLine(COACH_NAME_INPUT,(name)=>{
			this.#coachNames=name.split(',');
			this.unableToEat(this.#coachNames[this.#coachNumber]);
		});
	}

	unableToEat(coach){
		MissionUtils.Console.readLine(`${coach}`+UNABLE_TO_EAT, (menu)=>{
			this.#eachCoachUnableToEat[coach] = menu.split(',')
			if(this.#coachNumber === (this.#coachNames.length-1)) this.categoryRandomChoice()
			else{
				this.#coachNumber++;
				this.unableToEat(this.#coachNames[this.#coachNumber])
			}
		})
	}

	categoryRandomChoice(){
		for(let day=0; day<5; day++){
			const category = MissionUtils.Random.pickNumberInRange(1, 5)
			if(this.#categoryRepeatCheck.filter((number)=>category===number).length>2){
				day--;
				continue;
			}
			this.#categoryRepeatCheck.push(category)
		}
		this.insertCategory()
	}

	insertCategory(){
		this.#categoryRepeatCheck.map((number)=>{
			if(number===1) this.#dayCategory.push(JAPANESE_FOOD)
			if(number===2) this.#dayCategory.push(KOREAN_FOOD)
			if(number===3) this.#dayCategory.push(CHINESE_FOOD)
			if(number===4) this.#dayCategory.push(ASIAN_FOOD)
			if(number===5) this.#dayCategory.push(AMERICA_FOOD)
		})
		for(let coach=0; coach<this.#coachNames.length;coach++) this.insertMenu(coach)
		this.printResult()
	}

	insertMenu(coach){
		const array = []
		array.push(this.#coachNames[coach])
		for(let menuNumber=0; menuNumber<this.#dayCategory.length; menuNumber++){
			const menus = SAMPLE[this.#dayCategory[menuNumber]].split(', ')
			for(let number=1; number<=menus.length; number++) this.#menusNumber.push(number)
			const menu =  MissionUtils.Random.shuffle(this.#menusNumber)[0];
			if(array.includes(menus[menu])){
				menuNumber--;
				continue;
			}
			array.push(menus[menu-1])
		}
		this.#result.push(array);
	}

	printResult(){
		MissionUtils.Console.print(RESULT_MENU_RECOMMEND)
		MissionUtils.Console.print(DIVISION_DAY)
		MissionUtils.Console.print(CATEGORY + this.#dayCategory.join(" | ") + CLOSE_BRACKET)
		this.#result.map((result)=>{
			MissionUtils.Console.print(START_BRACKET + result.join(" | ") + CLOSE_BRACKET)
		})
		MissionUtils.Console.print(RECOMMEND_COMPLETE)
	}
}

const app = new App()
app.play()
module.exports = App
