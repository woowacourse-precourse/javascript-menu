const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");

class App {

  constructor() {
	this.personCnt = 0;
	this.nameList = [];
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
		console.log(name,menuList);	
		
		this.personCnt += 1;
		
		if(this.personCnt == this.nameList.length) { //모든 사람들의 못먹는 메뉴를 알아봤다!
			return this.showRecommendation(); 
		} 
		return this.askMenu(this.nameList[this.personCnt]);
	});
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
