const { MENU_CONSTANTS } = require('../constants/Setting');
const CategoryRepository = require('../repositorys/CategoryRepository');
const CoachRepository = require('../repositorys/CoachRepository');

const Category = require('../model/Category');
const InputView = require('../view/InputView');

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
  }

  readCrewName() {
    InputView.readCoachName(coachNames => {
    });
  }
}

module.exports = MenuRecommendController;
