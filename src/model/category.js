const constants = require("../Constants");

class Category {
    #list;

    addRecommendCategory(category) {
        if(this.#countRecommendedCategoryNum(category) > constants.SAME_CATEGORY_COMMAND_MAIMAM) {
            return false;
        }
        this.#list.add(category);
        return true;
    }
    #countRecommendedCategoryNum(category) {
        return this.#list.filter((e) => e === category).length;
    }

    toString() {
        const content = ['카테고리', ...this.#list];
        return '[ ' + content.join(' | ') + ' ]';
    }
}

module.exports = Category;