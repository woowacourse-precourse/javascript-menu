const MissionUtils = require("@woowacourse/mission-utils");
const {Random} = MissionUtils;
const categories = { 1:'일식', 2:'한식', 3:'중식', 4:'아시안', 5:'양식'};
const foods = {
	일식: ['규동', '우동', '미소시루', '스시', '가츠동', '오니기리', '하이라이스', '라멘', '오코노미야끼'],
	한식: ['김밥', '김치찌개', '쌈밥', '된장찌개', '비빔밥', '칼국수', '불고기', '떡볶이', '제육볶음'],
	중식: ['깐풍기', '볶음면', '동파육', '짜장면', '짬뽕', '마파두부', '탕수육', '토마토 달걀볶음', '고추잡채'],
	아시안: ['팟타이', '카오 팟', '나시고렝', '파인애플 볶음밥', '쌀국수', '똠얌꿍', '반미', '월남쌈', '분짜'],
	양식: ['라자냐', '그라탱', '뇨끼', '끼슈', '프렌치 토스트', '바게트', '스파게티', '피자', '파니니'],
};

class Recommend{
    #coaches;
    #category;

    constructor(names){
        this.#category = [];

        this.#coaches = {};
        const nameSplit = names.split(',');
        for(let name of nameSplit){
            this.#coaches[name] = [[],[]];
        }
    }

    setMenus(name, menus){
        const menuSplit = menus.split(',');
        for(let menu of menuSplit){
            this.#coaches[name][0].push(menu);
        }
    }

    getCoach(){
        return this.#coaches;
    }

    getCategory(){
        return this.#category;
    }

    randomCategory(){
        while(true){
            const category = categories[Random.pickNumberInRange(1, 5)];
            const count = this.#category.filter(x => category === x).length;
            if(count < 2){
                this.#category.push(category);
                break;
            }
        }
    }

    randomFoodAll(){
        const category = this.#category.at(-1);
        for(let name of Object.keys(this.#coaches)){
            randomFood(category, name);
        }
    }

    randomFood(category, name){
        const cantFood = this.#coaches[name][0].concat( this.#coaches[name][1]);
        const menus = foods[category];

        while(true){
            const menu = Random.shuffle(menus)[0];
            if (!cantFood.includes(menu)){
                this.#coaches[name][1].push(menu);
                break;
            }
        }
    }
}

console.log([1,2].concat([3]));

module.exports = Recommend;