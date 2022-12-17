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
        const arr = ["한식", "중식", "양식", "일식", "아시안"]
        expect(arr.includes(val)).toBeTruthy();
    })

    test("카테고리별 음식 추출", () => {
        const val = Random.makeMenu("한식")
        const arr = ["김밥", "김치찌개", "쌈밥", "된장찌개", "비빔밥", "칼국수", "불고기", "떡볶이", "제육볶음"]
        expect(arr.includes(val)).toBeTruthy();
    })
})