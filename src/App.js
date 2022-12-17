const Coach = require("./Coach");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");
const { Console } = require('@woowacourse/mission-utils');


class App {
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
				console.log(this.index)
				this.#coaches[this.index].setDisabledFood(input);
	
				this.index += 1;
			
				this.survey();
			});
		} else if (this.index === this.#coaches.length) {
			console.log("end")
		}
	}

	// requestDisabledFoods(coach) {
	// 	InputView.readDisabledFood(coach.getName(), (response) => {
	// 		coach.setDisabledFood(response);
	// 	})
	// }


	

}


const app = new App();
app.play();

module.exports = App;
