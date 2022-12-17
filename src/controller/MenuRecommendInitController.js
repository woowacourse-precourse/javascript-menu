const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");
const MenuRecommend = require("../model/MenuRecommend");
const Coach = require("../model/Coach");

const MenuRecommendController = require("./MenuRecommendController");

class MenuRecommendInitController {
    #menuRecommend;
    #coachs;

    constructor(menu) {
        this.#menuRecommend = new MenuRecommend(menu);
        this.#coachs = [];
    }

    exetute() {
        OutputView.printStart();
        this.createCoachs(() => {
            const controller = new MenuRecommendController(this.#menuRecommend, this.#coachs);
            controller.exetute();
        });
    }
    createCoachs(callback) {
        InputView.readCoachsName((result) => {
            this.readHateFoodByName(0, result, callback);
        });
    }
    readHateFoodByName(idx, names, callback) {
        if(idx == names.length)  {
            callback();
            return;
        }
        InputView.readHateFood(names[idx], (result) => {
            this.#coachs.push(new Coach(names[idx], result));
            this.readHateFoodByName(idx+1, names, callback);
        });
    }
}

module.exports = MenuRecommendInitController;