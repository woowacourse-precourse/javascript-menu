class MenuModel {
    #menu = {};
    #recommend = [
        ['구분', '월요일', '화요일', '수요일', '목요일', '금요일'],
        ['카테고리']
    ];
    
    constructor(SAMPLE) {
        for(let category in SAMPLE) {
            this.saveMenu(category, SAMPLE[category]);
        }
    }

    saveMenu(category, foods) {
        this.#menu = { ...this.#menu, [category]: foods };
    }

    setCoaches(coaches) {
        coaches.forEach(coach => {
            this.#recommend.push([coach]);
        });
    }

    checkCategory(category) {
        let count = 0;
        this.#recommend[1].forEach((element) => {
            if(element === category) count += 1;
        })
        if(count > 1) return false;
        this.#recommend[1].push(category);
        return true;
    }

    getMenu(category) {
        const categoryMenu = this.#menu[category].split(', ');
        return categoryMenu;
    }

    addMenu(index, menu) {
        this.#recommend[index + 2].push(menu);
    }

    getRecommend() {
        const recommend = this.#recommend;
        return recommend
    }
}
  
module.exports = MenuModel;