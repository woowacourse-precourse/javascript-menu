const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./modules/Constants');
const Validation = require('./modules/Validation');
const CoachDiet = require('./CoachDiet');

const coachDietList = [];

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
        console.log(error);
      }
    });
  },

  readImpossibleFoods(name, idx) {
    Console.readLine(MESSAGE.ASK_COACH_IMPOSSIBLE(name), (foods) => {
      try {
        coachDietList[idx].setImpossibles(foods);
        console.log(coachDietList[idx].getImpossibles());
        if (idx === coachDietList.length - 1) {
          console.log('end');
          return;
        }
        this.readImpossibleFoods(coachDietList[idx + 1].getName(), idx + 1);
      } catch (error) {
        console.log(error);
      }
    });
  },
};

module.exports = InputView;
