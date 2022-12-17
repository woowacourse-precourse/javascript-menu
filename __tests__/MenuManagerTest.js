const Coach = require("../src/domain/Coach");
const MenuManager = require("../src/domain/MenuManager");

describe("MenuManager 클래스 테스트", () => {
  test("코치 가져오기 테스트", () => {
    const coaches = [new Coach("정균"), new Coach("정수"), new Coach("정훈")];
    const menuManager = new MenuManager(coaches);

    const firstCoach = menuManager.getFirstCoach();
    const secondCoach = menuManager.getNextCoach("정균");
    const thirdCoach = menuManager.getNextCoach("정수");
    const forthCoach = menuManager.getNextCoach("정훈");

    expect(firstCoach.getName()).toEqual("정균");
    expect(secondCoach.getName()).toEqual("정수");
    expect(thirdCoach.getName()).toEqual("정훈");
    expect(forthCoach).toBeFalsy();
  });
});
