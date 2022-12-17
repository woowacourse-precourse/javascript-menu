const { Console } = require("@woowacourse/mission-utils");
const { GuideString } = require("../static/Static");

const InputView = {
  readCoachName(callback) {
    this.getUserInput(
      GuideString.READ_COACH_NAME,
      callback,
      this.readCoachName.bind(this)
    );
  },

  readUnLikeMenu(callback, name) {
    this.getUserInput(
      `\n${name}` + GuideString.READ_UNLIKE_MENU,
      callback,
      this.readUnLikeMenu.bind(this),
      name
    );
  },

  getUserInput(guide, callback, redirect, name) {
    Console.readLine(guide, (input) => {
      try {
        callback(input);
      } catch (error) {
        Console.print(error.message);

        if (name) return redirect(callback, name);
        return redirect(callback);
      }
    });
  },
};

module.exports = InputView;
