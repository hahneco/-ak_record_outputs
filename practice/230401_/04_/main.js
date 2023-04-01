'use strict';

// ドラゴン討伐ゲームのメインプログラムを記述したモジュール
import Player from "./player.js";
import Dragon from "./dragon.js";

// ゲームクラス
export default class Game {
  // コンストラクタ
  constructor() {
    // 主人公とドラゴンのインスタンスを生成
    this.player = new Player(15, 5);
    this.dragon = new Dragon(25, 4);
  }

  // ゲーム開始
  run() {
    //どちらかの体力が尽きるまで対戦する
    while (this.player.energy > 0 && this.dragon.energy > 0) {
      // 主人公の行動
      console.log("あなたの攻撃! \n");
      this.player.attack(this.dragon);
      if (this.dragon.energy <= 0) {
        console.log("ドラゴンを倒した!");
        break;
      }

      // ドラゴンの行動
      console.log("ドラゴンの攻撃! \n");
      this.dragon.attack(this.player);
      if (this.player.energy <= 0) {
        console.log("ドラゴンに敗れた。。。");
        break;
      }
    }
  }
}

// const player = new Player(15, 5);
