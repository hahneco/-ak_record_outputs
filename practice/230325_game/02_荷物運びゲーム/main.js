'use strict'

const data = [ // 迷路データ。(0:通路、1:目的地、2:荷物、6:壁)
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 2, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 0, 0, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 0, 0, 2, 0, 0, 2, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 0, 6, 0, 6, 6, 6, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 0, 0, 0, 6, 0, 6, 6, 6, 0, 6, 6, 6, 6, 0, 0, 1, 1, 6, 6],
  [6, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 6, 6],
  [6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 0, 6, 0, 6, 0, 0, 1, 1, 6, 6],
  [6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
];
let gc = null; // 描画コンテキスト
let px = 12; // 主人公x座標
let py = 8; // 主人公y座標

// 初期化関数
function init() {
  console.log("initの読み込み");

  gc = document.getElementById("soko").getContext("2d");
  window.onkeydown = mykeydown; // キー押下用イベントハンドラ登録
  repaint();
}

// mykeydown関数
function mykeydown(e) {
  let dx0 = px; // １歩先x
  let dy0 = py; // １歩先y
  let dx1 = px; // 2歩先x
  let dy1 = py; // 2歩先y

  switch (e.keyCode) {
    case 37: // left
      dx0--;
      dx1 -= 2;
      break;
    case 38: // up
      dy0--;
      dy1 -= 2;
      break;
    case 39: // right
      dx0++;
      dx1 += 2;
      break;
    case 40: // down
      dy0++;
      dy1 += 2;
      break;
  }

  if ((data[dy0][dx0] & 0x2) == 0) { // 一歩先に荷物なし→進む
    px = dx0;
    py = dy0;
  } else if((data[dy0][dx0] & 0x6) == 2) {
    if ((data[dy1][dx1] & 0x2) == 0) {
      data[dy0][dx0] ^= 2;
      data[dy1][dx1] |= 2;
      px = dx0; // 主人公移動x
      py = dy0; // 主人公移動y
    }
  }

  repaint();
}



// repaint関数
function repaint() {
  gc.fillStyle = "#081727"; // 描画処理
  gc.fillRect(0, 0, 800, 440); // 背景クリア  // 配列で0のところが黒くなる

  for (let y = 0; y < data.length; y++) {
    // console.log(y)
    for (let x = 0; x < data[y].length; x++) {
      // console.log(data[y]);
      // console.log(data[y][x])

      if (data[y][x] & 0x1) { // 「0x1」は二進数の1。data[y][x]と0x1が共に1のときにtrue。
        gc.drawImage(imgGoal, x * 40, y * 40, 40, 40); // 要素.drawImage(表示したい画像, 表示するx座標, 表示するy座標, 画像の幅, 画像の高さ)
      }
      if (data[y][x] & 0x2) {
        gc.drawImage(imgLuggage, x * 40, y * 40, 40, 40);
      }
      if (data[y][x] == 6) {
        gc.drawImage(imgWall, x * 40, y * 40, 40, 40);
      }
    }
  }
  gc.drawImage(imgWorker, px * 40, py * 40, 40, 40);
}
