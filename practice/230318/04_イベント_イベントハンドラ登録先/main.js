'use strict'

/*

３つのカードの中から、当たりを一つ見つけるゲーム。
個々の要素にイベントハンドラを割り当てる方法。

*/

let strike = Math.floor(Math.random() * 3);

window.onload = function () {
  document.getElementById("card0").onclick = mayhandler0;
  document.getElementById("card1").onclick = mayhandler1;
  document.getElementById("card2").onclick = mayhandler2;
  document.getElementById("shuffle").onclick = shuffle;
};

function mayhandler0(e) {
  if (strike == 0) {
    document.getElementById("card0").textContent = "○";
  } else {
    document.getElementById("card0").textContent = "はずれ";
  }
}

function mayhandler1(e) {
  if (strike == 1) {
    document.getElementById("card1").textContent = "○";
  } else {
    document.getElementById("card1").textContent = "はずれ";
  }
}

function mayhandler2(e) {
  if (strike == 2) {
    document.getElementById("card2").textContent = "○";
  } else {
    document.getElementById("card2").textContent = "はずれ";
  }
}

function shuffle(e) {
  strike = Math.floor(Math.random() * 3);
  document.getElementById("card0").textContent = "";
  document.getElementById("card1").textContent = "";
  document.getElementById("card2").textContent = "";
}
