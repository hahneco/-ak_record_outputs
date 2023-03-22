'use strict'

/*

コールバック関数

function 高階関数(コールバック関数) { // コールバック関数を引数に持つ関数 => 高階関数
  // 処理
  コールバック関数();
}

*/

function init() {
  console.log("initの読み込み");

  document.getElementById("unfollow").onclick = unfollowConfirmhandler;
  document.getElementById("cancelTweet").onclick = canceltweetConfirmhandler;
}

// ボタンclick後の処理
function unfollowConfirmhandler(e) { // 引数e => button要素への参照
  // document.getElementById("text1").textContent = "フォローを外しました。"
  // console.log("clicked" + e.target.textContent);
  console.log("clicked " + e);

  confirmed(function() {
    console.log("フォローを外しました。");
  });

  document.getElementById("status").textContent = e.target.textContent + "しました。"
}

// ボタンclick後の処理
function canceltweetConfirmhandler(e) { // 引数e => button要素への参照
  // document.getElementById("text1").textContent = "フォローを外しました。"
  // console.log("clicked" + e.target.textContent);
  console.log("clicked " + e);

  confirmed(function() {
    console.log("ツイートをキャンセルしました。");
  });

  document.getElementById("status").textContent = e.target.textContent + "しました。"
}

// ボタンclick後の処理
function confirmhandler(e) { // 引数e => button要素への参照
  // document.getElementById("text1").textContent = "フォローを外しました。"
  // console.log("clicked" + e.target.textContent);
  console.log("clicked " + e);
  document.getElementById("status").textContent = e.target.textContent + "しました。"
}

/*
// フォローを外す処理を定義(匿名関数)
// 「確認」した時だけ実行する
const unfollow = function() {
  console.log("フォローを外しました。");
}

// tweetをキャンセルする処理を定義(匿名関数)
// 「確認」した時だけ実行する
const cancelTweet = function() {
  console.log("ツイートをキャンセルしました。");
}
*/

// 確認処理
function confirmed(fn) {
  if (window.confirm("実行しますか?")) {
    fn();
  }
}
// 確認処理2
function confirmed2(fn) {
  const input = window.prompt("実行しますか?");
  fn(input);
}

// ############################

document.getElementById("deleteRepository").onclick = deletehandler;

function deletehandler(e) {

  confirmed2(function (input) {
    if (input === "実行") {
      // fn();
      console.log("リポジトリを削除します!");
      document.getElementById("status").textContent = e.target.textContent + "を実行しました"
    }
  })
}
