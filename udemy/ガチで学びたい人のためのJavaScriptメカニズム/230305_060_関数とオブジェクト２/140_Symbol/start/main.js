// シンボルとは
// ES6から
// プロパティーの重複を避けるために、必ず一位の値を返す関数。
// プリミティブ型の値を返す関数。
// ES5からES6にバージョンが上がる際に既存のコードを破壊しないために導入された、一位の値を得るためのプロパティ識別子

//シンボルの定義（new演算子は使わない）
const s = Symbol('hello');
const s2 = Symbol('hello');
console.log(s === s2); // 同じ値を設定しても実体は異なる
console.log(typeof s2);

const str = new String('Tom');
console.log(str);

String.prototype[s] = function() { // プロトタイプ汚染(非推奨)
  return 'hello ' + this;
}

const tom = 'Tom';
console.log(tom[s]());