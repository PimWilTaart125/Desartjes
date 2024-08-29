/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Lichtgroen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("uiterlijk1", "./Lichtgroen/costumes/uiterlijk1.svg", {
        x: 0,
        y: 0,
      }),
      new Costume("uiterlijk2", "./Lichtgroen/costumes/uiterlijk2.svg", {
        x: 75.30998611450195,
        y: 15.981249999999989,
      }),
    ];

    this.sounds = [new Sound("plop", "./Lichtgroen/sounds/plop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Reset" }, this.whenIReceiveReset),
      new Trigger(Trigger.BROADCAST, { name: "Check" }, this.whenIReceiveCheck),
      new Trigger(Trigger.BROADCAST, { name: "lvl 2" }, this.whenIReceiveLvl2),
      new Trigger(Trigger.BROADCAST, { name: "lvl3" }, this.whenIReceiveLvl3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "uiterlijk1";
    /* TODO: Implement sensing_setdragmode */ null;
  }

  *whenIReceiveReset() {
    this.goto(208, 24);
  }

  *whenIReceiveCheck() {
    if (this.touching(Color.rgb(0, 255, 106))) {
      this.stage.vars.Just++;
    }
  }

  *whenIReceiveLvl2() {
    this.costume = "uiterlijk2";
  }

  *whenIReceiveLvl3() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.visible = true;
  }
}
