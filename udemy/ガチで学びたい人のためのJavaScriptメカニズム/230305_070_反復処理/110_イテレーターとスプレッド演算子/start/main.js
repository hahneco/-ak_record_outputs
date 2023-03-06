// ## スプレッド演算子
// 反復可能や列挙可能オブジェクトの展開を行う。
// 配列を展開する。オブジェクトでも使う
// 例）　let a = [...array]

// 残余引数
// 実引数に渡された変数を配列にまとめる。

const arry1 = [1,2,3,4,5];
const arry2 = [0, ...arry1, 6]; // arry1から「別の」配列を作成する
arry2.push(6);
console.log(arry2);
console.log(arry1 === arry2);

function sum(...args) { // 配列に直す
  let ret = 0; // 戻り値を定義
  for(let v of args) {
    // console.log(v);
    // ret = ret + v;
    ret += v;
  }
  return ret;
}
const result = sum(1,2,3,4);
console.log(result);

const obj1 = {
  prop: 'value1',
  prop: 'value2',
  prop: 'value3',
}

Object.prototype[Symbol.iterator] = function*() {
  for(let key in this) {
    yield [key, this[key]];
  }
}
// const arry3 = [ ...obj1 ];
const arry3 = {...obj1};
console.log(arry3);