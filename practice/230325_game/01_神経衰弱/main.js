'use strict'

/*

# 神経衰弱プログラムをつくる
## 目標
* Arrayオブジェクトのprototypeを使ってみる
* タイマーの使い方に慣れる

*/

let timer = NaN; // クリアまでの時間計測用タイマー
let flipTimer = NaN; // 裏に戻すためのタイマー
let score = 0; // スコア
let prevCard = null; // 一枚目に裏返したカード
let startTime = null; // ゲーム開始時刻


// ################################################## イベント
function init() {  // 初期化関数
  console.log("init読み込み");

  let table = document.getElementById("table"); // tableへの参照
  let cards = [];

  // カードの数字を配列に格納する。(２枚セット)
  for (let i = 0; i < 10; i++) {
    cards.push(i + 1);
    cards.push(i + 1);
  }
  console.log(cards);
  cards.shuffle();
  console.log(cards);

  // カードを作成
  for (let i = 0; i < 4; i++) { // 行
    let tr = document.createElement("tr");
    table.appendChild(tr);

    for (let j = 0; j < 5; j++) { // 列
      let td = document.createElement("td");
      td.className = "card back"; // プロパティ追加
      td.number = cards[i * 5 + j];
      td.onclick = flip; // click時のevent handlerセット
      tr.appendChild(td);
    }
  }

  table.addEventListener( // 初回table押下でタイマーすスタートする
    'click',
    function () {
      // alert('clicked');
      startTime = new Date(); // ゲーム開始時間の保存
      timer = setInterval(tick, 1000); // タイマー開始
    },
    { once: true }
  );
}

// ################################################## 関数
// shuffle関数
// Fisher-Yatesというアルゴリズムを使った方法でshuffle関数を作ってみる
Array.prototype.shuffle = function () { // Array(配が型コンストラクタ)のprototypeプロパティにshuffle関数をセット
  let i = this.length;
  while (i) {
    let j = Math.floor(Math.random() * i);
    let t = this[--i];
    this[i] = this[j];
    this[j] = t;
  }
  return this;
}

// タイマー関数
function tick(e) {
  let now = new Date();
  let elapsed = Math.floor((now.getTime() - startTime.getTime()) / 1000);
  document.getElementById("time").textContent = elapsed; // 経過時間の表示
}

function scoreShow() {
  let scoreShow = document.getElementById("score-show");
  scoreShow.textContent = score;
  // console.log(score);
}

// flip関数
function flip(e) {
  let src = e.target;
  // console.log(src.textContent);
  // console.log(flipTimer);

  if (flipTimer || src.textContent != "") { // すでに2枚反転or反転済の場合のclick時はなにもしない
    return; // 何も行わずに関数を抜ける
  }

  let num = src.number;
  // console.log(src.number);
  src.className = "card";
  src.textContent = num;

  if (prevCard == null) { // 1枚目の場合、記録して関数を抜ける
    prevCard = src;
    return; // 何も行わずに関数を抜ける
  }

  if (prevCard.number == num) { // 2枚目のカード一致を判定する
    if (++score == 10) {
      clearInterval(timer); // 全て揃ったらタイマーを止める
    }
    prevCard = null;
    clearTimeout(flipTimer); // 裏返すタイマーを止める
  } else {
    flipTimer = setTimeout(function () {
      src.className = "card back"; // カードが不一致の場合、1秒後にカード２枚を裏返しに戻す
      src.textContent = "";
      prevCard.className = "card back";
      prevCard.textContent = "";
      prevCard = null;
      flipTimer = NaN;
    }, 1000); // １秒後に無名関数実行
  }
  scoreShow();
}
