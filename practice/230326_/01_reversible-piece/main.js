'use strict'

let WeightData = [ // 盤面ごとの優先度
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
  let b = document.getElementById("board");
  for (let i = 0; i < 8; i++) { // i行作成
    let tr = document.createElement("tr"); // tr
    data[i] = [0, 0, 0, 0, 0, 0, 0, 0] // i行目のデータを作成

    for (let j = 0; j < 8; j++) {
      let td = document.createElement("td");
      td.className = "cell";
      td.id = "cell" + i + j;
      td.textContent = "data:" + "[" + i + "]" + "[" + j + "]";
      td.onclick = clicked; // click時のイベントハンドラをセット
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

function update() { // 白/黒の数を数えて表示する
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
  document.getElementById("numBlack").textContent = numBlack;
  document.getElementById("numWhite").textContent = numWhite;

  let blackFlip = canFlip(BLACK); // 黒反転できるか否か
  let whiteFlip = canFlip(WHITE); // 白反転できるか否か

  // console.log(numWhite + numBlack)
  if (numWhite + numBlack == 64 || (!blackFlip && !whiteFlip)) { // 64手すべて打ち終わったときに
    // console.log("64手目")
    if (numWhite > numBlack) {
      document.getElementById("message").textContent = "白の勝ち";
    } else if (numWhite < numBlack) {
      document.getElementById("message").textContent = "黒の勝ち";
    } else {
      document.getElementById("message").textContent = "引き分け";
    }
    return
  }

  //　石を置く順番を判定する処理
  if (!blackFlip) {
    showMessage("黒スキップ");
    myTurn = false;
  } else if (!whiteFlip) {
    showMessage("白スキップ");
    myTurn = true;
  } else {
    // 順番交代。myTurnが true → false → true → false になる。
    myTurn = !myTurn;
  }
  if (!myTurn) {
    setTimeout(think, 1000); // 1秒間考える時間
  }
}

// showMessage関数
function showMessage(str) { // メッセージを2秒間表示
  document.getElementById("message").textContent = str;
  setTimeout(function () {
    document.getElementById("message").textContent = "";
  }, 2000); // メッセージ(str)を２秒間表示する
}

function clicked(e) { // 盤上のセルclick時のコールバック関数
  if (!myTurn) {
    return;
  }
  let id = e.target.id;
  let i = parseInt(id.charAt(4)); // 文字列を整数に変換 縦の座標(i列)取得
  let j = parseInt(id.charAt(5)); // 文字列を整数に変換 横の座標(j列)取得

  let flipped = getFlipCells(i, j, BLACK); // 黒に反転する配列
  if (flipped.length > 0) {
    console.log(flipped);
    for (let k = 0; k < flipped.length; k++) {
      put(flipped[k][0], flipped[k][1], BLACK); // 反転する石が0より多ければ黒に変換する
    }
    put(i, j, BLACK); // clickしたマスに黒を置く
    update();
  }
}

// put関数(i,j)にcolor色の石を置く
function put(i, j, color) {
  let c = document.getElementById("cell" + i + j);
  c.textContent = "●";
  c.className = "cell " + (color == BLACK ? "black" : "white");
  data[i][j] = color;
}

// think関数(コンピューター思考関数)
function think() {
  let highScore = -1000;
  let px = -1,
    py = -1;
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      let tmpData = copyData();
      let flipped = getFlipCells(x, y, WHITE);
      if (flipped.length > 0) {
        for (let i = 0; i < flipped.length; i++) {
          let p = flipped[i][0];
          let q = flipped[i][1];
          tmpData[p][q] = WHITE;
          tmpData[x][y] = WHITE;
        }
        let score = calcWeightData(tmpData);
        if (score > highScore) {
          highScore = score;
          (px = x), (py = y);
        }
      }
    }
  }
  if (px >= 0 && py >= 0) {
    let flipped = getFlipCells(px, py, WHITE);
    if (flipped.length > 0) {
      for (let k = 0; k < flipped.length; k++) {
        put(flipped[k][0], flipped[k][1], WHITE);
      }
    }
    put(px, py, WHITE);
  }

  update();
}

function calcWeightData(tmpData) {
  let score = 0;
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (tmpData[x][y] == WHITE) {
        score += WeightData[x][y];
      }
    }
  }
  return score;
}

function copyData() {
  let tmpData = [];
  for (let x = 0; x < 8; x++) {
    tmpData[x] = [];
    for (let y = 0; y < 8; y++) {
      tmpData[x][y] = data[x][y];
    }
  }
  return tmpData;
}

// canFlip関数:盤面に引数の色の石を置けるかをブーリアンで返す。
function canFlip(color) { // 挟める石があるか？
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      // 座標(x,y)に石を置いた時に反転する数を求める
      let flipped = getFlipCells(x, y, color);
      // console.log(x)
      // console.log(y)
      if (flipped.length > 0) {
        return true;
      }
    }
  }
  return false;
}

// getFlipCellか関数:(i,j)座標にcolorの石を置いた時に反転する石の配列を返す。
// 各方向を配列dirsに格納。for文で方向ごとに石を挟めるか判定する。
function getFlipCells(i, j, color) {
  // console.log(data) // 盤データ(0:なし、1:黒、2:白)
  if (data[i][j] == BLACK || data[i][j] == WHITE) { // すでに石がある場合(配列す数字が1または2の時)関数から抜ける
    // console.log(data)
    return [];
  }

  // 相手を挟めるか調査
  let dirs = [ // clickした座標を拠点に8方位を調査する
    [-1, -1], // 左上
    [0, -1], // 真上
    [1, -1], // 右上
    [-1, 0], // 左
    [1, 0], // 右
    [-1, 1], // 左下
    [0, 1], // 真下
    [1, 1], // 右下
  ];
  let result = [];
  for (let p = 0; p < dirs.length; p++) {
    // console.log(dirs[p][0])
    let flipped = getFlipCellsOneDir(i, j, dirs[p][0], dirs[p][1], color);
    result = result.concat(flipped); // 別の配列と結合する処理
  }
  return result;
}

// (i,j)を起点として、(dx,dy)方向に、color色の石で挟めるかを返す。
function getFlipCellsOneDir(i, j, dx, dy, color) { // (i,j)に石を置いた時に、(dx,dy)方向で石を挟めるか？
  let x = i + dx; // dx方向に順番に見ていくときの座標
  let y = j + dy; // dy方向に順番に見ていくときの座標
  let flipped = []; // 挟まれた石の配列
  // console.log(i + "," + j)

  if (
    x < 0 || // 盤の外(その行の左にマス目がない)
    y < 0 || // 盤の外(その行の上にマス目がない)
    x > 7 || // 盤の外(その行の右にマス目がない)
    y > 7 || // 盤の外(その行の下にマス目がない)
    data[x][y] == color || // 同じ色
    data[x][y] == 0 // 石がない
  ) {
    return []; // 盤外、同色、空ならfalse(挟めない)ので関数を抜ける
  }
  flipped.push([x, y]);
  while (true) {
    x += dx;
    y += dy;
    if (x < 0 || y < 0 || x > 7 || y > 7 || data[x][y] == 0) {
      return []; // 盤外、空ならfalse(挟めない)
    }
    if (data[x][y] == color) {
      return flipped;
    } else {
      flipped.push([x, y]);
    }
  }
}
