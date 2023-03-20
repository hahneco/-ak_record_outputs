'use strict'

console.log("canvas")

function init() {
  console.log("init")

  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d"); // 絵筆などを格納するオブジェクト(context)

  // プロパティ（絵筆の属性）
  ctx.strokeStyle = "tomato"; //　線や輪郭の色
  ctx.fillStyle = "cornflowerblue"; // 塗りつぶしの色
  ctx.lineWidth = 10; // 線の幅
  ctx.lineCap = "rounds"; // 線の終端の形状。butt, round, squareの値が使用可能
  ctx.shadowColor = "cornflowerblue"; // 影の色
  ctx.shadowBlur = 10; // 影に適用する「ぼかし」の範囲

  ctx.beginPath(); // パスの初期化
  ctx.moveTo(100, 100); // 筆を下ろす // canvasの座標(0, 0)が原点
  ctx.lineTo(180, 250); // 筆を動かす
  ctx.stroke(); // 初めて線を描画

  ctx.fillRect(300, 100, 100, 150);

  ctx.strokeRect(500, 100, 100, 150);
}
