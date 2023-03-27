'use strict'

// 初期化
let ctx; // 描画コンテキスト
let score = 0; // スコア
let prob = 0.96; // 落下確率
let basketX = 0; // カゴの座標
let timerId = NaN; // タイマーID
let basket, chick, egg1, egg2; // 各種画像
let eggs = []; // 卵の配列
let back; // 背景画像

let rectLeft = 0; // canvasの起点X
let rectTop = 0; // canvasの起点Y

onload = function () {
  let field = document.getElementById("field");
  ctx = document.getElementById("field").getContext("2d"); // 2D描画コンテキストセット
  ctx.font = "32px 'Times New Roman'";
  basket = document.getElementById("basket");
  chick = document.getElementById("chick");
  egg1 = document.getElementById("egg1");
  egg2 = document.getElementById("egg2");
  back = document.getElementById("back");

  timerId = setInterval(tick, 50); // tick関数を50ミリ秒ごとに実行する
  window.onmousemove = (e) => {
    let rect = e.target.getBoundingClientRect();
    rectLeft = rect.left;
    rectTop = rect.top;

    basketX = e.clientX - rectLeft; // マウスのX座標をカゴの座標に反映 //clientX = クライアント領域での座標値
  };
};

function tick() {
  ctx.drawImage(back, 0, 0); // 背景画像を描画
  ctx.drawImage(basket, basketX - 50, 500); // カゴ描画
  if (Math.random() > prob) {
    eggs.push({ x: Math.random() * 500, y: 1 }); // 卵ついか(Arrayのpushメソッド)
  }
  let prev = eggs.length; // 現在の卵の数
  eggs = eggs.filter((e) => {
    return (
      e.y < 400 || e.y > 600 || e.x < basketX - 50 || e.x > basketX + 50
    );
  });
  if (prev != eggs.length) {
    score++; // 卵の数が変化=キャッチした
    prob -= 0.001;
  }

  ctx.fillStyle = "green";
  ctx.fillText("Score:" + score, 400, 250);
  eggs.forEach((e) => {
    e.y += e.y * 0.1;
    if (e.y < 50) {
      ctx.drawImage(chick, e.x, 10);
    } else {
      ctx.drawImage(egg1, e.x, e.y);
    }

    if (e.y > 550) {
      clearInterval(timerId);
      ctx.fillText("GAME OVER", 200, 300);
      ctx.drawImage(egg2, e.x - 50, 500);
    }
  });
}
