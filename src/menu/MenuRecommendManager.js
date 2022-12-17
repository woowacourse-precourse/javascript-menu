const OUTPUT_MESSAGES = require("../utils/constant/OutputMessages");

class MenuRecommendManager {
  #inputView;
  #outputView;
  #menuRecommend;
  #counter = 0;
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
      this.#menuRecommend.registerCoaches(coachesNames);

      this.onReadHateFood(coachesNames[this.#counter++], coachesNames);
    });
  }
  onReadHateFood(name, coachesNames) {
    this.#inputView.readHateFood(name, (food) => {
      console.log(food);
      if (this.#counter !== coachesNames.length)
        this.onReadHateFood(coachesNames[this.#counter++], coachesNames);
    });
  }
}

module.exports = MenuRecommendManager;
