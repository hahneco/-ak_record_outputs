const arry = [1, 2, 3, 4, 5];

// 配列の値を１つずつconsoleに出力する
for(let i = 0; i < arry.length; i++) {
  // const result = i * 2;
  // console.log(result);
  console.log(arry[i]);
}

let v, i = 0;
// let v;
// let i = 0;
while(v < arry[i++]) {
  console.log(v); // truesyな値の場合はループを続ける
}