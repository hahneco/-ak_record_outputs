'use strict'

// let ctx;

// function init() {
//   let canvas = document.getElementById("canvas");
//   ctx = canvas.getContext("2d"); // 描画コンテキスト取得

//   for (let i = 0; i < 12; i++) {
//     ctx.save(); // コンテキスト保存

//     let r = (Math.PI / 6) * i;
//     ctx.translate(100, 100); // 座標系の中心を移動
//     ctx.rotate(r); // 回転

//     ctx.beginPath(); // パスの開始
//     ctx.moveTo(0, -60);
//     ctx.lineTo(0, -50);
//     ctx.stroke(); // 線の描画

//     ctx.restore(); // コンテキスト復元
//   }
// }

let ctx, h, m, s; // 各変数の初期化

function gobj(id) {
  return document.getElementById(id); // 指定されたidの要素を返す
}

function init() {
  console.log("#clockでコンテキスト取得")

  ctx = gobj("clock").getContext("2d"); // 描画コンテキスト取得
  setInterval(tick, 1000); // タイマー開始
}

// メインループ
function tick() {
  let now = new Date(); // 現在時刻から時h,　分m, 秒s　を取得
  h = now.getHours() % 12;
  m = now.getMinutes();
  s = now.getSeconds();

  gobj("time").textContent = now.toTimeString();
  paint();
}

// 針の描画(rotation:角度、 length;長さ、　width:幅、　color:色)
function drawHand(rotation, length, width, color) {
  ctx.save();
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.translate(150, 150);
  ctx.rotate(rotation);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.restore(); // コンテキスト復元
}

function paint() {
  ctx.clearRect(0, 0, 300, 300) // クリア

  ctx.save();
  ctx.translate(150, 150);
  ctx.strokeStyle = "skyblue";
  let pitch = (Math.PI * 2) / 60; // 1分の角度

  for (let i = 0; i < 60; i++) {
    // 時計の周囲のメモリを描画
    ctx.beginPath();
    ctx.lineWidth = i % 5 == 0 ? 3 : 1
    ctx.moveTo(0, -120);
    ctx.lineTo(0, -140);
    ctx.stroke();
    ctx.rotate(pitch); // 座標系の回転
  }
  ctx.restore();

  // 時分秒から回転角度を計算
  let radH = ((Math.PI * 2) / 12) * h + (Math.PI * 2) / 12 * (m / 60);
  let radM = ((Math.PI * 2) / 60) * m;
  let radS = ((Math.PI * 2) / 60) * s;

  drawHand(radH, 80, 6, "skyblue");
  drawHand(radH, 120, 4, "skyblue");
  drawHand(radH, 140, 2, "tomato");
}
