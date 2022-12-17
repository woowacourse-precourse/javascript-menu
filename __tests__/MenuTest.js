const Menu = require("../src/model/Menu");

describe("메뉴 클래스 테스트", () => {
  test("못 먹는 메뉴가 3개 이상일 경우 예외가 발생한다.", () => {
    expect(() => {
      const menu = new Menu();
      menu.validate("초밥,떡볶이,해산물");
    }).toThrow("[ERROR] 못 먹는 메뉴는 최소 0개, 최대 2개이어야 합니다");
  });
});
