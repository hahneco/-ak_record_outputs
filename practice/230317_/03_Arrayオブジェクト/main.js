'use strict'

function update() {
  console.log("update")
}

let data = [1, 8, 5, 7, 2, 6, 7, 4, 0]

function push() {
  let v = Math.floor(Math.random() * 10);
  let r = data.push(v);
  update(r);
}
function pop() {
  let r = data.pop;
  update(r);
}
function shift() {
  let r = data.shift();
    update(r);
}
function splice() {
  let r = data.splice(3, 2);
  update(r);
}
function update(val) {
  document.getElementById("data").textContent = data;
  document.getElementById("length").textContent = data.length;
  document.getElementById("rval").textContent = rval;
  let v0 = data.indexOf(7);
  let v1 = data.lastIndexOf(7);
  document.getElementById("i0").textContent = v0;
  document.getElementById("i1").textContent = v1;
}
