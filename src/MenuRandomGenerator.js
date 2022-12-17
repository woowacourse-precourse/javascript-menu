const { Random } = require('@woowacourse/mission-utils');

const MenuRandomGenerator = {
  menuGenerate(menus) {
    const menusNums = Array.from({ length: menus.length }, (v, i) => i);
    return menus[Random.shuffle(menusNums)[0]];
  },
};

module.exports = MenuRandomGenerator;
