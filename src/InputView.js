const {Console} = require("@woowacourse/mission-utils")
const Validations = require("./Validations")

const InputView = {

    inputCoachName(continueGame) {
        Console.readLine("코치의 이름을 입력해 주세요. (, 로 구분)\n", (input) => {
            try {
                Validations.validateLength(input.split(","))
                continueGame(input)
            } catch (e) {
                Console.print(e)
            }
        })
    }


}
module.exports = InputView