const InputView = require("../Views/InputView");
const OutputView = require("../Views/OutputView");

const ViewController = {
    printOpening() {
        OutputView.printOpening();
        this.readCoaches();
    },

    readCoaches() {
        InputView.readCoaches();
    },
};

module.exports = ViewController;