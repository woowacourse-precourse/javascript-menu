const { Random } = require("@woowacourse/mission-utils");

const recommandMenu = (menus) => {
  const menu = Random.shuffle(menus)[0];
  return menu;
};

module.exports = recommandMenu;
