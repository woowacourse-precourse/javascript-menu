const Console = require('../utils/Console');
const { MESSAGE_QUERY } = require('../constants/messages');

const InputView = {
  readNames(enterNames) {
    Console.readLine(MESSAGE_QUERY.NAMES, enterNames);
  },

  readHateMenus(coach, setHateMenus) {
    Console.readLine(`${coach}${MESSAGE_QUERY.MENUS}`, setHateMenus);
  },

  close() {
    Console.close();
  },
};

module.exports = InputView;
