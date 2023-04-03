'use strict';

import Util from "./util.js";

// 役クラスの定義モジュール

// Pair クラス
// 下記のメソッドを持つ
// * 9種類の役の成否を判定するメソッド
// * ↑これらの中で成立条件を満たす最も強い役を判定するメソッド

export default class Pair {

  // プロパティ =================================
  static #rank = 0; // クラス内のみで使用するのでprivateとする。


  // メソッド =================================
  // ロイヤルストレートフラッシュ の成否を判定する
  static isRoyalStraightFlush = (cards) => { // 引数のcardsはrankの低い順にsortして渡すこと
    // 役の判定フラグ(true:成立, false:不成立)
    let isPair = false;

    // 5枚とも同じsuit(絵柄)でrankが[10,11,12,13,14]
    if (
      cards[0].suit === cards[1].suit && // 1,2枚目が同じsuit(絵柄)
      cards[0].suit === cards[2].suit && // 1,3枚目が同じsuit(絵柄)
      cards[0].suit === cards[3].suit && // 1,4枚目が同じsuit(絵柄)
      cards[0].suit === cards[4].suit && // 1,5枚目が同じsuit(絵柄)
      cards[1].rank === 10 && // 1枚目のrankが10
      cards[1].rank === 11 && // 1枚目のrankが11
      cards[1].rank === 12 && // 1枚目のrankが12
      cards[1].rank === 13 && // 1枚目のrankが13
      cards[1].rank === 14 // 1枚目のrankが14
    ) {
      isPair = true;

      // 役の成立判定のついでにrankを計算しておく。
      // 5枚のrankを合計する
      this.#rank = Util.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
    }
    return isPair;
  };

  // ストレートフラッシュ の成否を判定する
  // suit(絵柄)が5枚とも同じでrankが連続する
  static isStraightFlush = (cards) => {
    // 役の判定フラグ(true:成立, false:不成立)
    let isPair = false;

    // 5枚とも同じ絵柄でrankが連続
    if (
      cards[0].suit === cards[1].suit && // 1,2枚目が同じsuit(絵柄)
      cards[0].suit === cards[2].suit && // 1,3枚目が同じsuit(絵柄)
      cards[0].suit === cards[3].suit && // 1,4枚目が同じsuit(絵柄)
      cards[0].suit === cards[4].suit && // 1,5枚目が同じsuit(絵柄)
      cards[0].rank + 1 === cards[1].rank && // 連続
      cards[1].rank + 1 === cards[2].rank && // 連続
      cards[2].rank + 1 === cards[3].rank && // 連続
      cards[3].rank + 1 === cards[4].rank // 連続
    ) {
      isPair = true;

      // 役の成立判定のついでにrankを計算しておく。
      // 5枚のrankを合計する
      this.#rank = Util.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
    }

    return isPair;
  };

  // フォーカード の成否を判定する
  static isFourCardFlush = (cards) => {
    // 役の判定フラグ(true:成立, false:不成立)
    let isPair = false;

    // カード4枚のrankが同じ。
    // ※rankが昇順でsortされて渡されれば、1-4枚目,2-5枚目のどちらかが同じという2パターンのみとなる。
    // 1-4枚目のrankが同じ
    if (
      cards[0].rank === cards[1].rank &&
      cards[1].rank === cards[2].rank &&
      cards[2].rank === cards[3].rank &&

      // 1,5枚目のrankが異なる
      cards[0].rank !== cards[4].rank
    ) {
      isPair = true;

      // 1-4枚目のrankを計算しておく
      this.#rank = Util.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank);
    } else if (
      // 2-5枚目のrankが同じ
      cards[1].rank === cards[2].rank &&
      cards[2].rank === cards[3].rank &&
      cards[3].rank === cards[4].rank &&

      // 1,2枚目のrankが異なる
      cards[0].rank !== cards[1].rank
    ) {
      isPair = true;

      // 2-5枚目のrankを計算しておく
      this.#rank = Util.sum(cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
    }

    return isPair;
  };

  // フルハウス の成否を判定する
  // 5枚のうち、3枚が同じrankで残り2枚も同じrank(例: 3,3,k,3,k)
  // ※rankが昇順でsortされて渡されれば、[1-3枚目,4-5枚目][1-2枚目,3-5枚目]が揃っているという2パターンのみとなる。
  static isFullHouse = (cards) => {
    // 役の判定フラグ(true:成立, false:不成立)
    let isPair = false;

    if (
      cards[0].rank === cards[1].rank &&

      // 2-3枚目のrankが異なる
      cards[1].rank !== cards[2].rank &&
      cards[2].rank === cards[3].rank && // 3-4枚目のrankが同じ
      cards[2].rank === cards[4].rank // 4-5枚目のrankが同じ
    ) {
      isPair = true;

      // 5枚のrankを合計する
      this.#rank = Util.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
    } else if (
      cards[0].rank === cards[1].rank &&
      cards[1].rank === cards[2].rank &&

      // 2-3枚目のrankが同じ
      cards[2].rank !== cards[3].rank && // 3-4枚目のrankが違う
      cards[3].rank === cards[4].rank // 4-5枚目のrankが同じ
    ) {
      isPair = true;

      // 5枚のrankを合計する
      this.#rank = Util.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
    }

    return isPair;
  };

  // フラッシュ の成否を判定する
  // suit(絵柄)が5枚とも同じ。(ロイヤルストレートフラッシュ・ストレートフラッシュの判定条かからrank関係の判定を削除したもの)
  static isFlush = (cards) => {
    // 役の判定フラグ(true:成立, false:不成立)
    let isPair = false;

    if (
      cards[0].suit === cards[1].suit &&
      cards[1].suit === cards[2].suit &&
      cards[2].suit === cards[3].suit &&
      cards[3].suit === cards[4].suit
    ) {
      isPair = true;

      // 5枚のrank計算
      this.#rank = Util.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
    }

    return isPair;
  };

  // ストレート の成否を判定する
  // ストレートは5枚のrankが連続する場合に成立
  static isStraight = (cards) => {
    // 役の判定フラグ(true:成立, false:不成立)
    let isPair = false;

    if (
      cards[0].rank +1 === cards[1].rank &&
      cards[1].rank +1 === cards[2].rank &&
      cards[2].rank +1 === cards[3].rank &&
      cards[3].rank +1 === cards[4].rank
    ) {
      isPair = true;

      // 5枚のrank計算
      this.#rank = Util.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
    }

    return isPair;
  };

  // スリーカード の成否を判定する
  // 5枚のうち、3枚が同じrank
  // ※rankが昇順でsortされて渡されれば、[1-3枚目][2-4枚目][3-5枚目]が揃っているという3パターンのみとなる。
  static isThreeCard = (cards) => {
    // 役の判定フラグ(true:成立, false:不成立)
    let isPair = false;

    if (
      cards[0].rank === cards[1].rank &&
      cards[0].rank === cards[2].rank
    ) {
      isPair = true;

      // 1-3枚目のrankを合計する
      this.#rank = Util.sum(cards[0].rank, cards[1].rank, cards[2].rank);
    } else if (
      cards[1].rank === cards[2].rank &&
      cards[1].rank === cards[3].rank
    ) {
      isPair = true;

      // 2-4枚目のrankを合計する
      this.#rank = Util.sum(cards[1].rank, cards[2].rank, cards[3].rank);
    } else if (
      cards[2].rank === cards[3].rank &&
      cards[2].rank === cards[4].rank
    ) {
      isPair = true;

      // 3-5枚目のrankを合計する
      this.#rank = Util.sum(cards[2].rank, cards[3].rank, cards[4].rank);
    }

    return isPair;
  };

  // ツーペア の成否を判定する
  // 同じrankのペアが2組ある場合に成立。
  // [1-2, 3-4], [1-2, 4-5], [2-3, 4-5]の3パターン
  static isTwoPair = (cards) => {
    // 役の判定フラグ(true:成立, false:不成立)
    let isPair = false;

    // [1-2, 3-4]
    if (
      cards[0].rank === cards[1].rank &&
      cards[2].rank === cards[3].rank
    ) {
      isPair = true;

      // 1-2,3-4枚目のrankを合計する
      this.#rank = Util.sum(cards[0].rank, cards[1].rank, cards[2].rank, cards[3].rank);
    } else if ( // [1-2, 4-5]
      cards[0].rank === cards[1].rank &&
      cards[3].rank === cards[4].rank
    ) {
      isPair = true;

      // 2-3,4-5枚目のrankを合計する
      this.#rank = Util.sum(cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
    } else if ( // [2-3, 4-5]
      cards[1].rank === cards[2].rank &&
      cards[3].rank === cards[4].rank
    ) {
      // 1-2,4-5枚目のrankを合計する
      this.#rank = Util.sum(cards[1].rank, cards[2].rank, cards[3].rank, cards[4].rank);
    }

    return isPair;
  };

  // ワンペア の成否を判定する
  // 同じrankのペアが1組
  // [1-2], [2-3], [3-4], [4-5]がセットの4通り
  static isOnePair = (cards) => {
    // 役の判定フラグ(true:成立, false:不成立)
    let isPair = false;

    if (
      cards[0].ranks === cards[1].rank
    ) {
      isPair = true;

      // 1-2枚目のrankを合計する
      this.#rank = Util.sum(cards[0].rank, cards[1].rank);
    } else if (
      cards[1].ranks === cards[2].rank
    ) {
      isPair = true;

      // 2-3枚目のrankを合計する
      this.#rank = Util.sum(cards[1].rank, cards[2].rank);
    } else if (
      cards[2].ranks === cards[3].rank
    ) {
      isPair = true;

      // 3-4枚目のrankを合計する
      this.#rank = Util.sum(cards[2].rank, cards[3].rank);
    } else if (
      cards[3].ranks === cards[4].rank
    ) {
      isPair = true;

      // 4-5枚目のrankを合計する
      this.#rank = Util.sum(cards[3].rank, cards[4].rank);
    }

    return isPair;
  };

  // 成立条件を満たす最も強い役を判定する
  static judge = (cards) => {
    // 判定結果
    let result = null;

    // 役つ強い順にsort
    // isRoyalStraightFlush
    if (this.isRoyalStraightFlush(cards)) {
      result = {
        strength: 9,
        rank: this.rank,
        hand: "ロイヤルストレートフラッシュ"
      }
    }

    if (this.isStraightFlush(cards)) {

    }

    if (this.isFourCardFlush(cards)) {

    }

    if (this.isFullHouse(cards)) {

    }

    if (this.isFlush(cards)) {

    }

    if (this.isStraight(cards)) {

    }

    if (this.isThreeCard(cards)) {

    }

    if (this.isTwoPair(cards)) {

    }

    if (this.isOnePair(cards)) {

    }

  };
}
