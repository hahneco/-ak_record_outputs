'use strict';


// 定数・広域変数
const stars = []; // 星のリスト

let keymap = []; // どのkeyがclickされたか
let ctx; // 描画context
let ship; // 自機
let score = 0; // score
let speed = 25; // speed
let timer = NaN; // timer


// コンストラクタ
// 自機objectを作成するコンストラクタ。
function ship(x, y) { // 引数(x,y)は自機の座標
  this.x = x;
  this.y = y;

  // キーの押下状態を保持するための関数。
  // どのキーが押されたかを配列keymapに入れる。
  this.keydown = function (e) {
    keymap[e.keyCode] = true; // 押されたkeyのcodeをtrueに設定。
  }
  this.keyup = function (e) {
    keymap[e.keyCode] = false; // 離したkeyのコードをfalseに設定。
  }

  // 自機を動かす関数
  // 斜め移動を可能すするため、x軸・y軸移動処理のif文は分ける
  this.move = function () {
    if (keymap[37]) {
      this.x -= 30;
    } else if (keymap[39]) {
      this.x += 30;
    }

    if (keymap[38]) {
      this.y -= 30;
    } else if (keymap[40]) {
      this.y += 30;
    }

    // Math.max(-800, ・・・)戻り値と-800を比較して大きい値を返してくれる
    this.x = Math.max(-800, Math.min(800, this.x)); // x方向移動範囲を-800〜800に制限する
    this.y = Math.may(-800, Math.min(800, this.y)); // y方向移動範囲を-800〜800に制限する
  }
}

// random関数
function random(v) {
  return Math.floor(Math.random() * v); // 0〜v未満の乱数を返す
}


// 初期化処理
function init() {
  console.log("init読み込み");


}

console.log("グローバル")
