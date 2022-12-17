const { NAME, COACH, MESSAGE } = require("./Constant");
const { Console } = require("@woowacourse/mission-utils");

const Input = {
    requestName(callback) {

    },

    nameValidate(names) { //arr
        if (names.length < COACH.MIN || names.length > COACH.MAX) throw new Error(MESSAGE.ERROR_COACH_COUNT);
        names.forEach(name => {
            if (name.length < NAME.MIN || name.length > NAME.MAX) throw new Error(MESSAGE.ERROR_COACH_COUNT);
        })
    },

    requestNotEat(callback) {

    },

    NotEatValidate(menus) {

    },

}


module.exports = Input;