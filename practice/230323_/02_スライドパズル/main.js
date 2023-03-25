'use strict'

const tiles = [];

function init() {
  console.log("init読み込み");

  let table = document.getElementById("table"); // make table

  for (let i = 0; i < 4; i++) {
    let tr = document.createElement("tr");

    for (let j = 0; j < 4; j++) {
      let td = document.createElement("td");
      let index = i * 4 + j;
      td.className = index == 15 ? "title blank-item" : "title";
      td.index = index;
      td.value = index;
      // td.textContent = index == 0 ? "" : index;
      td.textContent = index == 15 ? "" : index + 1;
      td.onclick = click; // click時のハンドラ登録

      tr.appendChild(td);
      tiles.push(td);
    }
    table.appendChild(tr);
  }

  // for (let i = 0; i < 1000; i++) { // 1000回擬似的にランダムにclickして並べ替え
  //   click({ target: { index: Math.floor(Math.random() * 16) } });
  // }
  colorChange();
}

function click(e) {
  let i = e.target.index; // clickされた要素

  if (i - 4 >= 0 && tiles[i - 4].value == 15) { // clickしたtileが、２段目以降且つ、上のtileは15か？
    swap(i, i - 4);
  } else if (i + 4 < 16 && tiles[i + 4].value == 15) { // clickしたtileが、2,3行目且つ、下のtileは15か？
    swap(i, i + 4);
  } else if (i % 4 != 0 && tiles[i - 1].value == 15) { // clickしたtileが、一番左列のtileではない。且つ左隣のtileが15か？
    swap(i, i - 1);
  } else if (i % 4 != 3 && tiles[i + 1].value == 15) { // clickしたtileが、一番右列のtileではない。且つ右隣のtileが15か？
    swap(i, i + 1);
  }

  colorChange();
}

function swap(i, j) {
  let temp = tiles[i].value; // e.targetのvalue
  let x = tiles[i].value == 15 ? "" : tiles[i].value + 1;
  let y = tiles[j].value == 15 ? "" : tiles[j].value + 1;
  console.log(temp);

  tiles[i].textContent = y;
  tiles[i].value = tiles[j].value;
  tiles[j].textContent = x;
  tiles[j].value = temp;
}

function colorChange(e) {
  let elements = document.getElementsByClassName("title");
  let len = elements.length;

  for (let i = 0; i < elements.length; i++) {

    let v = elements.item(i).value;

    if (v === 15) {
      console.log("0のやつ")
      elements.item(i).classList.add("blank-item");
    } else {
      elements.item(i).classList.remove("blank-item");
    }
  }
}
