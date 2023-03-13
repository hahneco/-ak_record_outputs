'use strict'

function init() {
  let b = document.getElementById('board'); // ボードtableを初期値にセット
  for (let i = 0; i < 8; i++) {
    let tr = document.createElement('tr');
    // console.log(tr);

    for (let j = 0; j < 8; j++) {
      let td = document.createElement('td');
      // console.log(td);
      td.className = 'cell';
      td.id = 'cell' + i + j;
      td.onclick = clicked; // イベントハンドラ。onclickプロパティに登録した関数が呼ばれる。
      tr.appendChild(td);
    }
    function clicked(e) {
      document.getElementById('info').textContent = e.target.id + " clicked!";
    }
    b.appendChild(tr);
  }
}

init();
