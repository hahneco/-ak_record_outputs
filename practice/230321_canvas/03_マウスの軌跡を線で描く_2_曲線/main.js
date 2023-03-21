'use strict'

let ctx; //し初期化
let points = []; // 線の軌跡(座標を保存する配列)

function init() {
  console.log("canvas練習 init読み込み");

  let canvas = document.getElementById("canvas"); // canvas定義
  ctx = canvas.getContext("2d"); // 描画コンテキスト取得

  ctx.strokeStyle = "tomato";
  // ctx.fillStyle = "skyblue";

  canvas.onmousedown = mymousedown; // マウス押下時のイベントハンドラ登録。
  canvas.onmousemove = mymousemove; // マウス押下時のイベントハンドラ登録。
  canvas.onmouseup = mymouseup; // マウスリリース時のイベントハンドラ登録。
}

function mymousedown(e) {
  console.log("mouse 押下")

  points = [
    {
      x: e.offsetX,
      y: e.offsetY
    }
  ]
  console.log("mymousemove 起点:" + points[0].x + "," + points[0].y)
}

function mymousemove(e) {
  // マウス押下時の座標をリストに保すする。
  if (points.length > 0) {
    // すでに座標が保存されている場合(=マウス押下時)のみ追加
    points.push(
      {
        x: e.offsetX,
        y: e.offsetY
      }
    )
    paint();
    // console.log(points)
  }
}

function mymouseup(e) {
  console.log("mouse リリース")
  // console.log(e)

  // マウスリリース時に配列をクリアする。
  points = [];
}

function paint() {
  ctx.clearRect(0, 0, 500, 500); // 背景をクリア
  if (points.length <= 1) {
    return;
  }

  // 配列内の座標を順番にlineToで描画
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 0; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.stroke();
}
