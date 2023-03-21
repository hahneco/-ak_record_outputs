'use strict'

let ctx;
let ctx2;

function init() {
  let canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  ctx.strokeStyle = "tomato";
  ctx.strokeRect(10, 10, 80, 80);

  ctx.fillStyle = "tomato";
  ctx.fillRect(110, 10, 80, 80);

  ctx.fillRect(210, 10, 80, 80);
  ctx.clearRect(230, 30, 40, 40);

  // #########################
  // canvas2

  let canvas2 = document.getElementById("canvas2");
  ctx2 = canvas2.getContext("2d");

  ctx2.strokeStyle = "pink";
  ctx2.fillStyle = "#00FFFF";
  ctx2.lineWidth = 5;


// πは角度180°
// 2πは角度360°

  // 1,円
  ctx2.beginPath();
  // 角度=「ラジアン」：１回転(360度)を2xπとする。度数からラジアンへの変換は「度数xπ/180」で求める。
  ctx2.arc(50, 50, 30, 0, 2 * Math.PI);
  ctx2.closePath();
  ctx2.fill();

  // 2,扇型 時計回り
  ctx2.beginPath();
  ctx2.moveTo(200, 50);
  ctx2.arc(200, 50, 30, 0, Math.PI / 3); // 60度=>「60xπ/180 = π/3」
  ctx2.closePath();
  ctx2.fill();

  // 3,扇型 反時計回り
  ctx2.beginPath();
  ctx2.moveTo(50, 120);
  ctx2.arc(50, 120, 30, 0, Math.PI / 3, true); // anticlockwiseにtrueを指定する = 反時計回り
  ctx2.closePath();
  ctx2.fill();

  // 4,扇型 反時計回り
  ctx2.beginPath();
  ctx2.moveTo(120, 120);
  ctx2.arc(120, 120, 30, (-1 * Math.PI) / 6, Math.PI / 6, true);
  ctx2.closePath();
  ctx2.fill();

  // 5,円弧のパスのみ
  ctx2.beginPath();
  // ctx2.moveTo(190, 120);
  ctx2.arc(190, 120, 30, 0, (2 * Math.PI) / 3);
  // ctx2.closePath();
  ctx2.fill();
}
