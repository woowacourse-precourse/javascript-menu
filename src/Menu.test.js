const Input = require("./Input");
const Random = require("./Random")

describe("Input_test", () => {
    test("nameValidate_코치 인수가 많을 때", () => {
        expect(() => {
            Input.nameValidate(["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg"]);
        }).toThrow("[ERROR]")
    })

    test("nameValidate_코치 인수가 적을 때", () => {
        expect(() => {
            Input.nameValidate(["aaa"]);
        }).toThrow("[ERROR]")
    })

    test("nameValidate_코치 이름길이가 많을 때", () => {
        expect(() => {
            Input.nameValidate(["a", "bbb"]);
        }).toThrow("[ERROR]")
    })

    test("nameValidate_코치 숫자가 적을 때", () => {
        expect(() => {
            Input.nameValidate(["aaa", "bbbbb"]);
        }).toThrow("[ERROR]")
    })

    test("NotEatValidate_못먹는 음식 숫자가 많을 때", () => {
        expect(() => {
            Input.NotEatValidate(["aaa", "bbbb", "ccc"]);
        }).toThrow("[ERROR]")
    })
})

describe("Random_make_test", () => {
    test("카테고리 추출", () => {
        const val = Random.makeCategory()
        expect(val).toBeTruthy();
    })
})