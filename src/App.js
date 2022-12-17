const Controller = require('./controller/controller.js')
class App {	
  play() {
		const controller = new Controller();
    controller.gameStart();
	}

}

const app = new App()
app.play()
module.exports = App
