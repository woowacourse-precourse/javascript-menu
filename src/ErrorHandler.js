const Message = require('./Message');

const SAMPLE = {
	일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
	한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
	중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
	아시안: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
	양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

const isNumberOfCoahOverTwo = (coach) => {
    if (!(coach.length >= 2 && coach.length <= 5)) throw Error(`${Message.ERROR_MESSAGE.COACH_RANGE}`);
    
    coach.forEach(name => {
        isCoachNameIsAvailable(name);
    })
    
    return true;
}

const isCoachNameIsAvailable = (name) => {
    if (!(name.length >= 2 && name.length <= 4)) throw Error(`${Message.ERROR_MESSAGE.NAME_RANGE}`)
    return true;
}

const isHateMenuIsAvailable = (hateFood) => {
    hateFoodList = hateFood.split(',');
    hateFoodList.forEach(hate => {
        let key = 0;
        for (let menus in SAMPLE) {
            menuList = SAMPLE[menus].split(', ');
            if (menuList.includes(hate)) key = 1;
        }
        if (key === 0) throw Error(`${hate}은(는)${Message.ERROR_MESSAGE.MENU_NAME_FAULT}`);
    })

    return true;

}


module.exports = {isNumberOfCoahOverTwo, isHateMenuIsAvailable}