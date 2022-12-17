const { Console } = require("@woowacourse/mission-utils")

const OutputView = {
    printNotEat(coach) {
        Console.print(`${coach}(이)가 못 먹는 메뉴를 입력해 주세요.`)
    },

    printStartMessage() {
        Console.print("점심 메뉴 추천을 시작합니다.")
    },

    printFinishMessage() {
        Console.print("추천을 완료했습니다.")
    },

    printResults(categorys, menus) {
        Console.print(categorys)
        menus.forEach(menu => {
            Console.print(menu)
        });

    },

    printResultTitle() {
        Console.print("메뉴 추천 결과입니다.")
        Console.print("[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]")
    }
}

module.exports = OutputView