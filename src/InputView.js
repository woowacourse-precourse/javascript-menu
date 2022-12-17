const {Console} = require("@woowacourse/mission-utils")

const InputView = {

    inputCoachName(continueGame) {
        Console.readLine("코치의 이름을 입력해 주세요. (, 로 구분)", (input) => {
            continueGame(input)
        })
    }


}
module.exports = InputView