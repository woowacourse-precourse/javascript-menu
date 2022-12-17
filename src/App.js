const { Console , Random } = require("@woowacourse/mission-utils");
const Message = require('./Message');

const SAMPLE = {
	일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
	한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
	중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
	아시안: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
	양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

const categories = [[], ['일식', 0] , ['한식', 0], ['중식', 0], ['아시안', 0], ['양식', 0]];
const coachNotEatObject = {};
const coachEatObject = {};
const coachNameList = [];
const dayCategories = [];


class App {
  play() {
	Console.print(`${Message.START_MESSAGE.START}\n`);
	this.recommandStart();
  }

  recommandStart() {
	  Console.readLine(`${Message.INPUT_MESSAGE.INPUT_MEMBER}\n`, (members) => {
		  let coachList = members.split(',');
		  let idx = 0;
		  this.makeNotEatList(coachList, idx);
	  })
  }

  makeNotEatList(coachList, idx) {
	Console.readLine(`\n${coachList[idx]}${Message.INPUT_MESSAGE.INPUT_NOT_EAT}\n`, (food) => {
		coachNotEatObject[coachList[idx]] = food.split(',');
		coachEatObject[coachList[idx]] = [];
		coachNameList.push(coachList[idx]);

		idx++;
		if (idx<coachList.length) {
			this.makeNotEatList(coachList, idx);
		}
		else {
			for(let i=0 ; i<5 ; i++) {
				let selected = this.makeCategory();
				if (selected[1] >= 2) {
					i--;
					continue;
				}
				selected[1]++;
				dayCategories.push(selected[0]);
			} //카데고리 완성.

			//음식 추천 시작.
			dayCategories.forEach(dayCatg => {
				for(let s=0 ; s<coachList.length ; s++) {
					const selectedFood = this.recommandFood(dayCatg);
					if (!coachNotEatObject[coachList[s]].includes(selectedFood) && !coachEatObject[coachList[s]].includes(selectedFood)) {
						coachEatObject[coachList[s]].push(selectedFood);
					}
					else {
						s--;
					}
				}
			});
			this.printResult(coachEatObject);
			Console.close();
		}
	})
  }

  makeCategory() {
	const select = categories[Random.pickNumberInRange(1,5)];
	return select; 
  }

  recommandFood(dayCatg) {
	  const menuNumber = [1,2,3,4,5,6,7,8,9];
	  const menus = SAMPLE[dayCatg].split(', ');
	  const menuIdx = Random.shuffle(menuNumber);
	  return menus[menuIdx[0]-1];
  }

  printResult() {
	  Console.print(`\n${Message.OUTPUT_MESSAGE.MENU_RESULT}`);
	  Console.print(`${Message.OUTPUT_MESSAGE.DAY_LIST}`);
	  this.printCategories();
	  coachNameList.forEach(name => {
		this.printCoachEatList(name);
	  });
	  Console.print(`\n${Message.OUTPUT_MESSAGE.MENU_FINISH}`);
  }
  
  printCoachEatList(name) {
	  let eatString = "";
	  eatString += `[ ${name}`;
	  
	  const coachFood = coachEatObject[name];
	  coachFood.forEach(fd => {
		  eatString += " | ";
		  eatString += fd;
		  eatString += " ";
	  })

	  eatString += "]";

	  Console.print(eatString);
  }

  printCategories() {
	  let stringCategories = "";
	  stringCategories += "[ 카테고리";

	  for(let day=0 ; day<5 ; day++) {
		  stringCategories += " | "
		  stringCategories += dayCategories[day];
		  stringCategories += " ";
	  }
	  stringCategories += "]";

	  Console.print(stringCategories);
  }
}

const app = new App();
app.play();



module.exports = App;
