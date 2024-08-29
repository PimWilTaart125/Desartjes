/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Blauw extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("uiterlijk1", "./Blauw/costumes/uiterlijk1.svg", {
        x: 0,
        y: 0,
      }),
      new Costume("uiterlijk2", "./Blauw/costumes/uiterlijk2.svg", {
        x: 74.78999328613281,
        y: 15.981249999999989,
      }),
    ];

    this.sounds = [new Sound("plop", "./Blauw/sounds/plop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Reset" }, this.whenIReceiveReset),
      new Trigger(Trigger.BROADCAST, { name: "Check" }, this.whenIReceiveCheck),
      new Trigger(Trigger.BROADCAST, { name: "lvl 2" }, this.whenIReceiveLvl2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "lvl3" }, this.whenIReceiveLvl3),
    ];
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement sensing_setdragmode */ null;
    this.costume = "uiterlijk1";
  }

  *whenIReceiveReset() {
    this.goto(203, -67);
  }

  *whenIReceiveCheck() {
    if (this.touching(Color.rgb(0, 103, 255))) {
      this.stage.vars.Just++;
    }
  }

  *whenIReceiveLvl2() {
    this.costume = "uiterlijk2";
  }

  *whenGreenFlagClicked2() {
    this.visible = true;
  }

  *whenIReceiveLvl3() {
    this.visible = false;
  }
}
