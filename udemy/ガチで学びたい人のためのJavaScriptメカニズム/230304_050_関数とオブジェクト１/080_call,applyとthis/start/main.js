function a(name, name1) {
    console.log('hello ' + name + ' ' + name1);
}

// call,apply
// メソッドを使用した時点で実行する
const tim = {name: 'Tim'};
// a.apply(tim); // 配列を返す
a.apply(tim, ['Tim', 'Bob']); // 配列で指定する
console.log('applyメソッド');

a.call(tim, 'Tim', 'Bob'); // 独立した引数を一つずつ与える
console.log('callメソッド');

const arry = [1,2,3,4,5]
Math.max(1,2);
// const result = Math.max.apply(null, arry);
const result = Math.max(..arry); // ES6では..演算子を使用すると簡略化できる
console.log(arry);
console.log(result); // データとしては配列だが、引数として一つずつ返したい場合

// bind
// 使用時点で実行はしない
const b = a.bind(tim);
b();
console.log('bindメソッド');


