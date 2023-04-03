'use strict';

// ユーティリティの定義モジュール

// Util クラス
export default class Util {

  // 指定した時間だけ待つ
  // comとyouが互いの手札を山札と交換する時に使用する。
  static sleep = (wait = 1500) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), wait);
    });
  };

  // イベントハンドラ
  // 手札を選択した時、Draw/Replayボタンclick時のイベントハンドラ
  static addEventListener = (selector, event, handler) => {
    document.querySelectorAll(selector).forEach((e) => e.addEventListener(event, handler));
  };

  // 数値を合計する
  // 役のカードランク計算用
  static sum = (...numbers) => {
    let sum = 0;
    numbers.forEach((e) => {
      sum += e;
    });
    return sum;
  };
}
