'use strict';


console.log("クラス演習")

// クラス===================================
class Player {
  // プロパティ登録
  #energy;
  #power;

  // コンストラクタ(インスタンス化されるときの初期化関数)
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
  // 攻撃
  attack(enemy) { // class内のメソッドはfunctionつけない
    if (Math.random() < 0.3) {
      // 30%の確率で体力を6回復する
      this.#heal(6);
    } else {
      // それ以外の場合は、攻撃して相手の体力を減らす
      enemy.energy -= this.power;
      console.log(this.power + "ダメージを与えた！");
    }
  }
  // 体力回復
   // class内のメソッドはfunctionつけない。&メソッドにも#が付けられる
  #heal(recovery) { // Playerクラスのみが使えるメソッドなので、外部アクセスを防ぐ
    this.energy += recovery;
    console.log(recovery + "回復した！");
  }
}

// Playerクラスを継承して、ドラゴンクラスを作る
class Dragon extends Player {
  // コンストラクタ
  constructor(energy, power) {
    super(energy, power);
  }

  // メソッド
  attack(enemy) { // ドラゴンは回復しないのでsuperコンストラクタ呼び出し後に再定義。
    enemy.energy -= this.power;
    console.log(this.power + "のダメージを与えた!");
  }
}


// ゲームのメインプログラム===================================

// インスタンス生成
const player = new Player(15, 5);
const dragon = new Dragon(25, 4);

// どちらかの体力が尽きるまで闘う
while (player.energy > 0 && dragon.energy > 0) {
  // 主人公の行動
  console.log("あなたの攻撃! ¥n");
  player.attack(dragon);
  if (dragon.energy <= 0) {
    console.log("ドラゴンを倒した!");
    break;
  }

  // ドラゴンの行動
  console.log("ドラゴンの攻撃!");
  dragon.attack(player);
  if (player.energy <= 0) {
    console.log("ドラゴンに敗れた! ¥n");
    break;
  }
}

console.log("ぐろーばる")
