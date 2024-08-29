/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("uiterlijk1", "./Sprite2/costumes/uiterlijk1.svg", {
        x: 58.742478938825286,
        y: 16.25,
      }),
    ];

    this.sounds = [new Sound("plop", "./Sprite2/sounds/plop.wav")];

    this.triggers = [];
  }
}
