'use strict'

let ctx;

function init() {
  let canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d"); // コンテキスト取得
  ctx.font = "30px 'Times Roman'"; // フォント設定

  ctx.strokeStyle = "tomato";
  ctx.strokeText("strokeTextによる文字", 10, 50);

  ctx.fillStyle = "skyblue";
  ctx.fillText("fillTextによる文字", 10, 100);
}
