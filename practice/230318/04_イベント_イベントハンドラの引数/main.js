'use strict'

// window.onload = function () {
//   console.log("onload!!")

//   let nodes = document.getElementsByClassName("target"); // 引数で指定されたclass名を持つ要素をまとめて返か関数。
//   for (let i = 0; i < nodes.length; i++) {
//     nodes[i].onclick = myhandler;
//     nodes[i].onmousedown = myhandler;
//     nodes[i].onmouseup = myhandler;
//     nodes[i].onchange = myhandler;
//     nodes[i].onfocus = myhandler;
//   }
// };

// function myhandler(e) {
//   console.log(e.type + ": tagName=" + e.target.tagName);
//   console.log(
//     " clientX=" +
//     e.clientX +
//     " screenX=" +
//     e.screenX +
//     " pageX=" +
//     e.pageX +
//     " offsetX=" +
//     e.offsetX
//   )
// }

console.log("マウスカーソルの座標値取得");

window.onload = function () {
  document.getElementById("area").onmousemove = mymousemove;
};

function mymousemove(e) {
  document.getElementById("s0").textContent = `clientX= ${e.clientX}, clientY= ${e.clientY}`;
  document.getElementById("s1").textContent = `pageX= ${e.pageX}, pageY= ${e.pageY}`;
  document.getElementById("s2").textContent = `screenX= ${e.screenX}, screenY= ${e.screenY}`;
  document.getElementById("s3").textContent = `offsetX= ${e.offsetX}, offsetY= ${e.offsetY}`;
}
