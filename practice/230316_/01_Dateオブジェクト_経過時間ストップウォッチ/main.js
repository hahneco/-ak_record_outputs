'use strict'


let startTime = 0;
function update() {
  // Q) ストップウォッチで経過時間を表示する

  startTime = new Date();
  // ①スタートボタンを押す→現在時刻を取得（表示）
  // ②ストップボタンを押す→現在時刻を取得（表示）→「ストップ時刻-スタート時刻」を計算
  // スタートtime
  document.getElementById("hour").textContent = startTime.getHours();
  document.getElementById("min").textContent = startTime.getMinutes();
  document.getElementById("sec").textContent = startTime.getSeconds();
  document.getElementById("msec").textContent = startTime.getMilliseconds();
}

// 停止時間
function stoptime() {
  let stoptime = new Date();
  // 停止時間
  document.getElementById("stophour").textContent = stoptime.getHours();
  document.getElementById("stopmin").textContent = stoptime.getMinutes();
  document.getElementById("stopsec").textContent = stoptime.getSeconds();
  document.getElementById("stopmsec").textContent = stoptime.getMilliseconds();

  // 差分を計算
  // let timeLag =
  let hourLag = startTime.getHours() - stoptime.getHours();
  let minLag = startTime.getMinutes() - stoptime.getMinutes();
  let secLag = startTime.getSeconds() - stoptime.getSeconds();
  let msecLag = startTime.getMilliseconds() - stoptime.getMilliseconds();

  document.getElementById("hourlag").textContent = hourLag;
  document.getElementById("minlag").textContent = minLag;
  document.getElementById("seclag").textContent = secLag;
  document.getElementById("mseclag").textContent = msecLag;
}



console.log("グローバルな文脈")
