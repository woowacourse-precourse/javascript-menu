const SAMPLE = require("./Constants");
const SAMPLE_MENU = Object.values(SAMPLE).join(',')

const Validation = {
  checkCoachNames(names) {
    if (!names.trim()) throw new Error("아무것도 입력되지 않았습니다.");
    names = names.split(",");
    names = names.map((name) => name.trim())
    if (names.some((name) => name.length < 2 || name.length > 4))
      throw new Error("코치 이름은 최소 2글자, 최대 4글자여야 합니다.");
    if (names.length < 2 || names.length > 5)
      throw new Error("코치는 최소 2명 최대 5명이어야 합니다.");
    if (new Set([...names]).size !== names.length)
      throw new Error("중복된 코치 이름이 있습니다.");
    return names;
  },

  checkAvoidMenu(menu) {
    menu = menu.split(',');
    menu = menu.map((kind) => kind.trim());
    if(menu.some((kind) => !SAMPLE_MENU.includes(kind))) throw new Error('메뉴 목록에 없는 메뉴입니다.')
    if(menu.length > 2) throw new Error('못 먹는 메뉴는 최소 0개에서 최대 2개여야 합니다.')
    return menu;
  }
};

module.exports = Validation;
