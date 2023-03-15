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
    // document.getElementsById("info").textContent = e.target.id + "id" + "clicked!";
  let targetId = e.target.id;
  let element = document.getElementById(targetId);

  element.className = 'cell-disabled';
  // console.log(targetId)
  console.log(element)
  element.style.backgroundColor = '#F9FEFF';

  document.getElementById("info").textContent = counter += 1;

  if (counter % 2 === 0) {
    console.log('偶数')
    document.getElementById(targetId).textContent = "○";
  } else {
    console.log('奇数')
    document.getElementById(targetId).textContent = "×";
  }
}

  // // 丸とバツを交互に入れる
  // // 奇数回で丸、偶数回でバツとする。
  // for (let t = 1; t < 9; t++) {
  //   if (t % 2 === 0) { // 偶数回
  //     console.log('偶数回: &#9787;')
  //   } else { // 奇数回
  //     // console.log('奇数回: &#9785;')
  //   }
  // }
console.log("グローバルな文脈")
