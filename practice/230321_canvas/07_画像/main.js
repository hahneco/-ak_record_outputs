'use strict'

// let ctx;

function init() {
  console.log("init!")

  let animal0 = document.getElementById("animal0");
  let animal1 = document.getElementById("animal1");
  let animal2 = document.getElementById("animal2");
  let animal3 = document.getElementById("animal3");
  let animal4 = document.getElementById("animal4");

  let field = document.getElementById("field");
  console.log(field)
  let ctx = field.getContext("2d");

  ctx.drawImage(animal0, 5, 5, 100, 100);
  ctx.drawImage(animal1, 5, 120, 200, 100);
  ctx.drawImage(animal2, 120, 5, 100, 100);
  ctx.drawImage(animal3, 120, 120, 100, 200);
  ctx.drawImage(animal4, 250, 200, 50, 100);
}

console.log("グローバル")
