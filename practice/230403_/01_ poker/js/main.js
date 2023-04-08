'use strict';

import Player from "./player.js";
import Com from "./com.js";
import Card from "./card.js";
import Util from "./Util.js";



/*
Gameクラス
*/
export default class Game {

  /**
 * プロパティ
 */
  #you; // you
  #com; // コンピューター
  #cards; // 山札のカード
  #isRunning; // ゲーム実行状況(true:実行中, false:終了)


  /**
  * コンストラクタ
  */
  constructor() {
    // プロパティの初期化
    this.#you = null;
    this.#com = null;
    this.#cards = [];
    this.#isRunning = false;

    // イベントハンドラを登録する。
    this.#setupEvents();
  }

  /**
  * ゲームを実行する(runメソッドの制御用moduleはapp.jsに記述する)
  */
  run() {
    // ゲームの状態を初期化する
    this.#initialize();
  };

  #initialize() {
    // ① プレイヤー生成
    this.#you = new Player(".card.you");
    this.#com = new Com(".card.com");
    // ② 山札のカード生成
    this.#cards = [];
    [...Array(52)].map((_, index) => {
      // インデックス番号を持つカードを生成して山札に追加する
      this.#cards.push(new Card(index + 1));
    });
    // ③ 山札のカードをシャッフル
    this.#shuffleCard();
    console.log(this.#cards)

    // ④ 山札のカードを5枚ずつplayerに配る
    this.#dealCard(this.#you, 5);
    this.#dealCard(this.#com, 5);

    // ⑤ game 実行状況を更新(player,cardの状態の初期化が完ししている)
    this.#isRunning = true;

    // ⑥ 画面の描画更新
    this.#updateView();
  }

  #shuffleCard() {
    // 100回繰り返す
    [...Array(100)].forEach(() => {
      // 山札から2枚かカードをrandomに選んで交換
      const j = Math.floor(Math.random() * this.#cards.length);
      const k = Math.floor(Math.random() * this.#cards.length);
      [this.#cards[j], this.#cards[k]] = [this.#cards[k], this.#cards[j]];
    }); // 選んだ2枚のcardを交換するために、分割代入を使用する(退避用の変数が不要)
  };

  #dealCard(player, n) {
    // n回繰り返す
    [...Array(n)].map(() => {
      // 山札からカードを1枚取り出してプレイヤーに配る
      player.addCard(this.#cards.pop());
    });
  }

  #updateView() {
    // プレイヤーのカードを描画する
    this.#you.displayCard(true);
    // 相手のカードを描画する
    this.#com.displayCard(!this.#isRunning);
    // ボタンを描画する
    if (this.#isRunning) {
      document.querySelector("#replay").setAttribute("disabled", true);
      document.querySelector("#draw").removeAttribute("disabled");
    } else {
      document.querySelector("#replay").removeAttribute("disabled");
      document.querySelector("#draw").setAttribute("disabled", true);
    }
  }

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
