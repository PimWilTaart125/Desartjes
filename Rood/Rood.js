/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Rood extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("uiterlijk1", "./Rood/costumes/uiterlijk1.svg", {
        x: 17.889995574951172,
        y: 15.75,
      }),
      new Costume("uiterlijk2", "./Rood/costumes/uiterlijk2.svg", {
        x: 93.70699516871122,
        y: 11.827735644637045,
      }),
    ];

    this.sounds = [new Sound("plop", "./Rood/sounds/plop.wav")];

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
    this.goto(204, 116);
  }

  *whenIReceiveCheck() {
    if (this.touching(Color.rgb(255, 0, 0))) {
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
