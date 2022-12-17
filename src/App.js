const InputView = require("./InputView");
const OutputView = require("./OutputView");
const  {Console} = require("@woowacourse/mission-utils");
const Coachs = require("./Coachs");
const MenuRecommend = require("./MenuRecommend");
const {Random} = require("@woowacourse/mission-utils")


const SAMPLE = {
	일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
	한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
	중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
	아시안:
		'팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
	양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
}

const MENUS = {
	일식: ["규동", "우동", "미소시루", "스시", "가츠동", "오니기리", "하이라이스", "라멘", "오코노미야끼"],
	한식: ["김밥", "김치찌개", "쌈밥", "된장찌개", "비빔밥", "칼국수", "불고기", "떡볶이", "제육볶음"],
	중식: ["깐풍기", "볶음면", "동파육", "짜장면", "짬뽕", "마파두부", "탕수육", "토마토 달걀볶음", "고추잡채"],
	아시안:
		["팟타이", "카오 팟", "나시고렝", "파인애플 볶음밥", "쌀국수", "똠얌꿍", "반미", "월남쌈", "분짜"],
	양식: ["라자냐", "그라탱", "뇨끼", "끼슈", "프렌치 토스트", "바게트", "스파게티", "피자", "파니니"],
};



class App {
	play() {
		this.startGame()
	 }
	
	startGame() {
		OutputView.printStartMessage()
		InputView.inputCoachName((input) => {
			const coachsArr = input.split(",")
			const coachs = new Coachs(coachsArr)
			let coachIndex = 0
			this.getCoachNotEat(coachs, coachIndex)
		})
	}

	getCoachNotEat(coachs, coachIndex) {
		Console.readLine(`${coachs.getCoachs()[coachIndex]}(이)가 못 먹는 메뉴를 입력해 주세요.`, (input) => {
			coachs.setCoachNotEat(coachIndex, input.split(","))
			
			if (coachIndex < coachs.getCoachs().length - 1) {
				this.getCoachNotEat(coachs, coachIndex + 1)
			} else {
				const menu = new MenuRecommend()
				for (let i = 0; i < 5; i++) {
					this.recommendMenu(menu,coachs,i)
				}
				this.getResults(menu, coachs)
			}
		})
	}

	recommendMenu(menu,coachs,i) {
		menu.setCategory(i)
		const currentCategory = menu.getCategory(i)
		this.getRandomMenu(coachs, currentCategory)
	}
	
	getRandomMenu(coachs,currentCategory) {
		coachs.getCoachs().forEach((coach, index) => {
			this.checkMenu(coachs, coach, currentCategory, index)
		});
	}

	checkMenu(coachs, coach, currentCategory, index) {
		let menuIndex = Random.shuffle(SAMPLE[currentCategory])[0] - 1
		if (coachs.isNotEatFood(index, MENUS[currentCategory][menuIndex]) || coachs.isNotContained(index, MENUS[currentCategory][menuIndex])) {
			this.checkMenu(coachs,currentCategory,currentCategory,index)
		} else {
			coachs.addCoachMenu(coach,MENUS[currentCategory][menuIndex])
		}
	}

	getResults(menu, coachs) {
		OutputView.printResultTitle()
		OutputView.printResults(this.createCategoryMessages(menu.getCategoryArray()), this.createMenuMessages(coachs.getCoachMenus()))
		OutputView.printFinishMessage()

	}

	createCategoryMessages(categorys) {
		let message = "[ 카테고리 |"
		categorys.forEach((item) => {
			message += ` ${item} |`
		});
		message = message.slice(0, message.length - 1)
		message += "]"
		return message
	}

	createMenuMessages(menus) {
		const result = []
		for (let key in menus) {
			const coach = menus[key]
			const eachMenu = `[ ${key} | ${coach[0]} | ${coach[1]} | ${coach[2]} | ${coach[3]} | ${coach[4]} ]`
			result.push(eachMenu)
		} 
		return result
	}

}

const app = new App()
app.play()

module.exports = App;
