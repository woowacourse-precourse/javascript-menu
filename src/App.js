const Coach = require("./Coach");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");
const { Console, Random } = require('@woowacourse/mission-utils');

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
			this.recommendCategory()
		}
	}

	recommendCategory() {
		for (let i = 0; i < 5; i++) {
			this.#categoriesOfWeek.push(CATEGORIES_MAP[Random.pickNumberInRange(1, 5)])
		}
		OutputView.recommend(this.#categoriesOfWeek)
	}


}


const app = new App();
app.play();

module.exports = App;
