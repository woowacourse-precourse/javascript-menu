const InputView = require("../Views/InputView");
const OutputView = require("../Views/OutputView");

const ViewController = {
    setMenuController(setMenuController) {
        InputView.setMenuController(setMenuController);
    },

    printOpening() {
        OutputView.printOpening();
        this.readCoaches();
    },

    readCoaches() {
        InputView.readCoaches();
    },
};

module.exports = ViewController;