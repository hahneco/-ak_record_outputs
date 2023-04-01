'use strict';

// 主人公クラスを定義するモジュール
export default class Player {
  #energy;
  #power;

  // コンストラクタ
  constructor(energy, power) {
    this.#energy = energy;
    this.#power = power;
  }

  // アクセサ
  get energy() {
    return this.#energy;
  }
  set energy(energy) {
    this.#energy = energy;
  }

  get power() {
    return this.#power;
  }
  set power(power) {
    this.#power = power;
  }

  // 関数
  attack(enemy) {
    if (Math.random() < 0.3) {
      // 30%の確率で体力を6回復
      this.#heal(6);
    } else {
      // それ以外の場合、攻撃して相手の体力を減らす
      enemy.energy -= this.power;
      console.log(this.power + "のダメージを与えた!");
    }
  }

  #heal(recovery) {
    this.energy += recovery;
    console.log(recovery + "回復した!");
  }
}
