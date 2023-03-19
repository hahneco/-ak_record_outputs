'use strict'

function Person(name, energy) {
    this.name = name;
    this.energy = energy;
    this.run = function () {
      this.energy -= 10;
    };
    this.sayHello = function () {
      console.log("Hi!, " + this.name);
      // alert("1111111111111111")
      document.getElementById("run").onclick = runhandler;
    }
  }

document.getElementById("person").onclick = myhandler;

let p = new Person("Tanaka", 100);

function myhandler(e) {
  // console.log("clicked!")

  p.sayHello();

  document.getElementById("text").textContent = `name:${p.name}`;
  document.getElementById("energy").textContent = `energy:${p.energy}`;
}

function runhandler(e) {
  console.log("run");

  p.run();
  // console.log(p.run);
  document.getElementById("energy").textContent = `energy:${p.energy}`;
}

// #############################
// 関数オブジェクトによる配列操作

let data = [
  10,24,5,7,30,2,7,6,5,2,9,1,2,6
]
let total = 0;
let total2 = 0;

for (let i = 0; i < data.length; i++) {
  let v = data[i];
  total += v;

  console.log("totalは" + total)
}

// 関数オブジェクト使用↑
data.forEach(function (v) {
  total2 += v

  console.log("totalは" + total2)
});

// #############################
// 関数オブジェクトを引数にとるArrayのメソッド

console.log("関数オブジェクトを引数にとるArrayのメソッド")

let data3 = [2, 5, 4, 1, 6];
let data4 = [2, 5, 4, 1, 6];

delete data3[3];
delete data4[3];

console.log("*************** forEach ***************")
data3.forEach(function (e, i) {
  console.log("[" + i + "]=" + e);
})

console.log("*************** for文 ***************")
for (let i = 0; i < data4.length; i++) {
  console.log("[" + i + "]=" + data4[i]);
}

// #############################
// Array.prototype.every(関数オブジェクト)
console.log("*************** Array.prototype.every(関数オブジェクト) ***************")
// 配列全ての要素が条件を満たしている場合にtrueを返す

let data5 = [2, 5, 4, 7, 1, 6]

let r0 = data5.every(function (e) { return e < 5 });
let r1 = data5.every(function (e) { return e < 10 });
let r2 = data5.every(function (e) { return e > 0 });
console.log(r0)
console.log(r1)
console.log(r2)

// #############################
// Array.prototype.some(関数オブジェクト)
console.log("*************** Array.prototype.some(関数オブジェクト) ***************")
// 配列の要素どれか一つでも条件を満たしている場合にtrueを返す

let r3 = data5.some(function (e) { return e < 5 });
let r4 = data5.some(function (e) { return e < 10 });
let r5 = data5.some(function (e) { return e > 0 });
console.log(r3)
console.log(r4)
console.log(r5)

// #############################
// Array.prototype.filter(関数オブジェクト)
console.log("*************** Array.prototype.filter(関数オブジェクト) ***************")
// 配列の要素どれか一つでも条件を満たしている場合にtrueを返す

let r6 = data5.filter(function (e) { return e % 2 === 0 }); // 偶数
let r7 = data5.filter(function (e) { return e % 2 === 1 });
let r8 = data5.filter(function (e) { return e <= 4 });
console.log(r6)
console.log(r7)
console.log(r8)

// #############################
// Array.prototype.sort(関数オブジェクト)
console.log("*************** Array.prototype.sort(比較用の関数オブジェクト) ***************")
// 配列の並び替え

let r9 = data5.sort(function (a, b) { return a - b });
data5;

let r10 = data5.sort(function (a, b) { return b - a });
data5;

function mysort(a, b) {
  return b - a;
}
data5.sort(mysort);
data5;

console.log(r9)
console.log(r10)
