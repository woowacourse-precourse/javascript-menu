const { MENU_CONSTANTS } = require('../constants/Setting');
const CategoryRepository = require('../repositorys/CategoryRepository');
const CoachRepository = require('../repositorys/CoachRepository');

const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class MenuRecommendController {
  #categoryRepository = new CategoryRepository;
  #coachRepository = new CoachRepository;

  constructor() {
    this.#initCategories();
  }

  #initCategories() {
    Object.entries(MENU_CONSTANTS)
      .map(
        ([category, menus]) => this.#categoryRepository.addCategory(category, menus),
      );
  }

  run() {
    this.#readCrewName();
  }

  #readCrewName() {
    InputView.readCoachName(coachNames => {
      coachNames.forEach(name => this.#coachRepository.addCoach(name));

      this.#readNotGoodFoodEachCoachs(this.#coachRepository.getEachCoach());
    });
  }

  #readNotGoodFoodEachCoachs(coach) {
    InputView.readNotGoodFood(coach, foods => {
      coach.setNotGoodFood(foods);
      if (this.#coachRepository.checkNextCoach()) {
        this.#readNotGoodFoodEachCoachs(this.#coachRepository.getEachCoach());
      } else {
        this.#returnRecommendMenu();
      }
    });
  }

  #returnRecommendMenu() {
    
  }
}

module.exports = MenuRecommendController;
