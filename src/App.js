const Coach = require("./Coach");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");
const { Console, Random } = require('@woowacourse/mission-utils');

const SAMPLE = {
	일식: '규동,우동,미소시루,스시,가츠동,오니기리,하이라이스,라멘,오코노미야끼',
	한식: '김밥,김치찌개,쌈밥,된장찌개,비빔밥,칼국수,불고기,떡볶이,제육볶음',
	중식: '깐풍기,볶음면,동파육,짜장면,짬뽕,마파두부,탕수육,토마토 달걀볶음,고추잡채',
	아시안: '팟타이,카오 팟,나시고렝,파인애플 볶음밥,쌀국수,똠얌꿍,반미,월남쌈,분짜',
	양식: '라자냐,그라탱,뇨끼,끼슈,프렌치 토스트,바게트,스파게티,피자,파니니',
};

const CATEGORIES_MAP = {
	"1": {
		name: "일식",
		count: 0
	},
	"2": {
		name: "한식",
		count: 0
	},
	"3": {
		name: "중식",
		count: 0
	},
	"4": {
		name: "아시안",
		count: 0
	},
	"5": {
		name: "양식",
		count: 0
	},
}

class App {
	#categoriesOfWeek = [];
  #coaches = [];
	index = 0;

  play() {
		OutputView.start();
		this.requestCoach();
	}

	requestCoach() {
		InputView.readCoach(this.initCoach.bind(this));
	}

	initCoach(response) {
		const coachNames = response.split(",")

		if (!(coachNames.length >= 2 && coachNames.length <= 5)) {
      throw new Error("[ERROR] 코치는 최소 2명, 최대 5명까지 식사를 함께 한다.")
		} 

		coachNames.map((coachName) => {
			const coach = new Coach(coachName);
      this.#coaches.push(coach);
		})
		this.requestDisableFoods()
	}

	requestDisableFoods() {
		if(this.index !== this.#coaches.length) {
			InputView.readDisabledFood(this.#coaches[this.index].getName(), this.survey.bind(this))
		} else if (this.index === this.#coaches.length) {
			// 설문이 끝나면
			this.recommend();
			OutputView.end();
			Console.close();
		}
	}

	survey(response) {
		this.#coaches[this.index].setDisabledFood(response);
		this.index += 1;
		this.requestDisableFoods();
	}

	recommend() {
		// 월화수목금
		for (let day = 0; day < 5; day++) {
			// 카테고리
			const categoryOfDay = this.pickCategory()
			this.#categoriesOfWeek.push(categoryOfDay);

			// 메뉴
			const menus = SAMPLE[categoryOfDay].split(",")
			this.#coaches.map((coach) => {
				coach.setDayFood(this.pickFood(coach, menus))
			})
		}

		OutputView.result(this.#categoriesOfWeek, this.#coaches);
		this.#coaches.map((coach) => {
			OutputView.food(coach.getName(), coach.getDayFood().join(" | "))
		})
	}

	pickCategory() {
		const randomNumber = Random.pickNumberInRange(1, 5)
		CATEGORIES_MAP[randomNumber].count += 1;

		if (CATEGORIES_MAP[randomNumber].count > 2) {
			this.pickCategory();
		}

		return CATEGORIES_MAP[randomNumber].name

	}

	pickFood(coach, menus) {
		const randomFood = menus[Random.shuffle([0,1,2,3,4,5,6,7])[0]]

		if(coach.getDayFood().includes(randomFood) || coach.getDisabledFood().includes(randomFood)){
			// 중복된음식이 있거나, 못먹는음식이있으면
			this.pickFood(coach, menus)
		}

		return randomFood;
	}
}

module.exports = App;
