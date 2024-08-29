/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Geel extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("uiterlijk1", "./Geel/costumes/uiterlijk1.svg", {
        x: 25.08999,
        y: 15.75,
      }),
      new Costume("uiterlijk2", "./Geel/costumes/uiterlijk2.svg", {
        x: 89.3091942395258,
        y: 19.558985644637033,
      }),
    ];

    this.sounds = [new Sound("plop", "./Geel/sounds/plop.wav")];

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
    this.costume = "uiterlijk1";
    this.stage.vars.Just = 0;
    /* TODO: Implement sensing_setdragmode */ null;
  }

  *whenIReceiveReset() {
    this.goto(209, -3);
  }

  *whenIReceiveCheck() {
    if (this.touching(Color.rgb(201, 255, 0))) {
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
