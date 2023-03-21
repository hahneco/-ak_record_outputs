'use strict'

let ctx;

function init() {
  let canvas = document.getElementById("canvas"); // width="600" height="300"
  ctx = canvas.getContext("2d");

  ctx.strokeStyle = "white";
  ctx.fillStyle = "gray";

  ctx.strokeRect(0, 100, 50, 100);
  ctx.strokeRect(550, 100, 50, 100);

  ctx.beginPath();
  ctx.moveTo(300, 0);
  ctx.lineTo(300, 300);
  // ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  // ctx.moveTo(300, 300)
  // ctx.lineTo(300, 300)
  ctx.arc(300, 150, 50, 0, 2 * Math.PI);
  ctx.closePath();
  // ctx.fill();
  ctx.stroke();
}
