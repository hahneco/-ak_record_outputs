// 3_
var colors = ['red', 'blue', 'green'];

// シンプルなforループ文
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i])
};

// なるべくforループ文で表ししないようこ心がける。

// forEachで書いてみる
colors.forEach(function (colors) {
  console.log(colors); // colorsの中身が順番にコールバック関数に渡される
})

// 数字の配列を用意する。
var numbers = [1, 2, 3, 4, 5, 6]

// 合計を保持する変数を用意する。
var sum = 0; // 初期値をセット

// 配列の一つ一つの数字を合計に足す。
/*
// 匿名関数
numbers.forEach(function(number) { // 引数はコールバック関数
  sum += number;
})
*/
// 名前付き関数
function adder(number) { // function 関数名(引数1) {処理}
  sum += number;
}
// numbers.forEach(adder()); // →間違い。adderの実行のタイミングはforEachわ渡ってきた時。
numbers.forEach(adder);

// 合計を表示する。
console.log(sum);
