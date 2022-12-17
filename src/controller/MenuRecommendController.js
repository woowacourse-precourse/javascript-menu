const InputView = require("../view/InputView");

const MenuRecommend = require("../model/MenuRecommend");
const Category = require("../model/Category");
const Coach = require("../model/Coach");

class MenuRecommendController {
    #menuRecommend;
    #categorys;
    #coachs;

    constructor(menu) {
        this.#menuRecommend = new MenuRecommend(menu);
        this.#categorys = [];
        this.#coachs = [];
    }
}

module.exports = MenuRecommendController;