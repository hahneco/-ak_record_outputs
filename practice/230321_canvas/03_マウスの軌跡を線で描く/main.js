'use strict'

let ctx, p0, p1; // 初期化

function init() {
  console.log("canvas練習 init読み込み");

  let canvas = document.getElementById("canvas"); // canvas定義
  ctx = canvas.getContext("2d"); // 描画コンテキスト取得

  ctx.strokeStyle = "tomato";
  // ctx.fillStyle = "skyblue";

  canvas.onmousedown = mymousedown; // マウス押下時のイベントハンドラ登録。
  canvas.onmouseup = mymouseup; // マウスリリース時のイベントハンドラ登録。
}

function mymousedown(e) {
  console.log("mouse 押下")
  // console.log(e)

  p0 = { // マウス押下時の座標を変数p0に保存。
    x: e.offsetX,
    y: e.offsetY
  };
  // console.log(p0)
  console.log(p0.x)
}

console.log("グローバルコンテキストp0"+ p0)

function mymouseup(e) {
  console.log("mouse リリース")
  // console.log(e)

  p1 = { // マウス押下時の座標を変数p0に保存。
    x: e.offsetX,
    y: e.offsetY
  };
  // console.log(p1)

  // ctx.clearRect(0, 0, 500, 500); // canvasの内容をクリアする。(クリアする範囲は明示的に指定する必要がある。)
  ctx.beginPath(); // コンテキスト初期化

  ctx.moveTo(p0.x, p0.y); // p0をpathの開始点に。
  // ctx.lineTo(e.offsetX, e.offsetY);
  ctx.lineTo(p1.x, p1.y); // p1をpathの終点に。
  ctx.stroke();
}

console.log("グローバルコンテキストp1"+ p1)
