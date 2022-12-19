const InputView = require('./InputView');
const OutputView = require('./OutpuView');

class App {
	play() {
		OutputView.print('점심 메뉴 추천을 시작합니다.' + '\n');
		InputView.readCoaches();
	}
}

new App().play();

module.exports = App;
