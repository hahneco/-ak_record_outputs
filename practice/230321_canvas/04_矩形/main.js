'use strict'

let ctx;

function init() {
  let canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  ctx.strokeStyle = "tomato";
  ctx.strokeRect(10, 10, 80, 80);

  ctx.fillStyle = "tomato";
  ctx.fillRect(110, 10, 80, 80);

  ctx.fillRect(210, 10, 80, 80);
  ctx.clearRect(230, 30, 40, 40);
}
