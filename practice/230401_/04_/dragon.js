'use strict';

import Player from "./player.js";
// ドラゴンクラスを定義するモジュール
export default class Dragon extends Player {
  // コンストラクタ
  constructor(energy, power) {
    super(energy, power);
  }

  // 関数上書き
  attack(enemy) {
    enemy.energy -= this.power;
    console.log(this.power + "のダメージを与えた!");
  }
}
