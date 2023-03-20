'use strict'

window.onload = function () {
  document.getElementById("setNum").onchange = setNum;
  console.log(setNum);
}

function setNum(e) {
  let num = parseInt(e.target.value); // 文字列の引数を解しし、指定された基数の整数値を返す。
  let v0 = num;
  let v1 = 0.5 * num;
  let v2 = 100 * num;

  document.getElementById("i0").textContent = v0;
  document.getElementById("i1").textContent = v1;
  document.getElementById("i2").textContent = v2;
  document.getElementById("num").textContent = num;
}
