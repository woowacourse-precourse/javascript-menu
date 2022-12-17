const Category = require("../model/Category");

const MenuRecommendEndController = require("./controller/MenuRecommendEndController");

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
        RecommendRandomCategorys();

        const controller = new MenuRecommendEndController(this.#categorys, this.#coachs);
        controller.exetute();
    }

    RecommendRandomCategorys() {
        let random_category = this.#menuRecommend.recommendCategory();
       
        while(!this.#categorys.addRecommendCategory(random_category)) {
            random_category = this.#menuRecommend.recommendCategory();
        }
        RecommendRandomFoods(category);
    }
    RecommendRandomFoods(category) {
        this.#coachs.array.forEach(coach => {
            let random_food = this.#menuRecommend.recommendFood(category);
            while(!coach.addRecommendFood(food)) {
                random_food = this.#menuRecommend.recommendFood(category);
            }
        });
    }
}

module.exports = MenuRecommendController;