const MissionUtils = require('@woowacourse/mission-utils');
const Exception = require('./Exception');
const MenuGame = require('./MenuGame');
const { CONSOLE_MESSAGE } = require('./utils/constants');

const InputView = {
  game: new MenuGame(),

  readCoaches() {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.coachInput, (input) => {
      try {
        Exception.checkCoachesInput(input);
      } catch (error) {
        return this.readCoaches();
      }

      this.game.coaches = input.split(',');
      this.readInedibleMenus(this.game.coaches, 0);
    });
  },

  readInedibleMenus(coaches, index) {
    if (index === coaches.length) {
      this.game.setWeeklyMenu();
    }

    MissionUtils.Console.readLine(CONSOLE_MESSAGE.inedibleMenuInput(coaches[index]), (input) => {
      try {
        Exception.checkInedibleMenusInput(input);
      } catch (error) {
        return this.readInedibleMenus(coaches, index);
      }

      this.game.inedibleMenus[coaches[index]] = input.split('');
      this.readInedibleMenus(coaches, index + 1);
    });
  },
};

module.exports = InputView;
