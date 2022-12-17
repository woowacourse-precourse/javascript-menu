const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./modules/Constants');
const Validation = require('./modules/Validation');
const CoachDiet = require('./CoachDiet');
const { RandomCategoryGenerator, CategoriesGenerator } = require('./RandomGenerator');
const OutputView = require('./OutputView');

const coachDietList = [];
const categoryListOfWeek = [];

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
    Console.readLine(MESSAGE.ASK_COACH_IMPOSSIBLE(name), (foods) => {
      try {
        coachDietList[idx].setImpossibles(foods);
        if (idx === coachDietList.length - 1) {
          const categoryListOfWeek = CategoriesGenerator();
          for (const category of categoryListOfWeek) {
            for (const coach of coachDietList) {
              coach.recommendMenu(category);
            }
          }
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

module.exports = InputView;
