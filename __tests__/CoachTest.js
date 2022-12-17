const Coach = require("../src/domain/Coach");

describe("Coach 클래스 테스트", () => {
  test("메뉴 추가 테스트", () => {
    const coach = new Coach("정균");

    coach.addMenu("삼겹살");
    coach.addMenu("치킨");

    const menus = coach.getMenus();
    expect(menus).toEqual(["삼겹살", "치킨"]);
  });

  test("못먹는 메뉴 추가 테스트", () => {
    const coach = new Coach("정균");

    coach.addBannedMenu(["삼겹살", "치킨"]);

    const notBannedMenuResult = coach.addMenu("떡볶이");
    const bannedMenuResult = coach.addMenu("치킨");

    expect(notBannedMenuResult).toBeTruthy();
    expect(bannedMenuResult).toBeFalsy();
  });
});
