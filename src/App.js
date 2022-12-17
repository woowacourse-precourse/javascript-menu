const Coach = require("./Coach");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");
const { Console, Random } = require('@woowacourse/mission-utils');

const SAMPLE = {
	일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
	한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
	중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
	아시안:
		'팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
	양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};


const CATEGORIES_MAP = {
	"1": "일식",
	"2": "한식",
	"3": "중식",
	"4": "아시안",
	"5": "양식",
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

		coachNames.map((coachName) => {
			const coach = new Coach(coachName);

      if(this.#coaches.includes(coach)) {
        throw new Error("error");
      }

      this.#coaches.push(coach);
		})
		this.survey()
	}

	survey() {
		if(this.index !== this.#coaches.length) {
			Console.readLine(`${this.#coaches[this.index].getName()}(이)가 못 먹는 메뉴를 입력해 주세요.\n`, (input) => {
				this.#coaches[this.index].setDisabledFood(input);
				this.index += 1;
				this.survey();
			});
		} else if (this.index === this.#coaches.length) {
			this.recommend();
			OutputView.end();
			Console.close();
		}
	}

	recommend() {
		// 월화수목금
		for (let day = 0; day < 5; day++) {
			// 카테고리
			const categoryOfDay = CATEGORIES_MAP[Random.pickNumberInRange(1, 5)]
			this.#categoriesOfWeek.push(categoryOfDay);

			// 메뉴
			const menus = SAMPLE[categoryOfDay].split(",")
			const menusIndex = []

			for (let i = 0; i < menus.length; i++) {
				menusIndex.push(i);
			}

			this.#coaches.map((coach) => {
				// console.log(menus[Random.shuffle(menusIndex)[0]])

				coach.setDayFood(menus[Random.shuffle(menusIndex)[0]])
			})
			
			

		}
		OutputView.result(this.#categoriesOfWeek, this.#coaches);
		OutputView.food(this.#coaches[0].getName(), this.#coaches[0].getDayFood().join(" | "))

	}


}


const app = new App();
app.play();

module.exports = App;
