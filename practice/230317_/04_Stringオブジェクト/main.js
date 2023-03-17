'use strict'

let data = [
  { str: "たけやぶ　やけた", jpn:"竹藪焼けた" },
  { str: "たけむらたけこ　こけたらむけた", jpn:"竹た武子こけたら向けた" },
  { str: "なたでここでたな", jpn:"ナタデココ出たな" },
  { str: "りかがかり", jpn:"理科係" },
  { str: "いかのダンスはすんだのかい", jpn:"イカのダンスはすんだのかい" },
  { str: "よのなかね　かおかおかねかなのよ", jpn:"世の中顔かお金なのよ" },
]
let timerId = NaN;
let index = 0;
let pos = 0;

function start() {
  pos = 0;
  document.getElementById("jpn").textContent = "";
  index = (index + 1) % data.length;
  clearInterval(timerId);
  timerId = setInterval(tick, 200);
}

function tick() {
  let str = data[index].str;
  document.getElementById("str").textContent = str.substr(0, pos);
  if (++pos > str.length) {
    clearInterval(timerId);
    document.getElementById("jpn").textContent = data[index].jpn;
  }
}
