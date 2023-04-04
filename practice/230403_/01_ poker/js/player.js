'use strict';

// プレイヤー(playerくクラスの定義モジュール
import Card from "./card.js";

/*
Player クラス
*/
export default class Player {
  /*
  プロパティ
  */
  #cards; // プレイヤーの手札
  #nodes; // 手札のノード

  /*
  プレイヤーの手札
  */
  get cards() {
    return this.#cards;
  }

  /*
  手札のノード（list）
  */
  get nodes() {
    return this.#nodes;
  }

  /*
  選択しているノード（list）
  */
  get selectedNodes() {
    return this.#nodes.filter((node) => {
      node.classList.contains("selected");
    })
  }

  /*
  コンストラクタ
  */
  constructor(selector) { // クラスの初期化関数
    // プロパティを初期化する
    this.#nodes = Array.from(document.querySelectorAll(selector)); // ノードリストを配列オブジェクトに変換
    this.#cards = []; // 空の配列を準備
  }

  /*
  手札を描画する
  */
  displayCard(){};

  /*
  新しいカードを手札に追加する
  */
  addCard(){};

  /*
  交換するカードを選択する
  */
  selectedCard(){};

  /*
  山札からカードを引いて交換する
  */
  drawCard(){};
}
