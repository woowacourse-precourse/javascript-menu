const Input = require("./Input");

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
})
