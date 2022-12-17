const MenuController = require('./Controller/MenuController');

class App {
	constructor() {
		this.MenuController = new MenuController();
	};

  play() {
		this.MenuController.inputSize();
	};
};

const app = new App();
app.play();

module.exports = App;
