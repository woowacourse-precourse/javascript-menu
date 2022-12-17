const { readCoachNames } = require("./InputView");
const { makeRandomCategory } = require("./util");

class MenuController {

  readCoachNamesCallback() {
    readCoachNames((names) => {
      
    })
  }
}

module.exports = MenuController;