const arry = [1, 2, 3, 4, 5];

const result = arry.reduce(function (accu, curr) {
  console.log(accu, curr)
  return accu + curr * 2;
}, 0) // 第二引数に初期値をセット（必要な場合）
console.log(result)
