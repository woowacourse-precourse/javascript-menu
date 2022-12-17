const { NAME, COACH, MESSAGE } = require("./Constant");
const Output = require("./Output");
const { Console } = require("@woowacourse/mission-utils");

const Input = {
    requestName(callback) {
        Console.readLine(MESSAGE.INPUT_COACH_NAME, (names) => {
            try {
                this.nameValidate(names.split(","))
                callback(names.split(","));
            } catch (error) {
                Output.Error(error.message);
                this.requestName(callback);
            }
        })
    },

    nameValidate(names) { //arr
        if (names.length < COACH.MIN || names.length > COACH.MAX) throw new Error(MESSAGE.ERROR_COACH_COUNT);
        names.forEach(name => {
            if (name.length < NAME.MIN || name.length > NAME.MAX) throw new Error(MESSAGE.ERROR_COACH_COUNT);
        })
    },

    requestNotEat(callback) {
        Console.readLine(MESSAGE.INPUT_NOTEAT, () => {
            try {

            } catch (error) {
                Output.Error(error.message);
            }
        })
    },

    NotEatValidate(menus) {
        if (menus.length > COACH.NOTEAT_MAX) throw new Error(MESSAGE.ERROR_NOTEAT);
    },

}


module.exports = Input;