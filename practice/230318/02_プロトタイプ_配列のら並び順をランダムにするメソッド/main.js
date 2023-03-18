'use strict'

let cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
document.getElementById("result").innerText = cards.join(",");

Array.prototype.shuffle = function(){ // Array[配列型]のコンストラクタのprototypeにshuffle()関数を追加。
  let i = this.length;
  while (i) {
    let j = Math.floor(Math.random() * i);
    let t = this[--i];
    this[i] = this[j];
    this[j] = t;
  }
  return this;
}

// #################(確認)
let newobj = new Array();
console.log(newobj) // Arrayの参照先にshuffle関数が入っているのが確認できる。
// #################(確認)

function shuffle() {
  // cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
  cards.shuffle();
  document.getElementById("result").innerText = cards.join(",");
}
