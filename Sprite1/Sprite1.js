/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("uiterlijk1", "./Sprite1/costumes/uiterlijk1.svg", {
        x: 55.65301621221144,
        y: 13.427807396646074,
      }),
    ];

    this.sounds = [new Sound("plop", "./Sprite1/sounds/plop.wav")];

    this.triggers = [];
  }
}
