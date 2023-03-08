/*
## Strictモードの目的
  * 意図しないバグ混入ぼ防止
  * 予約語の確保
  * コードのセキュア化
*/
// 'user strict'
function fn() {
  'user strict'
  // a = 0;
  // const implements, interface, package;
  return this;
}
console.log(fn.call("2"));
// fn();
// console.log(a);
