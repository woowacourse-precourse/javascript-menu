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
    OutputView.printStart();
    this.#initCategories();
  }

  #initCategories() {
    Object.entries(MENU_CONSTANTS)
      .map(
        ([category, menus]) => this.#categoryRepository.addCategory(category, menus),
      );
  }

  run() {
    this.#readCoachName();
  }

  #readCoachName() {
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
    this.#coachRepository.initCount();
    this.#setRecommendCategory();
    this.#setCouchWeeklyMenu();
    OutputView.printMenu(this.#coachRepository, this.#recommendWeeklyMenu);
    OutputView.printQuit();
  }

  #setRecommendCategory() {
    while (this.#recommendWeeklyMenu.countWeeklyCategory() < 5) {
      const randomCategory = this.#categoryRepository.getRandomCategory();
      this.#recommendWeeklyMenu.addCategory(randomCategory);
    }
  }

  #setRecommendMenu(NotGoodMenu) {
    const weeklyMenu = [];
    const weeklyCategory = this.#recommendWeeklyMenu.getWeeklyCategory();
    let index = 0;
    while (weeklyMenu.length < 5) {
      const recommendMenu = this.#categoryRepository
        .getRandomMenuByCategory(weeklyCategory[index]);
      if (!NotGoodMenu.includes(recommendMenu)) {
        weeklyMenu.push(recommendMenu);
        index += 1;
      }
    }
    return weeklyMenu;
  }

  #setCouchWeeklyMenu() {
    this.#coachRepository.getCoachList().forEach((coach, name) => {
      const weeklyRecommendMenu = this.#setRecommendMenu(coach.getNotGoodMenu());
      coach.setWeeklyMenu(weeklyRecommendMenu);
    });
  }
}

module.exports = MenuRecommendController;
