const { MENU_CONSTANTS } = require('../constants/Setting');
const CategoryRepository = require('../repositorys/CategoryRepository');
const CoachRepository = require('../repositorys/CoachRepository');
const RecommendWeeklyMenu = require('../model/RecommendWeeklyMenu');

const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class MenuRecommendController {
  #categoryRepository = new CategoryRepository;
  #coachRepository = new CoachRepository;
  #recommendWeeklyMenu = new RecommendWeeklyMenu;

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

      this.#readNotGoodMenuEachCoachs(this.#coachRepository.getEachCoach());
    });
  }

  #readNotGoodMenuEachCoachs(coach) {
    InputView.readNotGoodMenu(coach, foods => {
      coach.setNotGoodMenu(foods);
      if (this.#coachRepository.checkNextCoach()) {
        this.#readNotGoodMenuEachCoachs(this.#coachRepository.getEachCoach());
      } else {
        this.#returnRecommendMenu();
      }
    });
  }

  #returnRecommendMenu() {
    this.#setRecommendCategory();
    this.#setRecommendMenu();

    OutputView.printMenu();
  }

  #setRecommendCategory() {
    while (this.#recommendWeeklyMenu.countWeeklyCategory() < 5) {
      const randomCategory = this.#categoryRepository.getRandomCategory();
      this.#recommendWeeklyMenu.addCategory(randomCategory);
    }
  }

  #setRecommendMenu() {
    this.#recommendWeeklyMenu.getWeeklyCategory().forEach(category => {

    });
  }
}

module.exports = MenuRecommendController;
