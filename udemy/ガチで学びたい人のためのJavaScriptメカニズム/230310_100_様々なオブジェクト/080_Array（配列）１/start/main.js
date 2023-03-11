// 配列
const arry = [1, 2, 3, 4, 5];
const arry1 = arry.push(6)
const arry2 = arry.concat([6,7,8])
const arry3 = arry.concat([0, ...arry, 6,7,89,9,9,9,9,9]) // ESかからはスプリッド演算子も使用可能
const result = arry.pop()
const result1 = arry.shift()
const result2 = arry.unshift(0)
const result3 = arry.splice(0, 1, 3, 2) // 範囲切り取り,第３引は切り取った箇所に代入する
console.log(arry);
console.log(arry1);
console.log(arry2);
console.log(arry3);
console.log(result1);
console.log(result2);
console.log(result3);
