//library
const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");
//View
const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");
//utils
const { CATEGORY, SAMPLE } = require("./utils/Menu");
const InputValidation = require("./utils/Validate");

class App {

  constructor() {
	this.personCnt = 0;
	this.nameList = [];
	this.inEdible = {};
	this.menuList = [];
	this.categories = [];
  }

  play() {
	OutputView.printStartMsg();
	this.askName();
  }
  
  askName() {
	InputView.readName((names)=>{
		const nameList = names.split(',');
		InputValidation.isValidName(nameList); //유효성 검사
		this.nameList = nameList; //누구인지 저장해두기
		//this.personCnt = nameList.length; //총 몇명인지 카운트
		//console.log(nameList, this.personCnt);	
		this.askMenu(nameList[this.personCnt]);	
	});
  }
  askMenu(name) {
	InputView.readMenu(name, (menus)=> {
		const menuList = menus.split(',');
		InputValidation.isValidMenu(menuList); //유효성 검사
		//console.log(name,menuList);	
		this.inEdible[name] = menuList; //딕셔너리에 사람마다 못먹는 메뉴 저장
		//console.log(this.inEdible); 
		this.personCnt += 1;
		
		if(this.personCnt == this.nameList.length) { //모든 사람들의 못먹는 메뉴를 알아봤다!
			this.categories = this.selectCategory();
			console.log(this.categories);
			this.menuList = this.recommendMenu(); 
			//console.log(this.menuList); 
			return this.showRecommendation();
		} 
		return this.askMenu(this.nameList[this.personCnt]);
	});
  }

  //요일별 메뉴 카테고리 설정하기
  selectCategory() {
	let categories = [];
	const numberArr = [];

	while(numberArr.length < 5) {
		const randomNum = this.pickRandomNum();
		//console.log(randomNum);
		if(this.checkAboveTwice(randomNum, numberArr)) continue;
		else numberArr.push(randomNum);
	}

	categories = numberArr.map((element) => {
		return CATEGORY[element];
	})
	//console.log('카테고리는:', categories);
	return categories;
  }

  pickRandomNum() {
	return Random.pickNumberInRange(1, 5);
  }

  checkAboveTwice(number, arr) {
	let count = arr.filter(element => number === element).length;
	if(count == 2) return true;
	return false;
  }
  
  recommendMenu() {
	//console.log(this.inEdible);
	let menuList = [];
	for(let i=0; i<this.nameList.length;i++){
		const name = this.nameList[i];
		let everyDayMenu = [];

		for(let j=0; j<this.categories.length; j++) { //요일별로 순회
			let menusForU = []; //오늘 요일에 먹을 수 있는 메뉴들을 저장하자
			const todayCategory = this.categories[j];//오늘의 카테고리는~~
			const menuForCategory = SAMPLE[todayCategory].split(', '); //해당 카테고리의 메뉴 모음 리스트
			//console.log("메뉴카테고리",menuForCategory);
			menusForU = menuForCategory.filter(menu => !(this.inEdible[name].includes(menu)))
			//console.log(menusForU);
			const todayMenu = this.randomItem(everyDayMenu, menusForU); //당신을 위한 오늘의 메뉴는~~
			everyDayMenu.push(todayMenu);	
		}
		//console.log(everyDayMenu);
		menuList.push(everyDayMenu);
	}
	return menuList;
  }

  // 주어진 배열에서 요소 1개를 랜덤하게 골라 반환하는 함수
  randomItem(menuList, arr) {
	const item =  arr[Math.floor(Math.random() * arr.length)]; 
	if(menuList.includes(item)) return this.randomItem(menuList,arr); //메뉴 중복 고려해야함!!!!!!!

	return item;
  }

  showRecommendation() {
	this.categories.unshift('카테고리');
	for(let i=0; i<this.menuList.length; i++){
		this.menuList[i].unshift(this.nameList[i]);
	}
	OutputView.printRecommendation(this.categories, this.menuList);
	//console.log("hi recommend!");
	return this.quit();
  }

  quit () {
	OutputView.printEndMsg();
	return Console.close(); //프로그램 종료
  }

}
//토미,제임스,포코
//tomi,james,poco
const app = new App();
app.play();

module.exports = App;
