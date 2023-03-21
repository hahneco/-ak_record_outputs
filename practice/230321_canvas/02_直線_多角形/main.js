'use strict'

let ctx;

function init() {
  console.log("init読み込み!")

  let canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  ctx.strokeStyle = "tomato";
  ctx.fillStyle = "skyblue";

  drawTriangle(100, 10, false, false);
  drawTriangle(200, 10, true, false);
  drawTriangle(300, 10, false, true);
  drawTriangle(400, 10, true, true);
}

function drawTriangle(x, y, isClose, isFill) {
  ctx.beginPath(); // パスの初期化
  ctx.moveTo(x, y);
  ctx.lineTo(x + 80, y);
  ctx.lineTo(x + 80, y + 80);
  if (isClose) {
    ctx.closePath(); // パスを閉じる
  }
  if (isFill) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}
