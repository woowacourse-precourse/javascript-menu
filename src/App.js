const Coach = require("./Coach");
const Service = require("./Service");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");


class App {
  play() {
		OutputView.start();
		this.requestCoach();
	}

	requestCoach() {
		InputView.readCoach(this.initCoach.bind(this));
	}

	initCoach(response) {
		const coachNames = response.split(",")
		const service = new Service(coachNames);
		console.log(service.getCoaches())
	}

}


const app = new App();
app.play();

module.exports = App;
