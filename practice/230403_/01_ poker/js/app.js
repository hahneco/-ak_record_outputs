'use strict';

// アプリケーションを起動する制御モジュール
import Game from "./main.js";


// 定数・広域変数 ==================
const field = document.getElementById("field");


// クラス ==================
// ゲームのインスタンス作成
const game = new Game();


// イベント ==================
// onload = function () {
// }

// tableSet("com");
// tableSet("you");

// field.style = "display: block; opacity: 1; transition-duration: 0.8s; transition: ease-in-out;";

// // 初期画面カードをセット
// function tableSet(whose) {
//   const comTr = document.getElementById("comTr");
//   const youTr = document.getElementById("youTr");

//   for (let i = 0; i < 5; i++) { // td生成
//     let td = document.createElement("td");
//     let cardImg = document.createElement("img");

//     if (whose == "com") {
//       cardImg.src = 'images/' + 'red' + '.png'; // comの場合
//       cardImg.alt = 'COMのカード_赤'; // comの場合
//       comTr.appendChild(td);
//     } else if (whose == "you") {
//       cardImg.src = 'images/' + 'blue' + '.png'; // youの場合
//       cardImg.alt = 'youのカード_青'; // youの場合
//       youTr.appendChild(td);
//     }

//     td.className = "cell"
//     td.appendChild(cardImg);
//     cardImg.className = "card " + whose;
//   }
// }

// ゲーム実行
game.run();
