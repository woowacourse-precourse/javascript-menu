class MenuController {
    constructor({inputView, outputView}) {
        this.inputView = inputView;
        this.outputView = outputView;
        this.startMenuProgram();
    }

    startMenuProgram() {
        this.outputView.printStart();
    }
}

module.exports = MenuController;