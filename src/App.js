const { Console , Random } = require("@woowacourse/mission-utils");
const Message = require('./Message');
const ErrorHandler = require('./ErrorHandler');

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
	this.menuRecommand();
  }

  menuRecommand() {
	  Console.readLine(`${Message.INPUT_MESSAGE.INPUT_MEMBER}\n`, (members) => {
		  let coachList = members.split(',');
		  if (ErrorHandler.isNumberOfCoahOverTwo(coachList)) {
			let idx = 0;
			this.makeNotEatList(coachList, idx);
		  }
	  })
  }

  makeNotEatList(coachList, idx) {
	const name = coachList[idx];
	Console.readLine(`\n${name}${Message.INPUT_MESSAGE.INPUT_NOT_EAT}\n`, (hateFood) => {
		if(ErrorHandler.isHateMenuIsAvailable(hateFood)) {
			coachNotEatObject[name] = hateFood.split(',');
			coachEatObject[name] = [];
			coachNameList.push(name);
			idx++;
		
			if (idx<coachList.length) {
				this.makeNotEatList(coachList, idx);
			}
			else {
				this.makeCategory();
				this.recommandCoachEat(coachList);
				this.printResult(coachEatObject);
				Console.close();
			}
		}
		// coachNotEatObject[name] = hateFood.split(',');
		// coachEatObject[name] = [];
		// coachNameList.push(name);
		// idx++;
		
		// if (idx<coachList.length) {
		// 	this.makeNotEatList(coachList, idx);
		// }
		// else {
		// 	this.makeCategory();
		// 	this.recommandCoachEat(coachList);
		// 	this.printResult(coachEatObject);
		// 	Console.close();
		// }
	})
  }

  makeCategory() {
	for(let i=0 ; i<5 ; i++) {
		let selected = categories[Random.pickNumberInRange(1,5)];
		if (selected[1] >= 2) {
			i--;
			continue;
		}
		selected[1]++;
		dayCategories.push(selected[0]);	
	}
  }

  recommandCoachEat(coachList) {
	coachList.forEach(coachName => {
		this.makeEatObject(coachName);
	})
  }

  makeEatObject(coachName) {
	for(let day=0 ; day<dayCategories.length ; day++) {
		const selectedFood = this.pickRandomMenu(dayCategories[day]);
		if (coachNotEatObject[coachName].includes(selectedFood) || coachEatObject[coachName].includes(selectedFood)) {
			day--;
			continue;
		}
		coachEatObject[coachName].push(selectedFood);
	}
  }

  pickRandomMenu(dayCatg) {
	  const menuNumber = [1,2,3,4,5,6,7,8,9];
	  const menus = SAMPLE[dayCatg].split(', ');
	  const menuIdx = Random.shuffle(menuNumber);
	  return menus[menuIdx[0] - 1];
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
	  })

	  eatString += " ]";

	  Console.print(eatString);
  }

  printCategories() {
	  let stringCategories = "";
	  stringCategories += `[ ${Message.INPUT_MESSAGE.CATEGORIE}`;

	  for(let day=0 ; day<5 ; day++) {
		  stringCategories += " | "
		  stringCategories += dayCategories[day];
	  }
	  stringCategories += " ]";

	  Console.print(stringCategories);
  }
}

const app = new App();
app.play();



module.exports = App;
