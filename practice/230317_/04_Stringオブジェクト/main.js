'use strict'

let data = [
  { str: "たけやぶ　やけた", jpn:"竹藪焼けた" },
  { str: "たけむらたけこ　こけたらむけた", jpn:"竹た武子こけたら向けた" },
  { str: "なたでここでたな", jpn:"ナタデココ出たな" },
  { str: "りかがかり", jpn:"理科係" },
  { str: "いかのダンスはすんだのかい", jpn:"イカのダンスはすんだのかい" },
  { str: "よのなかね　かおかおかねかなのよ", jpn:"世の中ね顔かお金なのよ" },
]
let timerId = NaN;
let index = 0;
let pos = 0;

function start() {
  pos = 0;
  document.getElementById("jpn").textContent = ""; // jpnに空白をセット
  index = (index + 1) % data.length;
  console.log(data.length)

  // 以前にsetInterval()の呼び出しで確立されたタイマーを繰り返し動作の取り消し。指定された引数で前回確立されたアクショをを識別する。
  clearInterval(timerId);

  // 一定の遅延間隔(0.2秒)を置いて関数(tick)を繰り返し呼び出す。
  timerId = setInterval(tick, 200);
}

function tick() {
  let str = data[index].str;
  // ※substr()関数は現在非推奨なので注意。
  // 文字の一部を指定した位置から後方向に指しした文字数だけを返す。
  document.getElementById("str").textContent = str.substr(0, pos); // 0番目〜pos文字
  console.log(pos)

  if (++pos > str.length) { // 0.2秒おきにpos++して切り出した文字数がstrの総文字数より大きくなったら,,,
    clearInterval(timerId); // タイマーを解除
    document.getElementById("jpn").textContent = data[index].jpn; // jpn文字列を表示
  }
}
