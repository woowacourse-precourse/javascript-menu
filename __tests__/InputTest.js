const App = require("../src/App");
const { checkCoach, checkFood } = require("../src/Validate");
const { InputView } = require("../src/View/InputView");

describe("입력 테스트", () => {
  const app = new App();

  test("코치 이름 길이가 2 ~ 4가 아닌 경우", () => {
    app.getCoachesNameCallBack = jest.fn();
    const input = "가나다라마,바사아자";
    const names = input.split(",").map((name) => name.trim());

    expect(checkCoach(names, app.getCoachesNameCallBack)).toBe(false);
  });

  test("코치를 2 ~ 5명 사이로 입력하지 않은 경우", () => {
    app.getCoachesNameCallBack = jest.fn();
    const input = "가나,다라,마바,사아,자차,타파,하";
    const names = input.split(",").map((name) => name.trim());

    expect(checkCoach(names, app.getCoachesNameCallBack)).toBe(false);
  });

  test("못먹는 메뉴를 2개 이상 입력한 경우", () => {
    app.notEatMenusCallback = jest.fn();
    const coaches = new Map();
    coaches.set("가나", { menus: [], canNotEat: [] });
    const foods = ["벌레", "칼국수", "마라탕"];

    expect(checkFood(foods, app.notEatMenusCallback)).toBe(false);
  });
});
