const MissionUtils = require("@woowacourse/mission-utils");
const {Console} = MissionUtils;

const OutputView = {
    printResult(categories, names, menus){
        Console.print("\n메뉴 추천 결과입니다.");
		Console.print("[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]");
        this.printCategory(categories);
        for(let i = 0; i < names.length; i++){
            this.printMenus(names[i], menus[i]);
        }

        Console.print("\n추천을 완료했습니다.");
    },

    printCategory(categories){
        str = "[ 카테고리 | " + categories[0];
        for(let i = 1; i < 5; i++){
            str = str + " | " + (categories[i]); 
        }

        str = str + " ]";

        Console.print(str);
    },

    printMenus(name, menus){
        str = `[ ${name} | ` + menus[0];
        for(let i = 1; i < 5; i++){
            str = str + " | " + (menus[i]); 
        }
        
        str = str + " ]";

        Console.print(str);
    }
};

module.exports = OutputView;