const { Console, Random } = require("@woowacourse/mission-utils");

const SAMPLE = {
	일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
	한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
	중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
	아시안:
		'팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
	양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

const CATEGORIES = new Map()
CATEGORIES.set(1, '일식')
CATEGORIES.set(2, '한식')
CATEGORIES.set(3, '중식')
CATEGORIES.set(4, '아시안')
CATEGORIES.set(5, '양식')

const BannedMenu = {}
const Names = []
const Categories = []

function printCategories() {
  Console.print(Categories)
}

function chooseCategory() {
  while(Categories.length < 5) {
    const category = CATEGORIES.get(Random.pickNumberInRange(1, 5))
    Categories.push(category)
  }
  return printCategories()
}

function menusCntValid(menus) {
  if(menus.length > 2) {
    throw new Error('[ERROR] 못먹는 메뉴가 너무 많음')
  }
}

function menuIsValid(menu) {
  const allMenu = Object.values(SAMPLE)
  let isValid = false
  allMenu.forEach((menuArr) => {
    if(menuArr.includes(menu)) isValid = true
  })
  if(isValid === false) {
    throw new Error('[ERROR] 존재하지 않는 메뉴')
  }
}

function menuIsDup(menus) {
  const menuSet = new Set(menus)
  if(menuSet.size !== menus.length) {
    throw new Error('[ERROR] 중복된 메뉴 존재')
  }
}

function cantEatIsValid(answer) {
  const menus = answer.split(',')
  menusCntValid(menus)
  menus.forEach((menu) => {
    menuIsValid(menu)
  })
  menuIsDup(menus)
  return menus
}

function inputCantEat(idx) {
  const name = Names[idx]
  Console.readLine(`${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`, (answer => {
    try {
      const cantEatArray = cantEatIsValid(answer)
      BannedMenu[name] = cantEatArray.slice()
      return cantEat(idx+1)
    } catch(error) {
      Console.print(error.message)
      return inputCantEat(idx)
    }
  }))
  return
}

function cantEat(idx) {
  if(idx === Names.length) {
    return chooseCategory()
  }
  BannedMenu[Names[idx]] = ''
  inputCantEat(idx)
}

function namesCntValid(names) {
  if(names.length < 2 || names.length > 5) {
    throw new Error('[ERROR] 코치 숫자가 안맞음')
  }
}

function nameIsValid(name) {
  if(name.length < 2 || name.length > 4) {
    throw new Error('[ERROR] 코치 이름이 유효하지 않음');
  }
}

function nameIsDup(names) {
  const nameSet = new Set(names)
  if(nameSet.size !== names.length) {
    throw new Error('[ERROR] 중복된 코치 이름 존재')
  }
}

function namesAreValid(answer) {
  const names = answer.split(',')
  namesCntValid(names)
  names.forEach((name) => {
    nameIsValid(name)
  })
  nameIsDup(names)
  return names
}

function namesToConst(names) {
  names.forEach((name) => {
    Names.push(name)
  })
  return cantEat(0)
}

function inputCoachNames() {
  Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)\n', (answer => {
    try {
      const names = namesAreValid(answer)
      return namesToConst(names)
    } catch(error) {
      Console.print(error)
      return inputCoachNames()
    }
  }))
}

function startService() {
  Console.print('점심 메뉴를 추천합니다.\n')
  return inputCoachNames()
}

class App {
  play() {
    startService()
  }
}

module.exports = App;

const a = new App()
a.play();