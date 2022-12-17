const {
  checkNameCountValid,
  checkNameLengthValid,
  checkDislikeCountValid,
  checkDislikeMenuValid,
} = require("../validator/index");
const { getCategory, getMenu } = require("../picker/index");
const { Console } = require("@woowacourse/mission-utils");

MenuServiceController = class {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  start() {
    this.view.printStartMessage();

    try {
      this.inputCoachName();
    } catch (message) {
      this.view.printError(message);
      this.inputCoachName();
    }
  }

  inputCoachName() {
    this.view.readCoachName((names) => {
      names = [...new Set(names.split(","))];

      checkNameCountValid(names);
      checkNameLengthValid(names);

      this.model.setCoachName(names);

      const reversed = names.reverse();

      try {
        this.inputCoachDislike(reversed);
      } catch (message) {
        this.view.printError(message);
        this.inputCoachDislike(reversed);
      }
    });
  }

  inputCoachDislike(names) {
    const name = names.pop();

    this.view.readCoachDislike(name, (menus) => {
      menus = [...new Set(menus.split(","))];

      checkDislikeCountValid(menus);
      if (menus.join("") !== "") checkDislikeMenuValid(menus);

      this.model.setCoachDislike([name, menus]);

      if (!names.length) return this.pickCategory();

      try {
        this.inputCoachDislike(names);
      } catch (message) {
        this.view.printError(message);
        this.inputCoachDislike(names);
      }
    });
  }

  pickCategory() {
    const category = getCategory();
    const weekCategories = this.model.getWeekCategories();

    if (weekCategories.length === 5) return this.pickMenu();

    if (
      weekCategories.filter((weekCategory) => weekCategory === category)
        .length !== 2
    )
      this.model.setWeekCategories(category);

    this.pickCategory();
  }

  pickMenu() {
    const names = this.model.getCoachName();
    const dislikes = this.model.getCoachDislike();
    const weekCategories = this.model.getWeekCategories();
    const dislikeHash = new Map();
    const recommendHash = new Map();

    dislikes.forEach((d) => dislikeHash.set(d[0], d[1]));

    weekCategories.forEach((weekCategory) => {
      names.forEach((name) => {
        const dislikes = dislikeHash.get(name);

        const pick = () => {
          const menu = getMenu(weekCategory);

          if (dislikes.includes(menu)) return pick();

          dislikeHash.set(
            name,
            dislikeHash.has(name) ? [...dislikeHash.get(name), menu] : [menu]
          );

          recommendHash.set(
            name,
            recommendHash.has(name)
              ? [...recommendHash.get(name), menu]
              : [menu]
          );
        };

        pick();
      });
    });

    this.outputResult(weekCategories, recommendHash);
  }

  outputResult(weekCategories, recommendHash) {
    this.view.printResultMessage();

    const categoryMessage =
      "[ " + "카테고리 | " + weekCategories.join(" | ") + " ]";
    const coachMessages = [];

    [...recommendHash.entries()].forEach((e) => {
      const coachMessage = "[ " + e[0] + " | " + e[1].join(" | ") + " ]";

      coachMessages.push(coachMessage);
    });

    this.view.printResult(categoryMessage, coachMessages);

    this.exit();
  }

  exit() {
    this.view.printEndMessage();

    Console.close();
  }
};

module.exports = MenuServiceController;
