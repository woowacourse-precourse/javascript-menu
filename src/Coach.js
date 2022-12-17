class Coach{
    #name;
    #menus;

    constructor(name){
        this.#name = name;
    }

    setMenu(menus){
        this.menuValidate(menus);
    }

    getMenu(){
        return this.#menus;
    }

    getName(){
        return this.#name;
    }
}

module.exports = Coach;
