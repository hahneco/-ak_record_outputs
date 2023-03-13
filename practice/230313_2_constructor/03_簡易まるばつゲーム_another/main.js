'use strict'

function init() {
  console.log('簡易マルバツゲーム');

  // 3*3の盤面を作成する。
  // table取得 & 変数bに格納
  let b = document.getElementById('board');
  // console.log(b)

  // y軸３列
  for (let y = 0; y < 3; y++) {
    let tr = document.createElement('tr');
    // console.log(tr);

    // x軸3列
    for (let x = 0; x < 3; x++) {
      let td = document.createElement('td');
      // console.log(td);
      td.className = 'cell';
      td.id = "cell-" + (y + 1) + (x + 1);
      td.onclick = clicked; // イベントハンドラ設定

      tr.appendChild(td);
    }
    b.appendChild(tr);
  }
}

// カウンター設置
let counter = 0;

function clicked(e) {
  let targetId = e.target.id;
  let element = e.target.id(targetId);

  element.className = 'cell-disabled';
  element.style.backgroundColor = '#F9FEFF';

  e.target.id("info").textContent = counter += 1;

  if (counter % 2 === 0) {
    // document.getElementById(targetId).textContent = "○";
    e.target.id.textContent = "○";
  } else {
    // document.getElementById(targetId).textContent = "×";
    e.target.id.textContent = "×";
  }
}


console.log("グローバルな文脈")
