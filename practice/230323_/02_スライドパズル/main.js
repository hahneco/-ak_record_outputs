'use strict'

const titles = [];

function init() {
  console.log("init読み込み");

  let table = document.getElementById("table"); // make table

  for (let i = 0; i < 4; i++) {
    let tr = document.createElement("tr");
    // console.log("foo" + i);

    for (let j = 0; j < 4; j++) {
      // console.log("td" + j);
      let td = document.createElement("td");
      let index = i * 4 + j;
      // console.log(index)
      td.className = "title";
      td.index = index;
      td.value = index;
      td.textContent = index == 0 ? "" : index;
      td.onclick = click; // click時のハンドラ登録

      tr.appendChild(td);
      titles.push(td);
      // console.log(titles);
    }
    table.appendChild(tr);
  }

  for (let i = 0; i < 10; i++) { // １０００回擬似的にランダムにclickして並べ替え
    click({ target: { index: Math.floor(Math.random() * 16) } });
  }
  colorChange();
  // console.log(table);
}

function click(e) {
  let i = e.target.index; // clickされた要素

  if (i - 4 >= 0 && titles[i - 4].value == 0) {
    swap(i, i - 4);
  } else if (i + 4 < 16 && titles[i + 4].value == 0) {
    swap(i, i + 4);
  } else if (i % 4 != 0 && titles[i - 1].value == 0) {
    swap(i, i - 1);
  } else if (i % 4 != 3 && titles[i + 1].value == 0) {
    swap(i, i + 1);
  }
  colorChange();
}

function swap(i, j) {
  let temp = titles[i].value;
  // console.log(temp);

  titles[i].textContent = titles[j].textContent;
  titles[i].value = titles[j].value;
  titles[j].textContent = temp;
  titles[j].value = temp;
}

function colorChange(e) {
  let elements = document.getElementsByClassName("title");
  let len = elements.length;

  for (let i = 0; i < elements.length; i++) {
    // console.log(elements.item(i).value);
    // console.log(elements[0]);

    let v = elements.item(i).value;
    console.log(v);

    if (v === 0) {
      console.log("0のやつ")
      elements.item(i).classList.add("blank-item");
    } else {
      elements.item(i).classList.remove("blank-item");
    }
  }
}
