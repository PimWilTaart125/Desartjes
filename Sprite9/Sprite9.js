/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("uiterlijk1", "./Sprite9/costumes/uiterlijk1.svg", {
        x: 29.25,
        y: 18.75,
      }),
      new Costume("uiterlijk2", "./Sprite9/costumes/uiterlijk2.svg", {
        x: 29.25,
        y: 18.75,
      }),
      new Costume("uiterlijk3", "./Sprite9/costumes/uiterlijk3.svg", {
        x: 29.25,
        y: 18.75,
      }),
    ];

    this.sounds = [new Sound("plop", "./Sprite9/sounds/plop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "lvl 2" }, this.whenIReceiveLvl2),
      new Trigger(Trigger.BROADCAST, { name: "lvl3" }, this.whenIReceiveLvl3),
    ];
  }

  *whenGreenFlagClicked() {
    this.broadcast("Reset");
    this.costume = "uiterlijk1";
  }

  *whenIReceiveLvl2() {
    this.costumeNumber++;
  }

  *whenIReceiveLvl3() {
    this.costumeNumber++;
    this.broadcast("Reset");
  }
}
