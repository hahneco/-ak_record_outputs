'use strict'

function init() {
  console.log("init() 処理")
  console.log('タイマー関連メソッド');
}

let timerID = NaN;
let count = 0;

function startTimer() {
  timerID = setInterval(tick, 1000);
}

function stopTimer() {
  clearInterval(timerID);
  // console.log("stop")
}

function tick() {
  count++;
  document.getElementById("counter").textContent = count;
}


console.log("グローバルな文脈")
