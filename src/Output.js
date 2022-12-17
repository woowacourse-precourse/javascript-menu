const { NAME, COACH, MESSAGE } = require("./Constant");
const { Console } = require("@woowacourse/mission-utils");

const Output = {
    start() {
        Console.print(MESSAGE.START);
    },

    endHead(category) {
        Console.print(MESSAGE.END_FIRST);
        Console.print(`[ 카테고리 | ${category.join(" | ")} ]`)
    },

    endBody([coachName, menu]) {
        menu.unshift(coachName);
        const printMenu = menu.join(" | ")
        Console.print(`[ ${printMenu} ]`)
    },

    endtail() {
        Console.print(MESSAGE.END_SECOND);
        Console.close();
    },

    Error(message) {
        Console.print(message);
    },
}

module.exports = Output;