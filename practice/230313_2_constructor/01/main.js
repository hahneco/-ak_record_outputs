'use strict'

/*
// 赤鉛筆
let penR = {
  color: "red",
  length: 5,
  draw: function () {
    this.length -= 0.01;
  }
}
// 緑鉛筆
let penG = {
  color: "green",
  length: 15,
  draw: function () {
    this.length -= 0.01;
  }
}
// 青鉛筆
let penB = {
  color: "blue",
  length: 7,
  draw: function () {
    this.length -= 0.01;
  }
}
*/

// ↑コンストラクタで量産する
function Pen(color, length) {
  this.color = color;
  this.length = length;
  this.draw = function () {
    this.length -= 0.01;
  }
}

// インスタンス（オブジェクト）作成
let penR = new Pen("red", 5);
let penG = new Pen("green", 15);
let penB = new Pen("blue", 7);
let pen = penR; // 初期のペン

function stroke() {
  pen.draw();
  document.getElementById('color').textContent = pen.color;
  document.getElementById('length').textContent = pen.length;
}

function pickR() {
  pen = penR;
}

function pickG() {
  pen = penG;
}

function pickB() {
  pen = penB;
}

console.log(pen.color);
console.log(pen.length);

// #############
/*
## コンストラクタ（関数）
特定のオブジェクトを作成するために定義された関数。
※クラス（class構文）でもオブジェクト作成が可能。

### 普通の関数とコンストラクタの区別?
* 関数の宣言をみただけではわからない。
* 区別は呼び出し側で行われる。
* コンストラクタの場合はnew演算子をキーワードとして置く
  newがない場合は通常の関数として実行される。
* コンストラクタ関数の引数は個々のオブジェクトのプロパティを初期化する値を指定するのが一般的。
*/
