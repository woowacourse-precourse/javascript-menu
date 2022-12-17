const { Console } = require("@woowacourse/mission-utils")

const OutputView = {
    printNotEat(coach) {
        Console.print(`${coach}(이)가 못 먹는 메뉴를 입력해 주세요.`)
    },

    printStartMessage() {
        Console.pirnt("점심 메뉴 추천을 시작합니다.")
    },

    printFinishMessage() {
        Console.print("추천을 완료했습니다.")
    },

    printResults(results) {
        Console.print(results)
    }
}