const Input = require("./Input")
const Output = require("./Output")
const Coach = require("./Coach")
const Make = require("./Random")

class App {
	#weekCategory
	#coachs

	constructor() {
		this.#weekCategory = [];
		this.#coachs = [];
	}

	play() {
		Output.start();
		Input.requestName(this.requestNameCallback.bind(this));
	}

	requestNameCallback(names) {  	//["이름","이름"...]
		names.forEach(name => { this.#coachs.push(new Coach(name)) })
		const name = this.#coachs[0].name()
		Input.requestNotEat(name, 0, this.requestNotEatCallbackVal.bind(this))
	}
	requestNotEatCallbackVal(i, foods) {
		this.#coachs[i].isNotEat(foods);
		const name = this.#coachs[i + 1].name()
		if (i + 2 < this.#coachs.length) {
			Input.requestNotEat(name, i + 1, this.requestNotEatCallbackVal.bind(this))
		} else {
			Input.requestNotEat(name, i + 1, this.requestNotEatCallback.bind(this))
		}
	}

	requestNotEatCallback(i, foods) {
		this.#coachs[i].isNotEat(foods);
		this.checkOverlapCategory();
		this.pushMenu();

	}

	checkOverlapCategory() {
		while (this.#weekCategory.length !== 5) {
			const foodStyle = Make.makeCategory();
			let count = 0;
			this.#weekCategory.forEach(x => {
				if (foodStyle === x) count++
			})
			if (count < 3) this.#weekCategory.push(foodStyle);
		}
	}

	pushMenu() {
		this.#coachs.forEach(coach => {
			for (let i = 0; i < 5; i++) {
				if (!coach.addMenu(Make.makeMenu(this.#weekCategory[i]))) i--;
			}
		})
	}
}

module.exports = App;

