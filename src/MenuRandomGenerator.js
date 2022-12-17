const { Random } = require('@woowacourse/mission-utils');

const MenuRandomGenerator = {
  MENU_COUNT: 9,

  menuGenerate(menuList) {
    const menuNums = Array.from({ length: 9 }, (v, i) => i);
    const randomIndex = Random.shuffle(menuNums)[0];

    return menuList[randomIndex];
  },
};

module.exports = MenuRandomGenerator;
