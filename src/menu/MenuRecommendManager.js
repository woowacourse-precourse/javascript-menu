const OUTPUT_MESSAGES = require("../utils/constant/OutputMessages");
const Validator = require("../utils/validator");

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
      try {
        Validator.isRightCoachName(2, 4, coachesNames);
        Validator.isRightCoachesNumber(2, 5, coachesNames);
      } catch (error) {
        this.#outputView.print(error.message);
        this.onReadCoachesName();
        return;
      }
      this.#menuRecommend.registerCoaches(coachesNames);

      this.onReadHateFood(coachesNames[this.#counter], coachesNames);
    });
  }
  onReadHateFood(name, coachesNames) {
    this.#inputView.readHateFood(name, (food) => {
      this.#menuRecommend.registerHateFoods(name, food);
      this.#counter += 1;
      if (this.#counter !== coachesNames.length) {
        this.onReadHateFood(coachesNames[this.#counter], coachesNames);
        return;
      }
      if (this.#counter === coachesNames.length) {
        const records = this.#menuRecommend.recommendMenus(5);
        this.onPrintResult(records);
      }
    });
  }

  onPrintResult(records) {
    this.#outputView.printResult(records);
    this.#inputView.onEnd();
  }
}

module.exports = MenuRecommendManager;
