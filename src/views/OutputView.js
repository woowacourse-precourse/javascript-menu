const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  module: Console,
  print(message) {
    this.module.print(message);
  },
  printResult(menuRecords) {
    console.log(menuRecords);
    this.print("메뉴 추천 결과입니다.");
    let keys = Object.keys(menuRecords);
    const days = menuRecords[keys[0]].map((record) => {
      let day = record.day + "요일 ";
      return day;
    });
    const categories = menuRecords[keys[0]].map((record) => {
      let category = record.category;
      category = `${category + " "}`;
      return category;
    });
    this.print(`[ 구분 | ${days.join("| ")}]`);
    this.print(`[ 카테고리 | ${categories.join("| ")}]`);
    for (let key of keys) {
      const logs = menuRecords[key];
      const menus = logs.map((log) => {
        let menu = log.menu;
        menu = menu + " ";
        return menu;
      });
      this.print(`[ ${key} | ${menus.join("| ")}]`);
    }
    this.print("추천을 완료했습니다.");
  },
};

module.exports = OutputView;
