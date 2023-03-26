'use strict'

let WeightData = [
  [30, -12, 0, -1, -1, 0, -12, 30],
  [-12, -15, -3, -3, -3, -3, -15, -12],
  [0, -3, 0, -1, -1, 0, -3, 0],
  [-1, -3, -1, -1, -1, -1, -3, -1],
  [-1, -3, -1, -1, -1, -1, -3, -1],
  [0, -3, 0, -1, -1, 0, -3, 0],
  [-12, -15, -3, -3, -3, -3, -15, -12],
  [30, -12, 0, -1, -1, 0, -12, 30],
]; // 重みづけデータ
let BLACK = 1; // 自分
let WHITE = 2; // PC
let data = []; // 盤データ(0:なし、1:黒、2:白)
let myTurn = false; // 自分ば番かどうか

function init() { // 初期化関数
  console.log("init読み込み");

  let b = document.getElementById("board");
  // console.log(b);

  // 盤作成(8行i*8列j)
  for (let i = 0; i < 8; i++) { // i行作成
    let tr = document.createElement("tr"); // tr
    data[i] = [0,0,0,0,0,0,0,0] // i行目のデータを作成

    for (let j = 0; j < 8; j++) {
      let td = document.createElement("td");
      td.className = "cell"
      td.id = "cell" + i + j;
      td.textContent = td.id;
      // td.onclick = clicked; // click時のイベントハンドラをセット
      tr.appendChild(td);
    }
    b.appendChild(tr);
  }

   // 最初に４つの石を設置する
  put(3, 3, BLACK);
  put(4, 4, BLACK);
  put(3, 4, WHITE);
  put(4, 3, WHITE);

  update();
}

function update() { // 白/黒の数か数えて表示する
  let numWhite = 0;
  let numBlack = 0;
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (data[x][y] == WHITE) {
      numWhite++;
      }
      if (data[x][y] == BLACK) {
        numBlack++;
      }
    }
  }
}
document.getElementById("numBlack").textContent = numBlack;
document.getElementById("numWhite").textContent = numWhite;

function clicked(e) { // 盤上のセルclick時のコールバック関数
  if (!myTurn) {
    return;
  }
  let id = e.target.id;
  let i = parseInt(id.charAt(4));
  let j = parseInt(id.charAt(5));

  let flipped = getFlipCells(i, j, BLACK);
  if (flipped.length > 0) {


  }
}

// put関数(i,j)にcolor色の石を置く
function put(i, j, color) {
  let c = document.getElementById("cell" + i + j);
  c.textContent = "●";
  c.className = "cell " + (color == BLACK ? "black" : "white");
  data[i][j] = color;
  console.log(data);
  console.log(data[i])
  console.log(data[j])
}
