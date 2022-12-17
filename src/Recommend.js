class Recommend{
    #coaches;
    
    constructor(names){
        this.#coaches = {};
        const nameSplit = names.split(',');
        for(let name of nameSplit){
            this.#coaches[name] = [];
        }
    }

    setMenus(name, menus){
        const menuSplit = menus.split(',');
        for(let menu of menuSplit){
            this.#coaches[name].push(menu);
        }
    }

    getCoach(){
        return this.#coaches;
    }
}

module.exports = Recommend;