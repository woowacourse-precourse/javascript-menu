const ViewController = require("./ViewController");
const MenuController = require("./MenuController");

const GameController = {
    saveMenu(SAMPLE) {
        const menuController = new MenuController(SAMPLE);
        ViewController.setMenuController(menuController);
    },

    startGame() {
        ViewController.printOpening();
    }
};

module.exports = GameController;