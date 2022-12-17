const { SAMPLE } = require("../constants");
const { makeArray } = require("./ArrayMaker");

const MenuMaker = {
  getMenu() {
    let menu = {};
    const keyArray = Object.keys(SAMPLE);
    keyArray.forEach((key) => (menu[key] = makeArray(SAMPLE[key])));
    return menu;
  },
};

module.exports = MenuMaker;
