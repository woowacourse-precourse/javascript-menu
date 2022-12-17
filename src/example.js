const { Random } = require("@woowacourse/mission-utils");

function pickRandomNum() {
	return Random.pickNumberInRange(1, 5);
}

function checkAboveTwice(number, arr) {
    let count = 0;
	arr.forEach(element => {
        if(element === number) count += 1;
    });
	if(count == 2) return true;
	else return false;
}
//요일별 메뉴 카테고리 설정하기
function selectCategory() {
	const numberArr = [];

	while(numberArr.length < 5) {
		const randomNum = pickRandomNum();
		//console.log(randomNum);
        const flag = checkAboveTwice(randomNum, numberArr);
        //console.log(flag);
		if(flag) continue;
		else numberArr.push(randomNum);
        //console.log(numberArr);
	}
	console.log('카테고리는:'+ numberArr);
}

selectCategory();
