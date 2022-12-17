class Coach {
    #name;
    #hateFoodList;
    #recommandFoodList;

    constructor(name, hateFoodList) {
        this.#name = name;
        this.#hateFoodList = hateFoodList;
        this.#recommandFoodList = [];
    }

    addRecommendFood(food) {
        if (this.#hateFoodList.indexOf(food) === -1) return false;
        if (this.#recommandFoodList.indexOf(food) === -1) return false;
        
        this.#recommandFoodList.push(food);
        return true;
    }

    toString() {
        const content = [this.#name, ...this.#recommandFoodList]
        return '[ ' + content.join(' | ') + ' ]';
    }
}

module.exports = Coach;