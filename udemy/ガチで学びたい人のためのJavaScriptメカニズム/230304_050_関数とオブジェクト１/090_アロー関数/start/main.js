// 関数
function a(name) { // 一般的関数
  return 'hello' + name;
}
a('Tom');

// 関数宣言
const b1 = function(name) { // 関数宣言（一般的に無名関数で記述）
  return 'hello' + name;
}
console.log(a('Tom'));

// アロー関数
/*
const b2 = (name) => { // 関数宣言（一般的に無名関数で記述）
  return 'hello' + name;
}
*/
/*
// 引数が1つの場合は()を省略できる
const b2 = name => { // 関数宣言（一般的に無名関数で記述）
  return 'hello' + name;
}
*/
const b3 = (name, name1) => 'hello' + name + ' ' + name1;
console.log(b3('Tom', 'Bob'));

// 実行行が1行の場合は{}とreturnを省略できる
const b2 = name => 'hello' + name;
console.log(b2('Tom'));