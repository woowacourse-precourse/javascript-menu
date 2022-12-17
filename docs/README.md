## App 기능

1-1. namesCallback

- 형 변환
- validateNames 호출
- handleNames 호출
- validateNames 던진 에러 처리
  1-2. validateNames(["코치이름1","코치이름2"])
- 각 코치 이름 길이 확인
- 코치들 이름 중복 확인
  1-2. handleNames
- this.coaches = []
- this.coaches.push(new Coach("코치이름"));
- this.currentBanCoachIndex = 0 <-- 밴 메뉴 입력받을 코치 인덱스
- InputView.readBanMenus(this.coaches[this.currentBanCoachIndex].getName(), banMenusCallback)

2-1. banMenusCallback

- 형 변환
- validateBanMenus 호출
- handleBanMenus 호출
- validateBanMenus에서 던진 에러 처리
  2-2. handleBanMenus
- 현재 코치 밴 메뉴 추가
- this.coaches[this.currentBanCoachIndex].addBanMenus(banMenus)
- 밴 입력 받을 코치 남았으면 : this.currentBanCoachIndex < this.coaches.length-1
- this.currentBanCoachIndex 1 증가
- 다음 코치 벤 메뉴 입력 받기 :InputView.readBanMenus(this.coaches[this.currentBanCoachIndex].getName(), banMenusCallback)
- 밴 입력 받을 코치 안 남았으면 : decideCategories 호출

3. decideCategories

- this.categories = [] <-- App constructor
- 임의로 카테고리 뽑아서(random 숫자 -> 카테고리 이름)
- this.categories에 2번 있는지 확인
- 없으면 this.categories.push
- 있으면 다시 뽑기
- this.categories.length 5일때 까지 반복
  while(this.categories.length < 5){
  let category = random();
  let count = 1;
  for(let i=0;i<this.categories.length;i++)
  count += 1;
  if(count < 2){
  this.categories.push(category)
  }
  }
- decideMenus 호출

4. decideMenus

- for - this.categories 만큼 - i index
  카테고리음식들 = SAMPLE[this.categories[i]]
- for - this.coaches 만큼 - j index
- 긱 코치가 해당 카테고리 음식 뽑게함 : this.coaches[j].addMenu(카테고리음식들)
- decideMenus 호출

5. printResults

- this.categories 요일 별 카테고리 출력
- for - this.coaches 만큼 - i index
- 각 코치별 메뉴 받아와서 출력 : this.coaches[i].getMenu()

## Coach 기능

1. constructor(이름)

- this.name = 이름
- this.menus = [] 초기화

2. setBanMenu(밴 음식들)
   this.banMenus = 밴 음식들

3. addMenu(카테고리 음식들 어레이)

- 카테고리에 대한 음식 하나 뽑아서
- this.banMenus 에 있는지 확인
- this.menus에 있는지 확인
- 없으면 this.menus에 추가
  let menu = randoms.shuffle(카테고리 음식들 어레이)[0]
  while( this.banMenus.includes(menu) || this.menus.includes(menu)){
  menu = randoms.shuffle(카테고리 음식들 어레이)[0]
  }
  this.menus.push(menu);

4. getName

- this.name 리턴

5. getMenus
   this.menus 리턴
