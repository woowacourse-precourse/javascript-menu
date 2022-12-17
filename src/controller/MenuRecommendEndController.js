const OutputView = require("../view/OutputView");

class MenuRecommendEndController {
    #categorys;
    #coachs;

    constructor(categorys, coachs) {
        this.#coachs = coachs;
        this.#categorys = categorys;
    }

    exetute() {
        OutputView.printEnding(this.#categorys, this.#coachs);
    }
}

module.exports = MenuRecommendEndController;