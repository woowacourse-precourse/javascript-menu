const { SAMPLE, categoryKey } = require("./utils/constant");
const { trim, splitString } = require("./utils/UtilityFunctions");
const { Random } = require("@woowacourse/mission-utils");

const getRandomMenues = function getCoachesRandomoMenues(categories, notEat) {
  const coachMenus = [];
  for (const category of categories) {
    const menus = splitString(SAMPLE[categoryKey[category]], ", ").map(trim);
    const numMenus = Array.from({ length: menus.length }, (_, idx) => idx + 1);
    const menu = getRandomMenu({ coachMenus, menus, numMenus, notEat });
    coachMenus.push(menu);
  }
  return coachMenus;
};

const getRandomMenu = ({ coachMenus, menus, numMenus, notEat }) => {
  while (true) {
    const menuIdx = Random.shuffle([...numMenus])[0]; // 이제 같은 음식이 안나오게끔 해야 함.
    const menu = menus[menuIdx - 1];
    if (coachMenus.includes(menu) || notEat.includes(menu)) continue;
    return menu;
  }
};

module.exports = {
  getRandomMenues,
};
