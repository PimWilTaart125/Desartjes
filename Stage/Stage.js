/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("achtergrond1", "./Stage/costumes/achtergrond1.svg", {
        x: 252.5,
        y: 214.5,
      }),
      new Costume("achtergrond2", "./Stage/costumes/achtergrond2.svg", {
        x: 0,
        y: 0,
      }),
    ];

    this.sounds = [new Sound("plop", "./Stage/sounds/plop.wav")];

    this.triggers = [];

    this.vars.mijnVariabele = "Jef";
    this.vars.qsd = "Marc+";
    this.vars.gh = "Dirk";
    this.vars.bgfv = "Herman";
    this.vars.fdgbv = "Ria";
    this.vars.hjes = "Eric+";
    this.vars.aze = "Geert+";
    this.vars.sdf = "Lutgarde";
    this.vars.Just = 5;
    this.vars.Lvl = 2;

    this.watchers.mijnVariabele = new Watcher({
      label: "mijn variabele",
      style: "large",
      visible: true,
      value: () => this.vars.mijnVariabele,
      x: 240,
      y: 180,
    });
    this.watchers.qsd = new Watcher({
      label: "qsd",
      style: "large",
      visible: true,
      value: () => this.vars.qsd,
      x: 240,
      y: 141,
    });
    this.watchers.gh = new Watcher({
      label: "gh",
      style: "large",
      visible: true,
      value: () => this.vars.gh,
      x: 240,
      y: 102,
    });
    this.watchers.bgfv = new Watcher({
      label: "bgfv",
      style: "large",
      visible: true,
      value: () => this.vars.bgfv,
      x: 240,
      y: 63,
    });
    this.watchers.fdgbv = new Watcher({
      label: "fdgbv",
      style: "large",
      visible: true,
      value: () => this.vars.fdgbv,
      x: 240,
      y: 17,
    });
    this.watchers.hjes = new Watcher({
      label: "hjes",
      style: "large",
      visible: true,
      value: () => this.vars.hjes,
      x: 240,
      y: -37,
    });
    this.watchers.aze = new Watcher({
      label: "aze",
      style: "large",
      visible: true,
      value: () => this.vars.aze,
      x: 240,
      y: -140,
    });
    this.watchers.sdf = new Watcher({
      label: "sdf",
      style: "large",
      visible: true,
      value: () => this.vars.sdf,
      x: 240,
      y: -88,
    });
    this.watchers.Just = new Watcher({
      label: "# just",
      style: "normal",
      visible: true,
      value: () => this.vars.Just,
      x: 485,
      y: 180,
    });
  }
}
