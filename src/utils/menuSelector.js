const { Random } = require('@woowacourse/mission-utils');
module.exports = (menuNames) => {
  const menuIndexes = menuNames.map((__, index) => index);
  const [selectedMenu, ...others] = Random.shuffle(menuIndexes);
  return menuNames[selectedMenu];
};
