'use strict';

import Util from "./Util.js";


/*
Gameクラス
*/
export default class Game {

  /**
  * コンストラクタ
  */
  constructor() {
    // イベントハンドラを登録する。
    this.#setupEvents();
  }

  /**
  * ゲームを実行する(runメソッドの制御用moduleはapp.jsに記述する)
  */
  run() { };


  #onClickCard(event) {
    console.log("clicked!");
  };

  #onDraw(event) {
    console.log("clicked!");
  };

  #onReplay(event) {
    console.log("clicked!");
  };

  /**
   * イベントハンドラを登録する
   */
  #setupEvents() {
    // 手札のクリックイベント
    Util.addEventListener(".card.you", "click", this.#onClickCard.bind(this));
    // Drawボタンのクリックイベント
    Util.addEventListener("#draw", "click", this.#onDraw.bind(this));
    // Replayボタンのクリックイベント
    Util.addEventListener("#replay", "click", this.#onReplay.bind(this));
  }
}
