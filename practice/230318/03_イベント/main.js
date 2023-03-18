'use strict'

// windowオブジェクトのonloadプロパティにイベントハンドラinitを登録。
// window.onload = init;

function init() {
  let h = document.getElementById("title");
  h.textContent = "はじめまして";
}

// 注意
// windowオブジェクトのonloadと、documentオブジェクトのDOMContentLoadedのイベントは発生するタイミングが厳密には異なる。
// ↑　DOMContentLoaded → window.onload　の順となる。

/*

## ブラウザのHTMLの読み込み。
1,文書の構造を解釈
2,文書構造の解釈完了段階で「DOMContentLoaded」発生。
3,画像等の読み込み処理開始
4,画像等が全て読み込まれた後に、windowオブジェクトのonloadが発生する。

*/
window.onload = function () {
  console.log("called: window.onload");
  init();
}

document.addEventListener("DOMContentLoaded", function () { // window.onloadより先に読み込まれる。
  console.log("called: DOMContentsLaded");
})
