'use strict';

// カードクラスの定義モジュール

// Cardクラス
export default class Card {

  // プロパティ  =========================
  #rank; // カードの数字(2〜14(J,Q,K,Aは11,12,13,14))
  #suit; // カードの絵柄（スート） 1:スペード、2:クローバー、3:ダイヤ、4:ハート
  #index; // インデックス番号(1〜52)

  // アクセサ  =========================
  // カードの数字
  get rank() {
    return this.#rank;
  }
  set rank(rank) {
    this.#rank = rank;
  }

  // カードの図柄
  get suit() {
    return this.#suit;
  }
  set suit(suit) {
    this.#suit = suit;
  }

  // カードのインデックス番号
  get index() {
    return this.#index;
  }
  set index(index) {
    this.#index = index;
  }

  // コンストラクタ =========================
  // 上記3つのプロパティに具体的な値を設定して初期化する。
  // 「rankとsuit」と「index」は計算によって互いに交換可能なので、引数はとりあえずindexを与える。
  constructor(index) {
    this.rank = ((index - 1) % 13) + 1;

    // Aはランク14とする
    if (this.rank === 1) {
      this.rank = 14;
    }

    this.suit = Math.floor((index - 1) / 13) - 1; // 小数点以下を切り捨て

    this.index = index;
  }
}
