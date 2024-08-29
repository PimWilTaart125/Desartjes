/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button1", "./Button1/costumes/button1.svg", {
        x: 13.447424892703822,
        y: 13.447421630901232,
      }),
    ];

    this.sounds = [new Sound("pop", "./Button1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Check" }, this.whenIReceiveCheck),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "lvl 2" }, this.whenIReceiveLvl2),
      new Trigger(Trigger.BROADCAST, { name: "lvl3" }, this.whenIReceiveLvl3),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.Lvl = 1;
    this.stage.vars.mijnVariabele = "Jef";
    this.stage.vars.qsd = "Marc+";
    this.stage.vars.bgfv = "Herman";
    this.stage.vars.gh = "Dirk";
    this.stage.vars.fdgbv = "Ria";
    this.stage.vars.hjes = "Eric+";
    this.stage.vars.sdf = "Lutgarde";
    this.stage.vars.aze = "Geert+";
  }

  *whenIReceiveCheck() {
    yield* this.wait(0.5);
    if (this.toNumber(this.stage.vars.Lvl) === 1) {
      if (this.toNumber(this.stage.vars.Just) === 5) {
        this.stage.vars.Lvl = 2;
        this.broadcast("Reset");
        this.broadcast("lvl 2");
      }
    } else {
      if (
        this.toNumber(this.stage.vars.Just) === 8 &&
        this.toNumber(this.stage.vars.Lvl) === 2
      ) {
        this.broadcast("lvl3");
      }
    }
  }

  *whenthisspriteclicked() {
    this.stage.vars.Just = 0;
    this.broadcast("Check");
  }

  *whenIReceiveLvl2() {
    yield* this.sayAndWait("Goed gedaan!", 2);
  }

  *whenIReceiveLvl3() {
    yield* this.sayAndWait("Goed gedaan!", 2);
  }
}
