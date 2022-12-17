const Category = require("../src/domain/Category");

describe("카테고리 클래스 테스트", () => {
  test("카테고리 객체 생성시 유효하지 않은 카테고리가 포함되어 있거나 개수가 유효하지 않으면 에러를 발생시킨다.", () => {
    const invalidCategories = [
      ["일식", "양식", "우주식", "한식", "중식"],
      ["일식", "한식", "양식"],
    ];

    invalidCategories.forEach((category) => {
      expect(() => {
        new Category(category);
      }).toThrow("[ERROR]");
    });
  });
});
