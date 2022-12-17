const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./modules/Constants');
const Validation = require('./modules/Validation');
const CoachDiet = require('./CoachDiet');
const { RandomCategoryGenerator, CategoriesGenerator } = require('./RandomGenerator');
const OutputView = require('./OutputView');

const coachDietList = [];
let categoryListOfWeek = [];

const InputView = {
  readCoachesName() {
    Console.readLine(MESSAGE.ASK_COACH_NAME, (names) => {
      try {
        Validation.validateGroup(names);
        const coaches = names.split(',');
        coaches.forEach((name) => {
          Validation.validateName(name);
          const coachDiet = new CoachDiet(name);
          coachDietList.push(coachDiet);
        });
        this.readImpossibleFoods(coachDietList[0].getName(), 0);
      } catch (error) {
        OutputView.printError(error);
        this.readCoachesName();
      }
    });
  },

  readImpossibleFoods(name, idx) {
    Console.readLine(MESSAGE.ASK_COACH_IMPOSSIBLE(name), (impossibles) => {
      try {
        const impossibleList = impossibles.split(',');
        Validation.validateImpossibleSize(impossibleList);
        coachDietList[idx].setImpossibles(impossibleList);
        if (idx === coachDietList.length - 1) {
          makeRandomCategoryList();
          OutputView.printResult(categoryListOfWeek, coachDietList);
          return;
        }
        this.readImpossibleFoods(coachDietList[idx + 1].getName(), idx + 1);
      } catch (error) {
        OutputView.printError(error);
        this.readImpossibleFoods();
      }
    });
  },
};

const makeRandomCategoryList = () => {
  categoryListOfWeek = CategoriesGenerator();
  makeRecommendMenuList();
};

const makeRecommendMenuList = () => {
  for (const category of categoryListOfWeek) {
    for (const coach of coachDietList) {
      coach.recommendMenu(category);
    }
  }
};

module.exports = InputView;
