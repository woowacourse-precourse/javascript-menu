const MU = require("@woowacourse/mission-utils");
const OutputView = require('./OutputView');
const SAMPLE = [
    ['규동', '우동', '미소시루', '스시', '가츠동', '오니기리', '하이라이스', '라멘', '오코노미야끼'],
    ['김밥', '김치찌개', '쌈밥', '된장찌개', '비빔밥', '칼국수', '불고기', '떡볶이', '제육볶음'],
    ['깐풍기', '볶음면', '동파육', '짜장면', '짬뽕', '마파두부', '탕수육', '토마토 달걀볶음', '고추잡채'],
    ['팟타이', '카오 팟', '나시고렝', '파인애플 볶음밥', '쌀국수', '똠얌꿍', '반미', '월남쌈', '분짜'],
    ['라자냐', '그라탱', '뇨끼', '끼슈', '프렌치 토스트', '바게트', '스파게티', '피자', '파니니']
]
const Menu ={
    /**
     * 카테고리는 Random.pickNumberInRange()를 사용
     * 최대 2번까지 카테고리 중복 가능
     */
    pickCategory() {
        let num = [0,0,0,0,0];
        let category = [];
        let i = 0;
        while(i < 5) {
            category[i] = MU.Random.pickNumberInRange(1, 5);
            if(num[category[i]-1] < 2){
                num[category[i]-1] += 1;
                i++;
            }
        }
        return category;
    },
    /**
     * const menu = Randoms.shuffle(menus)[0];//Menu는 무작위 배열 > 
     * 못먹거나 이미 선택한 경우 다시 섞어서 첫번째 값 사용
     */
    pickMenu(COACH, category, hateMenu) {
        let pickMenu = new Array(COACH.length);
        for(let i = 0; i <pickMenu.length; i++) {
            pickMenu[i] = new Array(5);
        }
        for(let i = 0; i < COACH.length; i++) {
            pickMenu[i] = this.helpPickMenu(pickMenu, category, hateMenu ,i);
        }
        OutputView.printMenu(COACH, category, pickMenu)
    },

    helpPickMenu(pickMenu, category, hateMenu ,i) {
        let j = 0;
        while(j < 5) {
            const pick = MU.Random.shuffle([1,2,3,4,5,6,7,8,9])[0];
            const menu = SAMPLE[category[j] - 1][pick-1];
            if(pickMenu[i].includes(menu) ||hateMenu[i].includes(menu)) 
                continue;
            pickMenu[i][j] = menu;
            j++;
        }
        return pickMenu[i];
    }
};

module.exports = Menu;