// ## Map, Set
// データを入れるための入れ物
// コレクション

// ###########################
// ## Object vs Map
// * Object：
//   キーとして使用：文字列
//   for..inループ文：可
//   for..ofループ文：不可

// * Map：
//   キーとして使用：制約なし
//   for..inループ文：不可
//   for..oループ文f：可
// 読み書きをよくする場合はMapの方が性能がよいとされる

// ###########################
// ## Array vs Set
// * Array：
//    重複値：使用可能
//   for..inループ文：可
//   for..ofループ文：可

// * Set：
//    重複値：使用不可
//   for..inループ文：不可
//   for..oループ文f：可

// ###########################

const map = new Map(); // Mapコンストラクターからインスタンス化。mapというオブジェクトを作成
const key1 = {}; // mapオブジェクトに値をセットする

// mapのセットメソッドを呼び、キーと値をセット
// １つ目がキーとなる情報、２つ目が値
map.set(key1, 'val1');
console.log(map.get(key1));

const key2 = function() {}; // key2という関数をセットする
// mapのセットメソッドを呼び、キーと値をセット
map.set(key2, 'value2');
console.log(map.get(key2));

// ※プリミティブ型の値（文字列や数字）などもキーとして使用することが可能
let key3 = 0;
map.set(key3, 'value3');
console.log(map.get(key3));

map.delete(key3); // 情報の削除
console.log(map.get(key3));

// マップをfor文で取得する
for(const m of map) {
  console.log(m) // 配列でキーと値が取得できる
}

// 分割代入でキーと値をそれぞれ別に取得する
for(const [k, v] of map) {
  console.log(k, v) // 配列でキーと値が取得できる
}

// Mapはfor..inは使用不可
for(const [num, val] in map) {
  console.log(num, val) // 配列でキーと値が取得できる
}

// ###########################
const s = new Set();
s.add(key1);
s.add(key2);
s.add(key3);
s.delete(key3);

console.log(s.has(key3));
// const arry = Array.from(s);s
const arry = [...s]; // 各括弧 スプレッド構文ver
console.log(arry);

for(let k of s) {
  console.log(k);
}