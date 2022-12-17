const { Random } = require('@woowacourse/mission-utils');

const MenuPicker = {
  pickMenu(menus) {
    const menuIndexList = menus.map((_, i) => i);
    const menuIndex = Random.shuffle(menuIndexList)[0];
    return menus[menuIndex];
  },
};

module.exports = MenuPicker;
