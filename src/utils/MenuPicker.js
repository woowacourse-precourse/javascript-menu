const { Random } = require('@woowacourse/mission-utils');

const MenuPicker = {
  pickMenu(menus) {
    const menuIndexList = menus.map((_, i) => i + 1);
    const menuList = menus.reduce((acc, cur, i) => {
      acc[i + 1] = cur;
      return acc;
    }, {});
    console.log(menuList);
    const menuIndex = Random.shuffle(menuIndexList)[0];
    return menuList[menuIndex + ''];
  },
};

module.exports = MenuPicker;
