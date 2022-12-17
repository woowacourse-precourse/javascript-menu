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
            for(let i = 0; i < result.length-1; i++) {
                this.readHateFoodByName(result[i]);
            }
            this.readHateFoodByName(result[result.length-1], callback);
        });
    }
    readHateFoodByName(name, callback) {
        InputView.readHateFood(name, (result) => {
            this.#coachs.push(new Coach(name, result));
            if(callback != null) callback();
        });
    }
}

module.exports = MenuRecommendInitController;