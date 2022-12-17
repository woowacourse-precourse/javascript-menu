//library
const { Random } = require("@woowacourse/mission-utils");
//View
const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");
//utils
const { CATEGORY, SAMPLE } = require("./utils/Menu");

class App {

  constructor() {
	this.personCnt = 0;
	this.nameList = [];
	this.inEdible = {};
	this.categories = [];
  }

  play() {
	OutputView.printStartMsg();
	this.askName();
  }
  
  askName() {
	InputView.readName((names)=>{
		const nameList = names.split(',');
		this.nameList = nameList; //누구인지 저장해두기
		//this.personCnt = nameList.length; //총 몇명인지 카운트
		//console.log(nameList, this.personCnt);	
		this.askMenu(nameList[this.personCnt]);	
	});
  }
  askMenu(name) {
	InputView.readMenu(name, (menus)=> {
		const menuList = menus.split(',');
		//console.log(name,menuList);	
		this.inEdible[name] = menuList; //딕셔너리에 사람마다 못먹는 메뉴 저장
		console.log(this.inEdible); 
		this.personCnt += 1;
		
		if(this.personCnt == this.nameList.length) { //모든 사람들의 못먹는 메뉴를 알아봤다!
			return this.selectCategory(); 
		} 
		return this.askMenu(this.nameList[this.personCnt]);
	});
  }

  //요일별 메뉴 카테고리 설정하기
  selectCategory() {
	const numberArr = [];

	while(numberArr.length < 5) {
		const randomNum = this.pickRandomNum();
		console.log(randomNum);
		if(this.checkAboveTwice(randomNum, numberArr)) continue;
		else numberArr.push(randomNum);
	}

	this.categories = numberArr.map((element) => {
		return CATEGORY[element];
	})
	console.log('카테고리는:', this.categories);
  }

  pickRandomNum() {
	return Random.pickNumberInRange(1, 5);
  }

  checkAboveTwice(number, arr) {
	let count = arr.filter(element => number === element).length;
	if(count == 2) return true;
	return false;
  }

  recommend() {

  }

  showRecommendation() {
	
	console.log("hi recommend!");
  }

}
//토미,제임스,포코
//tomi,james,poco
const app = new App();
app.play();

module.exports = App;
