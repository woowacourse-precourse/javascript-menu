//library
const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");
//View
const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");
//utils
const { CATEGORY, SAMPLE } = require("./utils/Menu");
const InputValidation = require("./utils/Validate");

//App -> Controller로 사용
class App {

  constructor() {
	this.personCnt = 0; //코치님 한 명씩 먹을 수 없는 메뉴를 받기 위해 필요한, 카운트용 변수
	this.nameList = []; //코치님 성함들
	this.inEdible = {}; //코치님별로 먹을 수 없는 메뉴
	this.menuList = []; //코치님들이 월요일-일요일 먹을 메뉴
	this.categories = []; //카테고리별 총 메뉴들 
  }

  //프로그램 시작
  play() {
	OutputView.printStartMsg();
	this.askName();
  }
  //코치님 이름 입력받기 
  askName() {
	InputView.readName((names)=>{
		const nameList = names.split(',');
		InputValidation.isValidName(nameList); //유효성 검사
		this.nameList = nameList; //코치님 이름 목록 저장해두기
		this.askMenu(nameList[this.personCnt]);	
	});
  }
  //코치님 한 명씩 먹을 수 없는 메뉴 입력받기
  askMenu(name) {
	InputView.readMenu(name, (menus)=> {
		const menuList = menus.split(',');
		InputValidation.isValidMenu(menuList); //유효성 검사
		this.inEdible[name] = menuList; //객체에 사람마다 못먹는 메뉴 저장
		this.personCnt += 1;
		if(this.personCnt == this.nameList.length) { //모든 사람들의 못먹는 메뉴를 알아봤다!
			this.categories = this.selectCategory();
			this.menuList = this.recommendMenu(); 
			return this.showRecommendation();
		} 
		return this.askMenu(this.nameList[this.personCnt]);
	});
  }

  //요일별 메뉴 카테고리 선정하기
  selectCategory() {
	let categories = [];
	const numberArr = [];

	while(numberArr.length < 5) { //5 -> 월요일-일요일 총 요일 5개라서
		const randomNum = this.pickRandomNum();
		if(this.checkAboveTwice(randomNum, numberArr)) continue;
		else numberArr.push(randomNum);
	}
	categories = numberArr.map((element) => {
		return CATEGORY[element];
	})
	return categories; //카테고리별 메뉴 리스트 반환하기
  }
  //임의로 메뉴를 선정하기
  pickRandomNum() {
	return Random.pickNumberInRange(1, 5);
  }

  //한 주에 같은 카테고리는 최대 2회까지만 고를 수 있다.
  checkAboveTwice(number, arr) {
	let count = arr.filter(element => number === element).length;
	if(count == 2) return true;
	return false;
  }
  
  //메뉴 추천하기
  recommendMenu() {
	let menuList = [];
	for(let i=0; i<this.nameList.length;i++){
		const name = this.nameList[i];
		let everyDayMenu = [];

		for(let j=0; j<this.categories.length; j++) { //요일별로 순회
			const todayCategory = this.categories[j];//오늘의 카테고리는~~
			const menuForCategory = SAMPLE[todayCategory].split(', '); //해당 카테고리의 메뉴 모음 리스트
			const todayMenu = this.selectRandomMenu(everyDayMenu, menuForCategory, name); //당신을 위한 오늘의 메뉴는~~
			everyDayMenu.push(todayMenu); //오늘 요일의 메뉴는..	
		}
		menuList.push(everyDayMenu); //각 코치의 월요일-금요일 식단을 저장
	}
	return menuList;
  }

  // 주어진 배열에서 요소 1개를 랜덤하게 골라 반환하는 함수
  selectRandomMenu(everyDayMenu, menuForCategory, name) {
	const stringToNum = menuForCategory.map((element, index) => {
		return index + 1;
	})
	const randomNum = Random.shuffle(stringToNum)[0];
	const randomMenu = menuForCategory[randomNum-1];
	if(this.inEdible[name].includes(randomMenu)) return this.selectRandomMenu(everydayMenu, menuForCategory, name); //먹을 수 없는 메뉴이면 다시 고르기!
	if(everyDayMenu.includes(randomMenu)) return this.selectRandomMenu(everyDayMenu, menuForCategory, name); //메뉴 중복 고려해야함!!!!!!!

	return randomMenu;
  }

  //메뉴 추천 결과 보여주기
  showRecommendation() {
	this.categories.unshift('카테고리');
	for(let i=0; i<this.menuList.length; i++){
		this.menuList[i].unshift(this.nameList[i]);
	}
	OutputView.printRecommendation(this.categories, this.menuList);
	return this.quit();
  }

  quit () {
	OutputView.printEndMsg();
	return Console.close(); //프로그램 종료
  }

}

const app = new App();
app.play();

module.exports = App;
