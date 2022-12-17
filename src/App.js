const { Console, Random } = require("@woowacourse/mission-utils");

const SAMPLE = {
	일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
	한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
	중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
	아시안:
		'팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
	양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

const OUTPUT_MESSAGE = {
  START: '점심 메뉴 추천을 시작합니다.\n',
  RESULT: '메뉴 추천 결과입니다.',
  HEADER: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
  CATEGORY_OPEN: '[ 카테고리 ',
  ARR_CLOSE: ']',
  FINISH: '추천을 완료했습니다.\n',
}

const INPUT_MESSAGE = {
  NAME: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  MENU: '(이)가 못 먹는 메뉴를 입력해 주세요.\n',
}

const ERROR = {
  MENU: {
    COUNT: '[ERROR] 못 먹는 메뉴는 2개 이하여야만 합니다.',
    INVALID: '[ERROR] 존재하지 않는 메뉴를 입력하셨습니다.',
    DUP: '[ERROR] 중복된 메뉴를 입력하셨습니다.',
  },
  NAME: {
    COUNT: '[ERROR] 코치의 숫자는 2명 이상, 5명 이하여야만 합니다.',
    INVALID: '[ERROR] 코치의 이름은 2글자 이상, 4글자 이하여야만 합니다.',
    DUP: '[ERROR] 코치의 이름은 중복되면 안됩니다.'
  },
}

const CATEGORIES = new Map()
CATEGORIES.set(1, '일식')
CATEGORIES.set(2, '한식')
CATEGORIES.set(3, '중식')
CATEGORIES.set(4, '아시안')
CATEGORIES.set(5, '양식')

const RANDOM_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const BannedMenu = {}
const Names = []
const Categories = []
const Recommended = []

function finishService() {
  Console.close()
  return
}

function printRecommende(toPrint, idx) {
  Console.print(toPrint)
  return makePrintRecommended(idx+1)
}

function makePrintRecommended(idx) {
  if(idx === Names.length) {
    Console.print(OUTPUT_MESSAGE.FINISH)
    return finishService()
  }
  const toPrint = [`[ ${Names[idx]} `]
  Recommended[idx].forEach((menu) => {
    toPrint.push(`| ${menu} `)
  })
  toPrint.push(OUTPUT_MESSAGE.ARR_CLOSE)
  return printRecommende(toPrint.join(''), idx)
}

function printCategories(toPrint) {
  Console.print(toPrint)
  return makePrintRecommended(0)
}

function makePrintCategories() {
  const toPrint = [OUTPUT_MESSAGE.CATEGORY_OPEN]
  Categories.forEach((category) => {
    toPrint.push(`| ${category} `)
  })
  toPrint.push(OUTPUT_MESSAGE.ARR_CLOSE)
  return printCategories(toPrint.join(''))
}

function printResult() {
  Console.print(OUTPUT_MESSAGE.RESULT)
  Console.print(OUTPUT_MESSAGE.HEADER)
  return makePrintCategories()
}

function getMenu(idx, date) {
  const menu = SAMPLE[Categories[date]].split(', ')[Random.shuffle(RANDOM_ARRAY)[0]-1]
  if(Recommended[idx].includes(menu)) return getMenu(idx, date)
  if(BannedMenu[Names[idx].includes(menu)]) return getMenu(idx, date)
  Recommended[idx].push(menu)
}

function recommendMenu(idx) {
  if(idx === Names.length) {
    return printResult()
  }
  Recommended.push([])
  for(let date=0; date <5; date++) {
    getMenu(idx, date)
  }
  recommendMenu(idx+1)
}

function pushCategory(category) {
  const categoryCnt = Categories.filter(element => element === category).length
  if(categoryCnt < 2) Categories.push(category)
}

function chooseCategory() {
  while(Categories.length < 5) {
    const category = CATEGORIES.get(Random.pickNumberInRange(1, 5))
    pushCategory(category)
  }
  return recommendMenu(0)
}

function menusCntValid(menus) {
  if(menus.length > 2) {
    throw new Error(ERROR.MENU.COUNT)
  }
}

function menuIsValid(menu) {
  const allMenu = Object.values(SAMPLE)
  let isValid = false
  allMenu.forEach((menuArr) => {
    if(menuArr.includes(menu)) isValid = true
  })
  if(isValid === false) {
    throw new Error(ERROR.MENU.INVALID)
  }
}

function menuIsDup(menus) {
  const menuSet = new Set(menus)
  if(menuSet.size !== menus.length) {
    throw new Error(ERROR.MENU.DUP)
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
  Console.readLine(`${name}${INPUT_MESSAGE.MENU}`, (answer => {
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
    throw new Error(ERROR.NAME.COUNT)
  }
}

function nameIsValid(name) {
  if(name.length < 2 || name.length > 4) {
    throw new Error(ERROR.NAME.INVALID);
  }
}

function nameIsDup(names) {
  const nameSet = new Set(names)
  if(nameSet.size !== names.length) {
    throw new Error(ERROR.NAME.DUP)
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
  Console.readLine(INPUT_MESSAGE.NAME, (answer => {
    try {
      const names = namesAreValid(answer)
      return namesToConst(names)
    } catch(error) {
      Console.print(error.message)
      return inputCoachNames()
    }
  }))
}

function startService() {
  Console.print(OUTPUT_MESSAGE.START)
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