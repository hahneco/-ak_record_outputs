'use strict';


// 定数・広域変数
const stars = []; // 星のリスト
let keymap = []; // どのキーが押されているか
let ctx; // 描画コンテキスト
let ship; // 自機
let score = 0; // score
let speed = 25; // speed
let timer = NaN; // timer


// コンストラクタ
// 自機objectを作成するコンストラクタ。
function Ship(x, y) { // 引数(x,y)は自機の座標
  this.x = x; // 自機x座標
  this.y = y; // 自機y座標

  // キーの押下状態を保持するための関数。
  // どのキーが押されたかを配列keymapに入れる。
  this.keydown = function (e) {
    keymap[e.keyCode] = true; // 押されたkeyのcodeをtrueに設定。
  };
  this.keyup = function (e) {
    keymap[e.keyCode] = false; // 離したkeyのコードをfalseに設定。
  };

  // 自機を動かす関数
  // 斜め移動を可能すするため、x軸・y軸移動処理のif文は分ける
  this.move = function () {
    if (keymap[37]) {
      this.x -= 30; // 左
    } else if (keymap[39]) {
      this.x += 30; // 右
    }

    if (keymap[38]) {
      this.y -= 30; // 上
    } else if (keymap[40]) {
      this.y += 30; // 下
    }

    // Math.max(-800, ・・・)戻り値と-800を比較して大きい値を返してくれる
    this.x = Math.max(-800, Math.min(800, this.x)); // x方向移動範囲を-800〜800に制限する
    this.y = Math.max(-800, Math.min(800, this.y)); // y方向移動範囲を-800〜800に制限する
  };
}

// random関数
function random(v) {
  // Math.floor :指定された数値以下の最大の整数を返す
  return Math.floor(Math.random() * v); // 0〜v未満の乱数を返す
}


// ゲームの初期化処理
// 隕石を200個生成して配列starsに格納する。
function init() {
  // 星を200個リストに追加
  console.log("init読み込み");
  // 星を200個リストに追加
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: random(800 * 4) - 1600, // x軸座標
      y: random(800 * 4) - 1600, // y軸座標
      z: random(4095), // z軸(3D)座標
      r: random(360), // 角度
      w: random(10) - 5, // 回転speed
    });
  }

  ship = new Ship(200, 200); // 自機オブジェクト作成
  onkeydown = ship.keydown; // key押下用イベントハンドラ
  onkeyup = ship.keyup; // keyリリース用イベントハンドラ

  let space = document.getElementById("space");
  ctx = space.getContext("2d");
  ctx.font = "40pt Arial";
  repaint();
}

function go() {
  let space = document.getElementById("space");
  space.onmousedown = mymousedown; // マウス押下時イベントハンドラ登録
  space.onmouseup = mymouseup; // マウスリリース時イベントハンドラ登録
  space.oncontextmenu = function (e) {
    e.preventDefault(); // コンテキストメニューを非表示にする。
  };
  space.addEventListener("touchstart", mymousedown);
  space.addEventListener("touchend", mymouseup);

  document.body.addEventListener(
    "touchmove",
    function (event) {
      event.preventDefault();
    },
    false
  );
  document.getElementById("START").style.display = "none";
  document.getElementById("bgm").play();
  timer = setInterval(tick, 50); // BGM再生スタート
}

// mouseが押される場所に応じてキーボードの移動キーが押された時と同じ処理を行う。
function mymousedown(e) {
  // マウスとタッチのイベント処理 -> 座標に応じて上下左右キーのkeymapを更新
  let mouseX =
    // isNaN() 関数は引数が NaN (非数) かどうかを判定します。
    (!isNaN(e.offsetX) ? e.offsetX : e.touches[0].clientX) - 400;
  let mouseY =
    (!isNaN(e.offsetY) ? e.offsetY : e.touches[0].clientY) - 400;
  if (Math.abs(mouseX) > Math.abs(mouseY)) {
    keymap[mouseX > 0 ? 37 : 39] = true;
  } else {
    keymap[mouseY > 0 ? 38 : 40] = true;
  }
}

function mymouseup(e) {
  keymap = [];
}

// メインループ
function tick() {
  stars.forEach((s) => {
    s.z -= speed; // 隕石のz方向の値をspeed分減らす(自機の方へ隕石を近づける)
    s.r += s.w; // 隕石か回転させる

    // 衝突判定処理
    if (s.z < 64) {
      // Math.abs : 引数の絶対値を求める関数
      if (Math.abs(s.x - ship.x) < 50 && Math.abs(s.y - ship.y) < 50) {
        clearInterval(timer);
        timer = NaN;
        document.getElementById("bgm").pause();
        return;
      }
      // ぶつからなかった場合は奥に移動させる
      s.x = random(800 * 4) - 1600;
      s.y = random(800 * 4) - 1600;
      s.z = 4095;
    }
  });

  if (score++ % 10 == 0) { // scoreを増やして10の倍数になったらspeedを増やす
    speed++;
  }
  ship.move();
  repaint();
}

function repaint() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 800, 800);
  stars.sort((a, b) => b.z - a.z); // 隕石を距離順にソートする

  // 隕石の描画
  stars.forEach((s) => {
    let z = s.z;
    let x = ((s.x - ship.x) * 512) / z + 400;
    let y = ((s.y - ship.y) * 512) / z + 400;
    let size = (50 * 512) / z;
    ctx.save();
    ctx.translate(x, y);
    ctx.globalAlpha = 1 - z / 4096;
    ctx.rotate((s.r * Math.PI) / 180);
    ctx.drawImage(rockImg, -size / 2, -size / 2, size, size);
    ctx.restore();
  });

  ctx.drawImage(scope, 0, 0, 800, 800);
  ctx.fillStyle = "#5aFFFF";
  ctx.fillText(("0000000" + score).slice(-7), 550, 60);
  if (isNaN(timer)) {
    ctx.fillText("GAME OVER", 250, 350);
  }
}


console.log("グローバル")
