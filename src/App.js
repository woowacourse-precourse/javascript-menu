const CategoryRecorder = require("./menu/CategoryRecorder");
const Coach = require("./menu/Coach");
const MenuList = require("./menu/MenuList");
const MenuRecommend = require("./menu/MenuRecommend");
const MenuRecommendManager = require("./menu/MenuRecommendManager");
const MenuRecommendRecorder = require("./menu/MenuRecommendRecorder");
const InputView = require("./views/InputView");
const OutputView = require("./views/OutputView");

class App {
  play() {
    const menuRecommendConfiguration = {
      categoryRecorder: new CategoryRecorder(),
      coachConstructor: Coach,
      menuList: new MenuList(),
      menuRecommendRecorder: new MenuRecommendRecorder(),
    };
    const menuRecommend = new MenuRecommend(menuRecommendConfiguration);
    const menuRecommendManagerConfiguration = {
      inputView: InputView,
      outputView: OutputView,
      menuRecommend,
    };
    const menuRecommendManager = new MenuRecommendManager(
      menuRecommendManagerConfiguration
    );
    menuRecommendManager.start();
  }
}

new App().play();

module.exports = App;
