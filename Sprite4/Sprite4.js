/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("uiterlijk1", "./Sprite4/costumes/uiterlijk1.svg", {
        x: 0,
        y: 0,
      }),
    ];

    this.sounds = [new Sound("plop", "./Sprite4/sounds/plop.wav")];

    this.triggers = [];
  }
}
