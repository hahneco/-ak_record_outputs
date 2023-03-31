'use strict';


// class(ゲームキャラクター管理) ###################

// Spriteクラス
// コンストラクタ、draw関数を持つ。
class Sprite {
  constructor(x, y, r) {
    this.x = x; // x座標
    this.y = y; // y座標
    this.sx = 0; // x方向速度
    this.sy = 0; // y方向速度
    this.r = r; // 半径
    this.count = 0; // カウンタ
  }
  draw() {
    this.count += 0.5; // countを徐々に増やす
    let t = Math.sin(this.count) * 0.5; // countの値に応じて口をぱくぱくする
    let d = Math.atan2(this.sy, this.sx);
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.arc(this.x, this.y, this.r, d + t, d + Math.PI * 2 - t);
    ctx.closePath();
    ctx.fill();
  }
}

// Eatクラス
// tick関数を持つ。アニメーションのフレーム（画面）を描画するたびに呼び出される。
class Eat extends Sprite {
  tick() {
    this.sx += (mouse.x - this.x) / 50; // マウスとの距離に応じてspeedを加減する
    this.sy += (mouse.y - this.y) / 50;
    this.sx *= 0.98; // 徐々に減速する
    this.sy *= 0.98;
    this.x += this.sx; // 速度を座標に反映する
    this.y += this.sy;
    this.draw(); // 親クラスのdraw関数呼び出し
  }
}

class Dot extends Sprite {
  constructor() {
    super(Math.random() * 500 + 50, Math.random() * 500 + 50, 10);
    this.sx = Math.random() * 10 - 5;
    this.sy = Math.random() * 10 - 5;
  }

  tick() {
    this.x = (this.x + this.sx + 600) % 600;
    this.y = (this.x + this.sy + 600) % 600;
    this.draw();
  }
}

// 定数・広域変数 ###################
// 定数
const mouse = { x: 0, y: 0 };
const eat = new Eat(300,300,30);

// 広域変数
let ctx; // 描画context
let dots = []; // 餌の配列
let life = 600; // 残り時間
let timerId = NaN; // タイマー
let back; // 背景画像


// イベント ###################
onload = function () { // 初期化処理
  ctx = document.getElementById("field").getContext("2d");
  ctx.font = "32px 'Hachi Maru Pop'";

  window.onmousemove = (e) => {
    let rect = e.target.getBoundingClientRect();
    let rectX = e.clientX - rect.left;
    let rectY = e.clientY - rect.left;
    // let x = e.offsetX;
    // let y = e.offsetY;

    mouse.x = rectX;
    mouse.y = rectY;
  };
  for (let i = 0; i < 15; i++) { // マウス移動ハンドラ
    dots.push(new Dot(Math.random() * 600, Math.random() * 600, 10));
    console.log(dots)
  }
  back = document.getElementById("back");
  timerId = setInterval(tick, 50); // タイマー開始
};

function tick() {
  ctx.drawImage(back, 0, 0);
  ctx.fillStyle = "#D3455E";
  eat.tick(); // 自分の移動と描画

  dots.forEach((d) => { // mainルーチン
    d.tick();
  });

  dots = dots.filter((d) => {
    return Math.abs(eat.x - d.x) > 30 || Math.abs(eat.y - d.y) > 30;
  });

  life -= 3;
  ctx.fillRect(0, 0, life, 5);
  if (life < 0) {
    clearInterval(timerId);
    ctx.fillText("GAME OVER", 200, 300);
  }
  if (dots.length == 0) {
    clearInterval(timerId);
    ctx.fillText("GMAE CLEAR!", 200, 300);
  }
}



console.log("グローバル");
