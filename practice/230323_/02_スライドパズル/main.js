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
      console.log(index)
      td.className = "title";
      td.index = index;
      td.value = index;
      td.textContent = index == 0 ? "" : index;
      td.onclick = click; // click時のハンドラ登録

      tr.appendChild(td);
      titles.push(td);
      console.log(titles);
    }
    table.appendChild(tr);
  }

  for (let i = 0; i < 1000; i++) { // １０００回擬似的にランダムにclickして並べ替え
    click({
      target: {
        index: Math.floor(Math.random() * 16)
      }
    });
  }
  console.log(table);
}

function click(e) {
  let i = e.target.index;
  // console.log(i);

  if (i - 4 >= 0 && titles[i - 4].value == 0) {
    swap(i, i - 4);
  } else if (i + 4 < 16 && titles[i + 4].value == 0) {
    swap(i, i + 4);
  } else if (i % 4 != 0 && titles[i - 1].value == 0) {
    swap(i, i - 1);
  } else if (i % 4 != 3 && titles[i + 1].value == 0) {
    swap(i, i + 1);
  }
}

function swap(i, j) {
  let temp = titles[i].value;
  console.log(temp);

  titles[i].textContent = titles[j].textContent;
  titles[i].value = titles[j].value;
  titles[j].textContent = temp;
  titles[j].value = temp;
}
