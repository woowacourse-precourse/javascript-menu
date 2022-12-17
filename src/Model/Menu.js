class Menu {
  constructor(){
    this.userCategory = {}
    this.categoryName = ['일식','한식','중식','아시안','양식']

  }

  getCategory(generate){
    
    if(generate() === 1) return this.categoryName[0]
    if(generate() === 2) return this.categoryName[1]
    if(generate() === 3) return this.categoryName[2]
    if(generate() === 4) return this.categoryName[3]
    if(generate() === 5) return this.categoryName[4]
  }

  // getUseCategory(user,day,generate){
  //   return [user, this.getCategory(day,generate)]
  // }
}

module.exports = Menu;
