class MenuModel {
    #menu = {};
    
    constructor(SAMPLE) {
        for(let category in SAMPLE) {
            this.saveMenu(category, SAMPLE[category]);
        }
    }

    saveMenu(category, foods) {
        const splitFoods = this.splitFoods(foods);
        this.#menu = { ...this.#menu, [category]: splitFoods };
    }

    splitFoods(foods) {
        return foods.split(', ');
    }
}
  
module.exports = MenuModel;