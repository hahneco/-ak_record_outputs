'use strict'

// console.log('mapメソッド練習')

let numbers = [1, 2, 3];
// mutate（ミューテート）回避のために新しい配列をセット
let doubledNumbers = [];

// forループ文
for (let i = 0; i < numbers.length; i++) { // 配列の長ぶ分ループ
  doubledNumbers.push(numbers[i] * 2)
}
console.log(doubledNumbers);

// map文
var doubled = numbers.map(function (number) {
  return number * 2; // returnで戻すことが必要 ※新しは配列になっている
});
console.log(doubled);

/*

## forEachメソッド
* 配列からコールバック関数が呼ばれる
* もとの配列に戻される
* →mutate（ミューテート）する

## mapメソッド
* 配列からコールバック関数が呼ばれる
* 「return」で戻り値が新しい配列に格納される
* →mutate（ミューテート）しない

*/
