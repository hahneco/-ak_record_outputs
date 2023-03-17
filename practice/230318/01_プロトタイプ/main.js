'use strict'

function update() {
  console.log("プロトタイプの挙動")

  let str = "Hello world";
  let c0 = str.charAt(0);
  let c1 = str.charAt(1);

  console.log(str)
  console.log(c0)
  console.log(c1)
  console.log("Stringオブジェクトにはpush()やpop()は使用できない")

  let data = [

  ];
  data.push(1);
  let d1 = data.pop();

  console.log(d1)
  console.log("ArrayオブジェクトにはcharAt()メソッドは使えない")

  // JavaScriptには厳密な型はない。
  // JavaScriptでオブジェクトを生すすると、そのオブジェクトに「prototype」という見えないプロパティが暗黙う内に追さされる。

  let str0 = new String("Hello!");
  console.log(str0)
  // p0 = str0.prototype;
  // console.log(p0); // 「p0 is not defined」。prototypeの参照先には辿り着けない。
  let p0 = Object.getPrototypeOf(str0);
  console.log(p0)

  let str1 = new String("hello!!")
  let p1 = Object.getPrototypeOf(str1);
  console.log(p1)

  let isIdentical = (p0 === p1);
  console.log(isIdentical) // prototypeの参照先は同じ

  // 注意：プロトタイプの参照は暗黙的であり、プログラマが明示的に示すものではない。
}

// ############################
// コンストラクタ
// javaScriptでオブジェクトを生成する場合には、コンストラクタを使う。
// →new演算子をつけてfunctionを呼び出すと、関数としてではなく、オブジェクトを作成するためのコンストラクタとして動作する。
// →コンストラクタめ明示的にprototypを設定しておくと、そのコンストラクタを使ってつくられたオブジェクトは暗黙のprototypをを参照するようになる。

let myProto = { // prototypeオブジェクト
  sayHello: function () {
    console.log("hello")
  }
}
console.log(myProto)

function myObject() { // コンストラクタ
}

myObject.prototype = myProto; // コンストラクタにprototypeを設定。
console.log(myObject)

let a = new myObject(); // オブジェクト作成
let b = new myObject(); // オブジェクト作成
console.log(a)

a.sayHello();

let p0 = Object.getPrototypeOf(a); // prototypeオブジェクトの取得
let p1 = Object.getPrototypeOf(b); // prototypeオブジェクトの取得
console.log(p0)
let isSame0 = (p0 === p1);
let isSame1 = (p0 === myProto);
console.log(isSame0)
console.log(isSame1)
