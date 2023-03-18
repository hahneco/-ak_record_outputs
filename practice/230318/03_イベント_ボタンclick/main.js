'use strict'


// ２回イベントハンドラを記述
// window.onload = function () {
//   document.getElementById("yes").onclick = yeshandler;
//   document.getElementById("no").onclick = nohandler;
// }
// function yeshandler(e) {
//   document.getElementById("status").textContent = "はいが選ばれました。"
// }
// function nohandler(e) {
//   document.getElementById("status").textContent = "いいえが選ばれました。"
// }

// １回で2つのイベントハンドラを設定。
window.onload = function () {
  document.getElementById("yes").onclick = myhandler;
  document.getElementById("no").onclick = myhandler;
}

function myhandler(e) { // 変数eはイベントハンドラが呼び出される時の引数。ブラウザが値を設定してくれる。
  console.log(e); // 変数eを確認
  console.log(e.target); // 変数e.target確認。button要素への参照が格納されている。

  document.getElementById("status").textContent =
    e.target.textContent + "が選ばれました。";
}
