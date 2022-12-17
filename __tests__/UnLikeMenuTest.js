const RecommendMenu = require("../src/domain/RecommendMenu");

describe("못 먹는 메뉴 클래스 테스트", () => {
  test("못 먹는 메뉴 객체 생성시 유효하지 않은 메뉴가 포함되어 있거나 개수가 유효하지 않으면 에러를 발생시킨다.", () => {
    const invalidMenus = [
      ["우주식", "김밥"],
      ["우주식", "김밥", "김치찌개"],
    ];

    invalidMenus.forEach((menus) => {
      expect(() => {
        new RecommendMenu(menus);
      }).toThrow("[ERROR]");
    });
  });
});
