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
    return this.#nodes.filter((node) => { node.classList.contains("selected");
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
  displayCard(front) {
    // 手札のループ
    this.cards.forEach((card, index) => {
      // 表示する画像名
      let name = String(card.index).padStart(2, "0") + ".png"; // 一桁のrankには数字の前に「0」をつける
      // 裏面を表示する場合は画像を変更（カード交換前のPCの手札などに使用する）
      if (!front) {
        name = "red.png";
      }
      // カードの画像をセット
      this.nodes[index].setAttribute("src", "images/" + name);
    });
  }

  /*
  新しいカードを手札に追加する
  */
  addCard(newCard) {
    // 新しいカードを手札の最後尾に追加
    this.cards.push(newCard);
    // 最後尾のノードにカードのインデックス番号を書き込む
    this.nodes[this.cards.length - 1].dataset.index = newCard.index;
  }

  /*
  交換するカードを選択する
  */
  selectCard(node) {
    // 選択状態を表すCSSクラス名を切り替える
    node.classList.toggle("selected");
  }

  /*
  山札からカードを引いて交換する
  */
  drawCard(newCard) {
    // 選択しているノードを先頭から一つ取り出す。
    const node = this.selectedNodes.shift();
    // このノードに書き込まれたインデックス番号を返す
    const index = parseInt(node.dataset.index);
    // このコードに置かれた手札の位置を検索する
    const pos = this.cards.findIndex((card) =>
      card.index === index);
    // この手札を複製して退避しておく
    // nodeにおかれたカードが何番目にあるのかを表す位置が取得される。
    const oldCard = this.slice(pos, pos + 1)[0];
    // この手札を新しいカードで置き換える
    this.cards[pos] = newCard;
    // このノードに新しいカードのインデックス番号を書き込む
    node.dataset.index = newCard.index;
    // ノードを未選択の状態に戻す
    node.classList.remove("selected");
    // 退避したカードを返す
    return oldCard;
  }
}
