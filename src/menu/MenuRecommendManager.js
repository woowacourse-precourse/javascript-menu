const OUTPUT_MESSAGES = require("../utils/constant/OutputMessages");

class MenuRecommendManager {
  #inputView;
  #outputView;
  #menuRecommend;
  constructor(configuration) {
    const { inputView, outputView, menuRecommend } = configuration;
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#menuRecommend = menuRecommend;
  }
  start() {
    this.#outputView.print(OUTPUT_MESSAGES.startMessage);
    this.onReadCoachesName();
  }
  onReadCoachesName() {
    this.#inputView.readCoachesName((coaches) => {
      const coachesNames = coaches.split(",");
      console.log(coachesNames);
    });
  }
  onReadHateFood() {}
}

module.exports = MenuRecommendManager;
