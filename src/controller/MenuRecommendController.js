const Category = require("../model/Category");

const MenuRecommendEndController = require("./MenuRecommendEndController");

class MenuRecommendController {
    #menuRecommend;
    #coachs;
    #categorys;

    constructor(menuRecommend, coachs) {
        this.#menuRecommend = menuRecommend;
        this.#coachs = coachs;
        this.#categorys = new Category();
    }

    exetute() {
        this.recommendRandomCategorys();

        const controller = new MenuRecommendEndController(this.#categorys, this.#coachs);
        controller.exetute();
    }

    recommendRandomCategorys() {
        let random_category = this.#menuRecommend.recommendCategory();
       
        while(!this.#categorys.addRecommendCategory(random_category)) {
            random_category = this.#menuRecommend.recommendCategory();
        }
        this.recommendRandomFoods(random_category);
    }
    recommendRandomFoods(category) {
        this.#coachs.forEach(coach => {
            let random_food = this.#menuRecommend.recommendFood(category);
            while(!coach.addRecommendFood(random_food)) {
                random_food = this.#menuRecommend.recommendFood(category);
            }
        });
    }
}

module.exports = MenuRecommendController;