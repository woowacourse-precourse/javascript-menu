const { MESSAGE } = require('../data/Constants');
const IO = require('../utils/IO');

const OutputView = {
  printStart() {
    IO.output(MESSAGE.START);
  },
  printResult(categories, coaches) {
    IO.output(`\n${MESSAGE.RESULT}`);
    IO.output(MESSAGE.DIVISION);
    const categoryString = categories.join(MESSAGE.MENU_DIVIDE);
    IO.output(
      MESSAGE.MENU_START +
        MESSAGE.CATEGORY +
        MESSAGE.MENU_DIVIDE +
        categoryString +
        MESSAGE.MENU_END,
    );
    coaches.forEach((coach) => {
      const menus = coach.getRecommended().join(MESSAGE.MENU_DIVIDE);
      IO.output(
        MESSAGE.MENU_START +
          coach.getName() +
          MESSAGE.MENU_DIVIDE +
          menus +
          MESSAGE.MENU_END,
      );
    });
    IO.output('');
    IO.output(MESSAGE.END);
  },
};
module.exports = OutputView;
