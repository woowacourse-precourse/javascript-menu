const Coach = require("../src/domain/Coach");

describe("Coach 클래스 테스트", () => {
  test("메뉴 추가 테스트", () => {
    const coach = new Coach("정균");

    coach.addMenu("삼겹살");
    coach.addMenu("치킨");

    const menus = coach.getMenus();
    expect(menus).toEqual(["삼겹살", "치킨"]);
  });
});
