'use strict';

// 相手(COM)クラスの定義モジュール
import Player from "./player.js";

/*
Com クラス
*/
export default class Com extends Player {

  /*
  コンストラクタ
  */
  constructor(selector) {
    // クラス継承のために、superでスーパークラスの定義を読み込んでおく
    // コンストラクタは今回はスーパークラスと同じでOK
    super(selector);
  }

  /*
  交換するカードを選択する
  */
  selectedCard() { // カード選択時にclickイベント等ないので、引数はなしでOK
    // 自動でカードを選択する

    // 交換する前せ成立している役の強さし調べる
    const strength = Pair.judge(this.cards).strength;

    // 役が成立していない場合
    if (strength === 0) {
      // 5枚とも交換する
      this.nodes.forEach((node) => {
        // node.classList.add("selected"); // Playersクラスのselected 関数にnodeを渡して実行すればOK
        node.classList.add("selected");
      })
    }
    // ワンペア
    else if (1 <= strength && strength <= 3) {
      // 役に加わっていないカードだけ交換する。
    }
    // それ以外の役がそろっている場合
    // else {
      // 1枚も交換しない
    // }
  }
}
